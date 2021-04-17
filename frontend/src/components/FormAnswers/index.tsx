import React from 'react';

import EqualizerIcon from '@material-ui/icons/Equalizer';
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Container, Counter } from './styles';

const FormAnswers: React.FC = () => {
  return (
    <Container>
      <Counter>
        <h1>{0} replies</h1>
        
        <IconButton size="small">
          <EqualizerIcon className="chart"/>
        </IconButton>
        
        <IconButton size="small">
          <MoreVertIcon/>
        </IconButton>
        
      </Counter>

      <div className="list">
        <div className="answer">
          <h4>exemple answer</h4>
          <p>1 response</p>
          <p>aaaa</p>
        </div>
      </div>
    </Container>
  );
}

export default FormAnswers;