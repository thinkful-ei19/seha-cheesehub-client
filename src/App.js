import React, { Component } from 'react';
import CheeseList from './component/cheese-list';
import {connect} from 'react-redux';
import {fetchCheeses } from './actions';

class App extends Component {

  componentDidMount(){
    this.props.dispatch(fetchCheeses());
  }
  render() {
    return (
      <div className="App">
        <CheeseList />
      </div>
    );
  }
}

export default connect()(App);