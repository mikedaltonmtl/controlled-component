import { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './components/Button';

const Application = () => {

  const [name, setName] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const reset = () => {
    setName('');
  };

  return (
    <main>
      <input
        placeholder='Type your name'
        value={name}
        onChange={handleNameChange}
      >
      </input>
      <Button reset={reset}>Reset</Button>
      {name && (
        <h1>Hello {name}</h1>
      )}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
