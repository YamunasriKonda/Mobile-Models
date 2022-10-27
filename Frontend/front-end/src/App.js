import logo from './logo.svg';
import './App.css';
import './Components/Heading.jsx'
import Heading from './Components/Heading.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading></Heading>
       <div>
         welcome
        
       </div>
      </header>
    </div>
  );
}

export default App;
