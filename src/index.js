import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TheButton from './components/TheButton';
import TheFilter from './components/TheFilter';
import TheResults from './components/TheResults';
import Menu from './components/Menu';
import axios from 'axios';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const API = 'https://developers.zomato.com/api/v2.1/search';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: false,
      lat: null,
      long: null,
      errorMessage: '',
      term: 'coffee',
      radius: 100,
      results: []
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

  // call zomato api and pass params of lat and long as well as the filter. 
  handleClick() {
    this.setState({isLoading: true})
    const config = {
      headers: {'user-key': API_KEY},
      params: {
        q: this.state.term,
        lat: this.state.lat,
        lon: this.state.long,
        radius: this.state.radius
      }      
    }
    axios.get(API, config)
    .then(response => {
      // const stuff = JSON.parse(response).restaurant;
      console.log(response.data.restaurants)
      // console.log(response.data.restaurants[1].restaurant.location.address);
      this.setState({
        isLoading: false,
        results: response.data.restaurants

      }) ;
    });
    
  }
  

  // stretch goals
  // distance setter-slider
  // display map of the results with info about businesss.
  // mobile integration: react-native.

  render() {
    const onSearchChange = (event) => {
      this.setState({term: event.target.value})
    }


    return (
      <div className="app">
        <h1>What's Good?</h1>
        <TheFilter searchChange={onSearchChange}/>
        <TheButton whatsGood={this.handleClick} {...this.state} />
        <TheResults {...this.state}/>
      </div>
    )
  } 
}

ReactDOM.render(<App />, document.getElementById('root'));
