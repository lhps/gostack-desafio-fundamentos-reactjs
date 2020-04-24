import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  selected: boolean;
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  selected,
}: HeaderProps) => (
  <Container size={size} selected={selected}>
    <header>
      <img src={Logo} alt="GoFinances" />
      {console.log(selected)}
      <nav>
        <Link to="/">Listagem</Link>
        <Link to="/import">Importar</Link>
      </nav>
    </header>
  </Container>
);

export default Header;
