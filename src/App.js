import React from 'react';
import practice from './practice.svg';
import ide from './ide.svg'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
         <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="hi-user">Hi Username.</div>

      <header className="App-header">
        <div className="Row">
          <img src={ide} className="ide-image" alt="ide-image" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu mauris maximus, porttitor mi nec.
          </p>
          <Button variant="primary">Open Online IDE</Button>{' '}
        </div>
        <div><br></br></div>
        <div className="Row">
          <img src={practice} className="App-image" alt="app-image" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu mauris maximus, porttitor mi nec.
          </p>
          <Button variant="primary">Start Practicing</Button>{' '}
        </div>
        
      </header>
    </div>
  );
}

export default App;
