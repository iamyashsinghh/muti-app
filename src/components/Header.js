"use client";
import styled from "styled-components";
import Link from "next/link";
import { FaHome, FaInfoCircle, FaEnvelope, FaTools, FaSearch } from "react-icons/fa";

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #61dafb;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  background-color: transparent;
  transition: all 0.3s ease;

  &:hover {
    background-color: #61dafb;
    color: #282c34;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <Logo>DEV X</Logo>
      </Link>
      <Nav>
        <NavLink href="/">
          <FaHome /> Home
        </NavLink>
        <NavLink href="/text-utils">
          <FaTools /> Text Utils
        </NavLink>
        <NavLink href="/serp-simulator">
          <FaSearch /> SERP Simulator
        </NavLink>
        <NavLink href="/about">
          <FaInfoCircle /> About
        </NavLink>
        <NavLink href="/contact">
          <FaEnvelope /> Contact
        </NavLink>
        <NavLink href="https://weddingbanquets.in">
          <FaEnvelope /> Wedding Banquets
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
