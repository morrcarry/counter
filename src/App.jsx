import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'black',
          color: 'wheat',
          height: '100vh',
        }}
      >
        Count: {count}
        <div style={{ display: 'flex' }}>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    </>
  );
}

export default App;
