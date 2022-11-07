import logo from './logo.svg';
import './App.css';
import * as React from 'react';


function App() {
  const [isOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };
  

  return (

    <div className="App">
      <h1>Basic GUI Testing</h1>
    
      <Button onClick={handleClick}>Send signal</Button>

      {isOpen && <div>Should display green</div>}
      {!isOpen && <div>Should display red</div>}
      {isOpen && <GreenBox />}
      {!isOpen && <RedBox />}
    </div>
  )
}

// create a green box
const GreenBox = () => {
  return (
    <div style={{backgroundColor: 'green', width: '100px', height: '100px'}}></div>
  )
}
// create a red box
const RedBox = () => {
  return (
    <div style={{backgroundColor: 'red', width: '100px', height: '100px'}}></div>
  )
}

const Button = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default App;
