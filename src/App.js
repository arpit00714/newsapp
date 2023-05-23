
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  render() {
    return (
      <div>
        <Router>
         <NavBar />
         <Routes>
          <Route exact path="/" element={<News Key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route exact path="/business" element={<News Key="business" pageSize={this.pageSize} country="in" category="business"/>}/>
          <Route exact path="/entertainment" element={<News Key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}/>
          <Route exact path="/general" element={<News Key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route exact path="/health" element={<News Key="health" pageSize={this.pageSize} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News Key="science" pageSize={this.pageSize} country="in" category="science"/>}/>
          <Route exact path="/sport" element={<News Key="sport" pageSize={this.pageSize} country="in" category="sport"/>}/>
          <Route exact path="/technology" element={<News Key="technology" pageSize={this.pageSize} country="in" category="technology"/>}/>
           </Routes>
      </Router>
      </div>
    )
  }
}
