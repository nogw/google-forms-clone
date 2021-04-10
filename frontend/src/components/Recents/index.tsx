import React from 'react';

import { Container, Header } from './styles';

import ViewListOutlinedIcon from '@material-ui/icons/ViewListOutlined';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';

const Recents: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Recent forms</h1>
        <div className="right">
          <div className="button">
            <button>
              <ViewListOutlinedIcon style={{ color: '#5f6368' }}/>
            </button>
          </div>
          <div className="button">
            <button>
              <SortByAlphaIcon style={{ color: '#5f6368' }}/>
            </button>
          </div>
          <div className="button">
            <button>
              <FolderOpenOutlinedIcon style={{ color: '#5f6368' }}/>
            </button>
          </div>
        </div>
      </Header>
      <div className="noForms">
      <h1>No forms yet</h1>
      <p>Click + to create a new form.</p>
      </div>
    </Container>
  );
}

export default Recents;