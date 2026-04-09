import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleIncrementAfterDelay() {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 2000);
  }

  function handleIncrementTwice() {
    setCount(count + 1);
    setCount(count + 1);
  }

  function handleCorrectIncrementTwice() {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  }

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
      fontFamily: 'Arial, sans-serif',
    },
    buttons: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Counter: {count}</h1>
      <div style={styles.buttons}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrementAfterDelay}>Increment After Delay</button>
        <button onClick={handleIncrementTwice}>Increment Twice</button>
        <button onClick={handleCorrectIncrementTwice}>Correct Increment Twice</button>
      </div>
    </div>
  );
}