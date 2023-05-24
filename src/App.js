
import './App.css';

import React,{ useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = ()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);


    return (
      <div>
        <Router>
         <NavBar />
         <LoadingBar
        color='#f11946'
        progress={progress} 
         />
         <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} Key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} Key="business" pageSize={pageSize} country="in" category="business"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} Key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} Key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} Key="health" pageSize={pageSize} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} Key="science" pageSize={pageSize} country="in" category="science"/>}/>
          <Route exact path="/sport" element={<News setProgress={setProgress} apiKey={apiKey} Key="sport" pageSize={pageSize} country="in" category="sport"/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} Key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
           </Routes>
      </Router>
      </div>
    )
  }

  export default App;