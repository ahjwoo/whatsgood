import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TheButton from './components/TheButton';
import TheFilter from './components/TheFilter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      long: null,
      errorMessage: '',
      filter: 'coffee'
    }
    this.handleClick = this.handleClick.bind(this);

  }
  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude, long: position.coords.longitude });
        console.log('lat', this.state.lat);
        console.log('long', this.state.long);
      },
      (err) => {
        console.log(err);
      }
    )  
  }

  handleClick() {
    console.log("im being called, do ajax api here");
  }
  
  render() {
    return (
      <div className="app">
        <TheFilter />
        <TheButton whatsGood={this.handleClick} />
      </div>
    )
  } 
}

ReactDOM.render(<App />, document.getElementById('root'));
