import React, {Component} from 'react';
import CounterOutput from "../component/CounterOutput";
import CounterControl from "../component/CounterControl";
import { connect } from 'react-redux';


class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr}/>
                <CounterControl label="Increment" clicked={this.props.onIncrement}/>
                <CounterControl label="Decrement" clicked={this.props.onDecrement}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        ctr: state.counter
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: "INCREMENT", value: 1}),
        onDecrement: () => dispatch({type: "DECREMENT", value: 1}),
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Counter);