import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Container, Content } from './styles';
import BackJobs from '../../components/BackJobs';
import api from '../../services/api';

interface JobsRepository {
  number: string;
}

interface JobsTypes {
  title: string;
  number: string;
  body: string;
  html_url: string;
}

const JobsDetails: React.FC = () => {
  const { params } = useRouteMatch<JobsRepository>();

  const [jobsData, setJobsData] = useState<JobsTypes | null>(null);

  useEffect(() => {
    async function handleData(): Promise<void> {
      const response = await api.get(
        `/repos/frontendbr/vagas/issues/${params.number}`,
      );
      setJobsData(response.data);
    }
    handleData();
  }, [params.number]);

  return (
    <>
      <Helmet>
        <title>Vagas Brasil: {params.number}</title>
      </Helmet>
      <BackJobs />
      <Container>
        <Content>
          <h1>Nome da vaga: {jobsData?.title}</h1>
          {jobsData && (
            <div key={jobsData.number}>
              <h2>Mais informações</h2>
              <hr />

              <strong>Descrição da vaga:</strong>

              <p className="description__p">{jobsData.body}</p>

              <a href={`${jobsData.html_url}`}>
                Contato com o anunciante da vaga
              </a>
            </div>
          )}
        </Content>
      </Container>
    </>
  );
};

export default JobsDetails;
