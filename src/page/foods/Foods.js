import React, {Component} from 'react';
import {getFoods} from "../../api/FoodsService";
import FoodList from "./FoodList";

class Foods extends Component {

    state = {
        foods: [],
        sample: '',
        isLoading: true
    }

    componentDidMount() {
        getFoods().then((foods) => {
            this.setState({
                ...this.state, foods: foods.data, isLoading: false
            })
        }).catch((err)=> {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <FoodList sample={this.state.sample} foods={this.state.foods} isLoading={this.state.isLoading}/>
            </div>
        );
    }
}

export default Foods;