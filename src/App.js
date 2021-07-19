import React, { useState } from 'react'
import './App.css';
import Counter from './components/Counter'
import Actions from './components/Actions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Counter count={count}/>
      <Actions onClick={(value) => setCount(value)} count={count}/>
    </div>
  );
}

export default App;
