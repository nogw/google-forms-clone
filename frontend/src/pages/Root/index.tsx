import React from 'react';

import Topbar from '../../components/Topbar'
import ContainerDocs from '../../components/ContainerDocs'
import Recents from '../../components/Recents'
import api from '../../services/api'

const Root: React.FC = () => {
  return (
    <>
      <Topbar/>
      <ContainerDocs/>
      <Recents/>
    </>
  );
}

export default Root;