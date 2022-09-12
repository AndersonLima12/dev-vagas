import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, CardsContainer, Card } from './styles';
import BackHome from '../../components/BackHome';
import api from '../../services/api';

interface UserRequest {
  title: string;
  url: string;
  number: number;
  html_url: string;
  user: {
    avatar_url: string;
    login: string;
  };
}

const JobsRepository: React.FC = () => {
  const [userData, setUserData] = useState<UserRequest[]>([]);

  useEffect(() => {
    async function handleData(): Promise<void> {
      const response = await api.get('/repos/frontendbr/vagas/issues');
      setUserData(response.data);
    }
    handleData();
  }, []);

  return (
    <Container>
      <BackHome />

      <Content>
        <h1>Vagas recentes</h1>

        <CardsContainer>
          {userData.map(datas => (
            <Card key={datas.url}>
              <Link to={`/details/${datas.number}`}>
                <div>
                  <img src={datas.user.avatar_url} alt="" />
                  <span>
                    Usuário(a) que divulgou a vaga: <b>{datas.user.login}</b>
                  </span>
                  <p>Vaga: {datas.title}</p>
                </div>
              </Link>
            </Card>
          ))}
        </CardsContainer>
      </Content>
    </Container>
  );
};

export default JobsRepository;
