"use client";
import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactContainer = styled.div`
  background-color: #121212;
  color: #ffffff;
  padding: 3rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #61dafb;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin-bottom: 3rem;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #f0f0f0;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #c9c9c9;
  margin-bottom: 1.5rem;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const ContactDetail = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  color: #c9c9c9;
  background-color: #1e1e1e;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #282828;
    transform: scale(1.05);
  }
`;

const ContactIcon = styled.div`
  font-size: 2rem;
  color: #61dafb;
`;

const ContactText = styled.div`
  text-align: left;
`;

const Form = styled.form`
  background-color: #1e1e1e;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #2a2a2a;
  color: #ffffff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border: 2px solid #61dafb;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #2a2a2a;
  color: #ffffff;
  font-size: 1rem;
  resize: none;

  &:focus {
    outline: none;
    border: 2px solid #61dafb;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #61dafb;
  color: #121212;
  font-size: 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #21a1f1;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  font-size: 2rem;
  color: #c9c9c9;
  transition: color 0.3s;

  &:hover {
    color: #61dafb;
  }
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      <Title>Contact Me</Title>

      <Section>
        <SubTitle>Get In Touch</SubTitle>
        <Text>
          Have a project in mind, or just want to say hi? I'd love to hear from you! Here are a few ways to get in touch
          with me.
        </Text>
        <ContactDetails>
          <ContactDetail whileHover={{ scale: 1.05 }}>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <ContactText>Email: Bad Me Bataunga</ContactText>
          </ContactDetail>
          <ContactDetail whileHover={{ scale: 1.05 }}>
            <ContactIcon>
              <FaPhoneAlt />
            </ContactIcon>
            <ContactText>Phone: +91 Bad Me Bataunga</ContactText>
          </ContactDetail>
          <ContactDetail whileHover={{ scale: 1.05 }}>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <ContactText>Location: Bad Me Bataunga</ContactText>
          </ContactDetail>
        </ContactDetails>
      </Section>

      <Section>
        <SubTitle>Drop Me a Message</SubTitle>
        {/* <Form>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <TextArea rows="5" placeholder="Your Message" required></TextArea>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form> */}
      </Section>

      <Section>
        <SubTitle>Connect with Me : Bataunga jldi hi </SubTitle>
        {/* <SocialLinks>
          <SocialLink href="https://linkedin.com" target="_blank">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="https://github.com" target="_blank">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://twitter.com" target="_blank">
            <FaTwitter />
          </SocialLink>
        </SocialLinks> */}
      </Section>
    </ContactContainer>
  );
};

export default ContactPage;
