import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Movies from "./components/Movie/Movies";
import React from 'react';
class  App extends React.Component {
state={
  title:"reactmovie names"
}
  render(){
  return (
    <div className="App">
<Header title={this.state.title}/>
<Movies/>
    </div>
  );
  }
}

export default App;
