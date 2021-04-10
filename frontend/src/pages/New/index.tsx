import React, { useState } from 'react';

import FormCreate from '../../components/FormCreate'
import TopbarCreateForm from '../../components/TopbarCreateForm'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  background-color: #f1f1f1;
`;

const New: React.FC = () => {
  const [titleForm, setTitleForm] = useState("")
  return (
    <Container>
      <TopbarCreateForm titleForm={titleForm} setTitleForm={setTitleForm}/>
      <FormCreate titleForm={titleForm} setTitleForm={setTitleForm}/>
    </Container>
  );
}

export default New;