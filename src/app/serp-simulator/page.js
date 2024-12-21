"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  color: #fff;
`;

const PreviewContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: flex-start;
  background: #ffffff;
  border: 1px solid #dadce0;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  line-height: 1.5;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ResponsiveImage = styled.div`
  margin-right: 15px;

  img {
    width: 100px;
    height: auto;
    max-width: 100%;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    img {
    display:none;
    }
  }
`;

const SnippetPreview = styled.div`
margin-top: 15px;
  .title {
    font-size: 20px;
    color: #1a0dab;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    margin: 0;
  }

  .url {
    font-size: 12px;
    color: #006621;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .description {
    font-size: 14px;
    color: #4d4d4d;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    margin: 0;
  }
`;

const InputSection = styled.div`
  margin-top: 20px;

  input,
  textarea {
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #dadce0;
    background: #ffffff;
    color: #202124;
    border-radius: 8px;
    font-size: 1rem;
  }

  textarea {
    height: 80px;
    resize: none;
  }
`;

const ErrorText = styled.div`
  font-size: 0.9rem;
  color: ${(props) => (props.isValid ? "#34a853" : "#ea4335")};
  margin-top: -10px;
  margin-bottom: 15px;
`;

const HighlightedText = styled.span`
  color: ${(props) => (props.isOverLimit ? "#ea4335" : "inherit")};
`;

export default function SERPSimulator() {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");

    const TITLE_CHARACTER_LIMIT = 62;
    const TITLE_PIXEL_LIMIT = 580;
    const DESCRIPTION_CHARACTER_LIMIT = 160;
    const DESCRIPTION_PIXEL_LIMIT = 920;

    const calculatePixelWidth = (text, fontSize = 14) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        ctx.font = `${fontSize}px Arial`;
        return ctx.measureText(text).width;
    };

    const titlePixelWidth = calculatePixelWidth(title, 22);
    const descriptionPixelWidth = calculatePixelWidth(description, 14);

    const isTitleCharacterValid = title.length <= TITLE_CHARACTER_LIMIT;
    const isTitlePixelValid = titlePixelWidth <= TITLE_PIXEL_LIMIT;
    const isDescriptionCharacterValid = description.length <= DESCRIPTION_CHARACTER_LIMIT;
    const isDescriptionPixelValid = descriptionPixelWidth <= DESCRIPTION_PIXEL_LIMIT;

    const playSound = () => {
        const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
        audio.play();
    };

    useEffect(() => {
        if (
            !isTitleCharacterValid ||
            !isTitlePixelValid ||
            !isDescriptionCharacterValid ||
            !isDescriptionPixelValid
        ) {
            playSound();
        }
    }, [isTitleCharacterValid, isTitlePixelValid, isDescriptionCharacterValid, isDescriptionPixelValid]);

    const renderHighlightedText = (text, charLimit, pixelLimit, pixelWidth) => {
        const overLimit = text.length > charLimit || pixelWidth > pixelLimit;
        return (
            <>
                {text.slice(0, charLimit)}
                <HighlightedText isOverLimit={overLimit}>{text.slice(charLimit)}</HighlightedText>
            </>
        );
    };

    return (
        <Container>
            <Title>Google SERP Simulator</Title>

            {/* Snippet Preview */}
            <PreviewContainer>
                <ResponsiveImage>
                    <Image
                        src="/favicon_google_logo_new_icon.png"
                        alt="Google Logo"
                        width={100}
                        height={100}
                    />
                </ResponsiveImage>
                <SnippetPreview>
                    <p className="title">
                        {renderHighlightedText(
                            title || "Your Page Title Goes Here",
                            TITLE_CHARACTER_LIMIT,
                            TITLE_PIXEL_LIMIT,
                            titlePixelWidth
                        )}
                    </p>
                    <p className="url">{url || "www.example.com"}</p>
                    <p className="description">
                        {renderHighlightedText(
                            description || "Your meta description will appear here.",
                            DESCRIPTION_CHARACTER_LIMIT,
                            DESCRIPTION_PIXEL_LIMIT,
                            descriptionPixelWidth
                        )}
                    </p>
                </SnippetPreview>
            </PreviewContainer>

            {/* Input Section */}
            <InputSection>
                <input
                    type="text"
                    placeholder="Enter Page Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <ErrorText isValid={isTitleCharacterValid && isTitlePixelValid}>
                    {title.length} / {TITLE_CHARACTER_LIMIT} characters | {titlePixelWidth.toFixed(0)}px / {TITLE_PIXEL_LIMIT}px
                </ErrorText>

                <input
                    type="text"
                    placeholder="Enter Page URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />

                <textarea
                    placeholder="Enter Meta Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <ErrorText isValid={isDescriptionCharacterValid && isDescriptionPixelValid}>
                    {description.length} / {DESCRIPTION_CHARACTER_LIMIT} characters | {descriptionPixelWidth.toFixed(0)}px / {DESCRIPTION_PIXEL_LIMIT}px
                </ErrorText>
            </InputSection>
        </Container>
    );
}
