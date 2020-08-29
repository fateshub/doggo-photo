import React , {useState}from 'react';
import Dogo from './Dogo';
import Chat from './Chat';

import './App.css';

function App() {
  const [update ,setUpdate] = useState(false)

  return (
    <div className="App">
    <Dogo update={update}  setUpdate={setUpdate} />
    <Chat update={update}  setUpdate={setUpdate}/>
    </div>
  );
}

export default App;
