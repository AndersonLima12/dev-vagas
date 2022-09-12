import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import logo from '../../assets/logo-app.png';

// apply the implicit return

const Home: React.FC = () => (
  <Container>
    <img src={logo} alt="React Brasil Vagas Logo" />
    <h1>Repositório de vagas Brasil</h1>

    <p>
      Essa aplicação tem como objetivo reunir todas as vagas contidas nos issues
      de repositórios de vagas, trazendo melhor experiência para quem está
      buscando uma vaga de emprego.
    </p>

    <Link to="/jobs">Acessar vagas</Link>
  </Container>
);

export default Home;
