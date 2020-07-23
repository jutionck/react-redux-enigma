import React, {Component} from 'react';
import CounterOutput from "../component/CounterOutput";
import CounterControl from "../component/CounterControl";
import { connect } from 'react-redux';


class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            operand1: 0,
            operand2: 0,
        }
    }

    onChange = (e) => {
        let name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr}/>
                <input type="number" name="operand1" value={this.state.operand1} onChange={this.onChange} />
                <input type="number" name="operand2" value={this.state.operand2} onChange={this.onChange} />
                <CounterControl label="+" clicked={() => this.props.addition(this.state.operand1, this.state.operand2)}/>
                <CounterControl label="-" clicked={() => this.props.substraction(this.state.operand1, this.state.operand2)}/>
                <CounterControl label="/" clicked={() => this.props.divide(this.state.operand1, this.state.operand2)}/>
                <CounterControl label="*" clicked={() => this.props.multi(this.state.operand1, this.state.operand2)}/>
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
        addition: (operand1,operand2) => dispatch({type: "+", operand1: operand1, operand2: operand2}),
        substraction: (operand1,operand2) => dispatch({type: "-", operand1: operand1, operand2:operand2}),
        divide: (operand1,operand2) => dispatch({type: "/", operand1: operand1, operand2: operand2}),
        multi: (operand1,operand2) => dispatch({type: "*", operand1: operand1, operand2:operand2})
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Counter);