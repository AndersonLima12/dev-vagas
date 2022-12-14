import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import { Container } from './styles';
import logo from '../../assets/logo-app.png';

const BackHome: React.FC = () => {
  return (
    <Container>
      <header>
        <img src={logo} alt="Logo" />

        <Link to="/">
          <MdArrowBack />
          Voltar para home
        </Link>
      </header>
    </Container>
  );
};

export default BackHome;
