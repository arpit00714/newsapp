
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API
  
  state = {
    progress: 0 
  }
  setProgress(progress){
     this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
         <NavBar />
         <LoadingBar
        color='#f11946'
        progress={this.state.progress}
         />
         <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} Key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} Key="business" pageSize={this.pageSize} country="in" category="business"/>}/>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} Key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}/>
          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} Key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} Key="health" pageSize={this.pageSize} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} Key="science" pageSize={this.pageSize} country="in" category="science"/>}/>
          <Route exact path="/sport" element={<News setProgress={this.setProgress} apiKey={this.apiKey} Key="sport" pageSize={this.pageSize} country="in" category="sport"/>}/>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} Key="technology" pageSize={this.pageSize} country="in" category="technology"/>}/>
           </Routes>
      </Router>
      </div>
    )
  }
}
