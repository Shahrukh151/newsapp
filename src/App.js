import './App.css';
import NavBar from './component/NavBar';
import React, { Component } from 'react'
import News from './component/News';
// import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize=5;

  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  apikey=process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        
      /> 
        <Routes>  
      <Route exact path="/" element={<div><News setProgress={this.setProgress}   key="general" apikey={this.apikey} pageSize={this.pageSize} category='general'/></div>}/>
      <Route exact path="/business" element={<div><News setProgress={this.setProgress} key="business" apikey={this.apikey}  pageSize={this.pageSize} category='business'/></div>}/>
      <Route exact path="/entertainment" element={<div><News setProgress={this.setProgress} key="entertainment" apikey={this.apikey}  pageSize={this.pageSize} category='entertainment'/></div>}/>
      <Route exact path="/sports" element={<div><News setProgress={this.setProgress} key="sports" apikey={this.apikey}  pageSize={this.pageSize} category='sports'/></div>}/>
      <Route exact path="/health" element={<div><News setProgress={this.setProgress} key="health" apikey={this.apikey}  pageSize={this.pageSize} category='health'/></div>}/>
      <Route exact path="/technology" element={<div><News setProgress={this.setProgress} key="technology" apikey={this.apikey}  pageSize={this.pageSize} category='technology'/></div>}/>
      <Route exact path="/science" element={<div><News setProgress={this.setProgress} key="science" apikey={this.apikey}  pageSize={this.pageSize} category='science'/></div>}/>
      </Routes> 
      </BrowserRouter>
      </div>
    )
  }
}


