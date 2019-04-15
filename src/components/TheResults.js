import React, {Component} from 'react';
import './TheResults.css'

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
      info.push(<div>{this.props.results[i].restaurant.name}</div>)
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