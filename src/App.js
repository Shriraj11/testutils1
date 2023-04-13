

import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
 
  return (
    <>
  
<Navbar title='TextUtils' search='search us' about='About'/>
  <Alert alert={alert}/>
  <div className="container my-3" >
  <TextForm heading='Enter Text'/>
  <About></About>
  </div>
    </> 
  );
  
}

export default App;
