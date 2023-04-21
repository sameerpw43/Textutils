import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);
  

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
     
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
     
    }
  }
  const rtoggleMode = ()=>{
    if(mode === 'light'){
     
      setMode('danger')
      document.body.style.backgroundColor = 'pink';
      showAlert("Dark mode has been enabled", "success");
     
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
     
    }
  }
  return (
   
    <>
   
   <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}rtoggleMode = {rtoggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route path="/"  element ={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>} >
           
          </Route>
          <Route  path="/about" element ={<About mode={mode}/>}>
           
          </Route>
    </Routes>
    </div>
    </Router>

    </>
  );
}

export default App;
