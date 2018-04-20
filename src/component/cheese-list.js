import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCheeses } from '../actions/index.js'

class CheeseList extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchCheeses())
    }

    render() {
        console.log(this.props);
    const cheeseList = this.props.cheeses.map((cheeses,index)=>{
        return(
            <li key={index}> 
            {cheeses} 
            </li>
        )
    })
        return (
            <div>
                <ul>
                {cheeseList}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cheeses: state.cheeses
})

export default connect(mapStateToProps)(CheeseList); 