import React, { useState, useEffect } from 'react';
import '../assets/App.css';

export default function Counter() {
  function Count() {
    const [count, setCount] = useState(0);useEffect(() => {
    if (count >= 10 && count % 10 === 0) {
      alert("Vous avez cliqué " + [count] + " fois!");
    }
  }, [count],1);
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>
          Cliquez ici
        </button>
        <p>Vous avez cliqué {count} fois</p>
      </div>
    );
  }

  return (
    <body>
      <h1>Welcome to my Counter</h1>
      <Count />
    </body>
  );
}
