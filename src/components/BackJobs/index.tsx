import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import { Container } from './style';
import logo from '../../assets/logo-app.png';

const BackJobs: React.FC = () => {
  return (
    <Container>
      <header>
        <img src={logo} alt="Logo" />

        <Link to="/jobs">
          <MdArrowBack />
          Voltar para vagas
        </Link>
      </header>
    </Container>
  );
};

export default BackJobs;
