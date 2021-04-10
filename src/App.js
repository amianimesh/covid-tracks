import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';



class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App"  style={{background: 'linear-gradient(to right, lightblue , pink)'}}>
          <Dashboard/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

