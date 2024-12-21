"use client";
import styled from "styled-components";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaWordpress,
  FaPhp,
  FaLaravel,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaPython,
  FaJava,
  FaGitAlt,
  FaAws,
  FaBootstrap,
  FaSass,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiFlutter,
  SiExpress,
  SiLinux,
  SiAdobephotoshop,
  SiTailwindcss,
  SiAdobexd,
  SiPostman,
} from "react-icons/si";

const Container = styled.div`
  background-color: #121212; /* Dark background */
  color: #ffffff;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #61dafb;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
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
  cursor: pointer;
  transition: transform 0.3s ease;

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
  { name: "WordPress", icon: <FaWordpress color="#21759b" /> },
  { name: "PHP", icon: <FaPhp color="#777bb4" /> },
  { name: "Laravel", icon: <FaLaravel color="#ff2d20" /> },
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#ffffff" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
  { name: "Angular", icon: <FaAngular color="#dd0031" /> },
  { name: "React Native", icon: <FaReact color="#61dafb" /> },
  { name: "Flutter", icon: <SiFlutter color="#47c9ff" /> },
  { name: "Python", icon: <FaPython color="#3776ab" /> },
  { name: "Java", icon: <FaJava color="#007396" /> },
  { name: "MySQL", icon: <SiMysql color="#f29111" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
  { name: "Git", icon: <FaGitAlt color="#f05033" /> },
  { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
  { name: "Adobe XD", icon: <SiAdobexd color="#ff61f6" /> },
  { name: "Linux", icon: <SiLinux color="#fcc624" /> },
  { name: "API", icon: <SiPostman color="#ff6c37" /> },
  { name: "Networking", icon: <FaNetworkWired color="#2d89ef" /> },
  { name: "AWS", icon: <FaAws color="#ff9900" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952b3" /> },
  { name: "Photoshop", icon: <SiAdobephotoshop color="#31a8ff" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
  { name: "Sass", icon: <FaSass color="#cc6699" /> }
];

const SkillShowcase = () => {
  return (
    <Container>
      <Grid>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </Grid>
    </Container>
  );
};

export default SkillShowcase;
