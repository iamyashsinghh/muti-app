"use client";
import { useState } from "react";
import Head from "next/head";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import {
  FaClipboard,
  FaTrash,
  FaUndo,
  FaRedo,
  FaVolumeUp,
  FaPaste,
  FaEye,
} from "react-icons/fa";
import {
  MdFormatClear,
  MdNumbers,
  MdRemoveCircle,
  MdTextFormat,
  MdLink,
} from "react-icons/md";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', Arial, sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
  textarea {
    width: 90%;
    height: 150px;
    margin: 20px 0;
    padding: 15px;
    border: 2px solid ${({ theme }) => theme.border};
    border-radius: 8px;
    font-size: 16px;
    resize: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  button {
    margin: 10px 5px;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonText};
    display: flex;
    align-items: center;
    gap: 10px;
    transition: transform 0.2s, background-color 0.3s;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  }
  button:hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

const Container = styled.div`
  padding: 20px;
  margin: 20px auto;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const Stats = styled.div`
  margin-top: 20px;
  text-align: left;
  background: ${({ theme }) => theme.statsBackground};
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.primary};
  }
  p {
    font-size: 1rem;
    margin: 5px 0;
  }
`;

const Preview = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 20px;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  h3 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const themes = {
  light: {
    background: "#f9f9f9",
    text: "#333",
    border: "#ddd",
    buttonBackground: "#4caf50",
    buttonText: "#ffffff",
    buttonHover: "#388e3c",
    primary: "#4caf50",
    cardBackground: "#ffffff",
    statsBackground: "#ffffff",
  },
  dark: {
    background: "#121212",
    text: "#ffffff",
    border: "#333333",
    buttonBackground: "#bb86fc",
    buttonText: "#ffffff",
    buttonHover: "#9c27b0",
    primary: "#bb86fc",
    cardBackground: "#1e1e1e",
    statsBackground: "#1e1e1e",
  },
};

export default function Home() {
  const [text, setText] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const updateHistory = (newText) => {
    setHistory((prev) => [...prev, text]);
    setText(newText);
    setRedoStack([]);
  };

  const handleUndo = () => {
    if (history.length > 0) {
      setRedoStack((prev) => [...prev, text]);
      setText(history[history.length - 1]);
      setHistory((prev) => prev.slice(0, -1));
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      setHistory((prev) => [...prev, text]);
      setText(redoStack[redoStack.length - 1]);
      setRedoStack((prev) => prev.slice(0, -1));
    }
  };

  const handleClearText = () => updateHistory("");

  const handleCopyToClipboard = () => navigator.clipboard.writeText(text);

  const handlePasteFromClipboard = async () => {
    const clipboardText = await navigator.clipboard.readText();
    updateHistory(clipboardText);
  };

  const handleConvertToUpperCase = () => updateHistory(text.toUpperCase());

  const handleConvertToLowerCase = () => updateHistory(text.toLowerCase());

  const handleConvertToSentenceCase = () =>
    updateHistory(
      text
        .toLowerCase()
        .split(". ")
        .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
        .join(". ")
    );

  const handleExtractNumbers = () =>
    updateHistory(text.match(/\d+/g)?.join(" ") || "");

  const handleExtractLinks = () =>
    updateHistory(text.match(/https?:\/\/\S+/g)?.join(" ") || "");

  const handleRemoveWhitespace = () =>
    updateHistory(text.replace(/\s+/g, " ").trim());

  const handleRemoveSpecialCharacters = () =>
    updateHistory(text.replace(/[^a-zA-Z0-9 ]/g, ""));

  const handleReverseText = () =>
    updateHistory(text.split("").reverse().join(""));

  const handleListenText = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const handleCapitalizeFirstLetter = () => {
    updateHistory(
      text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  };

  const stats = {
    words: text.trim().split(/\s+/).length,
    characters: text.length,
    statements: (text.match(/\./g) || []).length,
    questions: (text.match(/\?/g) || []).length,
    exclamations: (text.match(/!/g) || []).length,
    minutesRead: Math.ceil(text.trim().split(/\s+/).length / 200),
  };

  return (
    <ThemeProvider theme={darkMode ? themes.dark : themes.light}>
      <GlobalStyle />
      <Head>
        <title>Text Utils</title>
      </Head>
      <Container>
        <Title>Text Utils</Title>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
        ></textarea>
        <Actions>
          <button onClick={handleConvertToUpperCase}>
            <MdTextFormat /> Uppercase
          </button>
          <button onClick={handleConvertToLowerCase}>
            <MdTextFormat /> Lowercase
          </button>
          <button onClick={handleCapitalizeFirstLetter}>
            <MdTextFormat /> Capitalize First Letter
          </button>
          <button onClick={handleConvertToSentenceCase}>
            <MdTextFormat /> Sentence Case
          </button>
          <button onClick={handleExtractNumbers}>
            <MdNumbers /> Extract Numbers
          </button>
          <button onClick={handleExtractLinks}>
            <MdLink /> Extract Links
          </button>
          <button onClick={handleRemoveWhitespace}>
            <MdFormatClear /> Remove Whitespace
          </button>
          <button onClick={handleRemoveSpecialCharacters}>
            <MdRemoveCircle /> Remove Special Characters
          </button>
          <button onClick={handleReverseText}>
            <FaEye /> Reverse Text
          </button>
          <button onClick={handlePasteFromClipboard}>
            <FaPaste /> Paste from Clipboard
          </button>
          <button onClick={handleCopyToClipboard}>
            <FaClipboard /> Copy to Clipboard
          </button>
          <button onClick={handleListenText}>
            <FaVolumeUp /> Listen Text
          </button>
          <button onClick={handleUndo}>
            <FaUndo /> Undo
          </button>
          <button onClick={handleRedo}>
            <FaRedo /> Redo
          </button>
          <button onClick={handleClearText}>
            <FaTrash /> Clear Text
          </button>
        </Actions>
        <Stats>
          <h3>Your Text Summary</h3>
          <p>Words: {stats.words}</p>
          <p>Characters: {stats.characters}</p>
          <p>Statements: {stats.statements}</p>
          <p>Questions: {stats.questions}</p>
          <p>Exclamations: {stats.exclamations}</p>
          <p>{stats.minutesRead} Minutes read</p>
        </Stats>
        <Preview>
          <h3>Preview</h3>
          <p>{text || "Nothing to preview!!"}</p>
        </Preview>
      </Container>
    </ThemeProvider>
  );
}
