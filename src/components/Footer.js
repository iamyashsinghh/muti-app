"use client";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #282c34; /* Matching header background */
  color: #ffffff;
  text-align: center;
  padding: 1.5rem 2rem;
  font-size: 0.9rem;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for elegance */
  margin-top: auto; /* Pushes footer to the bottom */

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const FooterLinks = styled.div`
  margin: 0.5rem 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const FooterLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  font-size: 1.5rem; /* Large, elegant icons */
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    transform: scale(1.2); /* Subtle zoom on hover */
  }
`;

const FooterText = styled.p`
  margin: 1rem 0 0;
  font-size: 0.9rem;
  color: #c9c9c9; /* Softer color for the text */

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      {/* <FooterLinks>
        <FooterLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </FooterLink>
        <FooterLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </FooterLink>
        <FooterLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </FooterLink>
      </FooterLinks> */}
      <FooterText>&copy; 2024 My Skills Showcase App. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
