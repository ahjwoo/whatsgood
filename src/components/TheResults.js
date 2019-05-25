import React, {Component} from 'react';
import './TheResults.css'
import Map from './Map';

class TheResults extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.results === nextProps.results) {
      return false;
    } else {
      return true;
    }
  }

  createChildren() {
    // console.log('state', this.props.results[1]. )
    let info = []
    let oneItem = []
    for (let i = 0; i < this.props.results.length; i++) {
      info.push(
        <div className="children-container">
          <div className="flex-col">
            {/*<img className="result-image" src={ this.props.results[i].restaurant.featured_image }></img>*/}
            <div>{this.props.results[i].restaurant.name}</div>
            <div className="address">{this.props.results[i].restaurant.location.address}</div>
          </div>
          <Map {...this.state} longLocation={this.props.results[i].restaurant.location.longitude} latLocation={this.props.results[i].restaurant.location.latitude} />
        </div>
        )
      oneItem = info[Math.floor(Math.random()*info.length)]
      // return <div>{this.props.results[i].restaurant.name}</div>
    } 
    return oneItem;
  }

  render() {   
    return (
      <div className="results">
        {this.createChildren()}
      </div>
    )
  }
}

export default TheResults;