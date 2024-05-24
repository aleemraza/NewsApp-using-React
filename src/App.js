import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default class App extends Component {
  pageSize = 15;
  apikey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News pageSize= {this.pageSize}  apikey={this.apikey}    country="us" category="general"/>} />
            <Route exact path='/business' element={<News pageSize= {this.pageSize} apikey={this.apikey}     country="us" category="business"/>} />
            <Route exact path='/entertainment' element={<News pageSize= {this.pageSize} apikey={this.apikey}    country="us" category="entertainment"/>}/>
            <Route exact path='/general' element={<News pageSize= {this.pageSize} apikey={this.apikey}    country="us" category="general"/>}  />
            <Route exact path='/health' element={<News pageSize= {this.pageSize} apikey={this.apikey}    country="us" category="health"/>}   />
            <Route exact path='/science' element={<News pageSize= {this.pageSize} apikey={this.apikey}    country="us" category="science"/>}  />
            <Route exact path='/sports' element={<News pageSize= {this.pageSize} apikey={this.apikey}    country="us" category="sports"/>}  />
            <Route exact path='/technology' element={<News pageSize= {this.pageSize} apikey={this.apikey}    country="us" category="technology"/>} / >
          </Routes>
        </Router>
      </div>
    )
  }
}

