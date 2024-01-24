import { useEffect, useState, useRef } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';

import { Sub } from './types';

const initialState = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'A veces es moderador'
  }, 
  {
  nick: 'jorge',
  subMonths: 4,
  avatar: 'https://i.pravatar.cc/150?u=jorge',
  }
]

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSubs(initialState)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
    setNewSubsNumber(newSubsNumber + 1)
  }

  return (
    <div className="App" ref={divRef}>
      <h1>subs !</h1>
      <List subs={subs}/>
      New subs: {newSubsNumber}
      <Form onNewSub={handleNewSub}></Form>
    </div>
  );
}

export default App;
