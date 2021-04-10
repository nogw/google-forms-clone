import React from 'react';

import Topbar from '../../components/Topbar'
import ContainerDocs from '../../components/ContainerDocs'
import Recents from '../../components/Recents'

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