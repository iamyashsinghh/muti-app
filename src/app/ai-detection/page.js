"use client";

import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: #1e1e1e;
  color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #61dafb;
  text-align: center;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border: 2px solid #333333;
  background: #2e2e2e;
  color: #ffffff;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const HighlightedText = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #292929;
  border-radius: 8px;
  line-height: 1.8;

  span {
    background-color: #ff6b6b;
    color: #ffffff;
    border-radius: 4px;
    padding: 2px 4px;
  }
`;

const Summary = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #333333;
  border-radius: 8px;
  text-align: left;

  p {
    margin: 5px 0;
    color: #cccccc;
  }

  strong {
    color: #ffffff;
  }
`;

export default function AIDetectionPage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeText = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/ai-detection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error analyzing text:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderHighlightedText = () => {
    if (!result || !result.highlighted_text) return null;

    return result.highlighted_text.map((section, idx) => (
      <span
        key={idx}
        style={{
          backgroundColor: section.is_ai ? "#ff6b6b" : "transparent",
          color: section.is_ai ? "#ffffff" : "#cccccc",
        }}
      >
        {section.text}
      </span>
    ));
  };

  return (
    <Container>
      <Title>AI Content Detection</Title>
      <TextArea
        placeholder="Paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={analyzeText} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze Text"}
      </Button>

      {result && (
        <>
          <Summary>
            <p>
              <strong>AI Probability:</strong> {result.ai_probability}%
            </p>
            <p>
              <strong>Human Probability:</strong> {result.human_probability}%
            </p>
          </Summary>
          <HighlightedText>{renderHighlightedText()}</HighlightedText>
        </>
      )}
    </Container>
  );
}
