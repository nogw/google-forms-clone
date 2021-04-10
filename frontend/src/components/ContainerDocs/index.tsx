import React from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton'
import { Container, Texts, Docs, Doc } from './styles';

const ContainerDocs: React.FC = () => {
  return (
    <Container>
      <Texts>
        <h1>Start a new form</h1>
        <IconButton size="small">
          <MoreVertIcon/>
        </IconButton>
      </Texts>
      <Docs>
        <Doc>
          <div className="image">
            <img src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png" alt="add"/>
          </div>
          <div className="text">
            <h1>In blank</h1>
          </div>
        </Doc>
      </Docs>
    </Container>
  );
}

export default ContainerDocs;