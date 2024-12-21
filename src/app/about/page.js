"use client";
import React from "react";
import styled from "styled-components";
import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaPython,
  FaJava,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import { SiNextdotjs, SiMysql, SiMongodb, SiTailwindcss, SiPostman } from "react-icons/si";

const AboutContainer = styled.div`
  background-color: #121212;
  color: #ffffff;
  padding: 3rem 2rem;
  text-align: center;
  line-height: 1.8;
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
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #f0f0f0;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #c9c9c9;
  margin-bottom: 1.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled.div`
  background-color: #1e1e1e;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #c9c9c9;
`;

const skills = [
  { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
  { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
  { name: "PHP", icon: <FaPhp color="#777bb4" /> },
  { name: "Laravel", icon: <FaLaravel color="#ff2d20" /> },
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
  { name: "Python", icon: <FaPython color="#3776ab" /> },
  { name: "MySQL", icon: <SiMysql color="#f29111" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
  { name: "Git", icon: <FaGitAlt color="#f05033" /> },
  { name: "API Development", icon: <SiPostman color="#ff6c37" /> },
  { name: "AWS", icon: <FaAws color="#ff9900" /> },
];

const AboutPage = () => {
  return (
    <AboutContainer>
      <Section>
        <SubTitle>Who I Am</SubTitle>
        <Text>
          Hello! I'm a professional software developer with over 4 years of experience in building web and mobile applications. My expertise lies in full-stack development, and I have worked extensively with technologies like React, Next.js, Laravel, Python, and Node.js to create innovative and scalable applications.
        </Text>
        <Text>
          My journey in software development began with a passion for solving real-world problems through technology. Over the years, I have honed my skills to design and develop modern, user-friendly applications that meet the highest industry standards.
        </Text>
      </Section>

      <Section>
        <SubTitle>What I Do</SubTitle>
        <Text>
          I specialize in both frontend and backend development, delivering end-to-end solutions for clients. My key areas of expertise include:
        </Text>
        <Text>
          - Developing **large-scale CRM and HRMS systems** for business management.
        </Text>
        <Text>
          - Building **responsive and dynamic websites** using modern frameworks like React, Next.js, and Laravel.
        </Text>
        <Text>
          - Creating **custom APIs and integrations** for seamless data exchange between platforms.
        </Text>
        <Text>
          - Implementing **SEO and digital marketing strategies** to enhance online visibility for clients.
        </Text>
        <Text>
          - Providing **hosting and DevOps solutions** using AWS and VPS servers.
        </Text>
      </Section>

      <Section>
        <SubTitle>Applications I've Developed</SubTitle>
        <Text>
          Over the years, I've developed a variety of applications that showcase my expertise:
        </Text>
        <Text>
          - **CRM System**: A customer relationship management platform with advanced lead tracking, pipeline management, and real-time analytics.
        </Text>
        <Text>
          - **HR Management System (HRMS)**: A complete HR solution for attendance, payroll, and employee management.
        </Text>
        <Text>
          - **Lead Management System**: Built with Next.js and MongoDB, featuring advanced filtering, reporting, and scheduling.
        </Text>
        <Text>
          - **E-commerce Platform**: A multi-vendor online store with secure payment gateways and order tracking.
        </Text>
        <Text>
          - **Real-time Chat Application**: Integrated with WhatsApp and Socket.IO for seamless business communication.
        </Text>
        <Text>
          - **Dynamic Event Calendar**: A web application for event planning and scheduling, using Node.js and EJS.
        </Text>
      </Section>

      <Section>
        <SubTitle>Skills</SubTitle>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard key={index}>
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Section>

      <Section>
        <SubTitle>Philosophy</SubTitle>
        <Text>
          My philosophy is simple: technology should simplify lives. Whether it's building robust software solutions or creating elegant user interfaces, my goal is to combine functionality with beauty. I believe in continuous learning and adaptability, keeping pace with ever-evolving technologies to deliver the best solutions to my clients.
        </Text>
        <Text>
          I am driven by the desire to make a meaningful impact through technology, helping businesses achieve their goals while delivering outstanding user experiences.
        </Text>
      </Section>

      <Section>
        <SubTitle>Let's Work Together</SubTitle>
        <Text>
          If you're looking for a skilled developer to bring your ideas to life, let's connect. Whether it's building a custom web application, optimizing your digital presence, or managing complex IT solutions, I am here to help.
        </Text>
        <Text>
          Feel free to reach out to discuss your project requirements or explore how I can contribute to your success.
        </Text>
      </Section>
    </AboutContainer>
  );
};

export default AboutPage;
