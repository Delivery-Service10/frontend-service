import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar'

function App() {
  return (
    <div className="App">
      <Toolbar/>
      <main style={{marginTop: '56px'}}>
          <p>This is the content to be added later</p>
      </main>

    </div>
  );
}

export default App;
