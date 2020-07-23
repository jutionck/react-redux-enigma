import React, {Component} from 'react';
import {createFoods, getFoods} from "../../api/FoodsService";
import FoodList from "./FoodList";
import FoodFormAdd from "./FoodFormAdd";


class FoodContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foods : [],
            foodName: "",
            foodCategory: "",
            foodStock: "",
            foodPrice: "",
            isLoading: true
        }
    }

    loadData = () => {
        getFoods().then(res => {
            this.setState({
                ...this.state, foods: res.data.data, isLoading: false
            })
        })
    }

    handleChangeInput = (event) => {
        let name = event.target.name 
        this.setState({
            ...this.state,[name]:event.target.value 
        });

    }

    addNewFood = () => {
        const foods = {
            foodName: this.state.foodName,
            foodPrice: this.state.foodPrice,
            foodCategory: {
                category_code: this.state.foodCategory
            },
            foodStock: this.state.foodStock
        }
        createFoods(foods).then(res => {
            if(res.status.code == '200') {
                alert("Food Created!");
                this.setState({
                    foodName: "",
                    foodCategory: "",
                    foodStock: "",
                    foodPrice: ""
                })
            }
        })

    }

    componentDidMount() {
        this.loadData()
    }

    render() {
        return (
            <div>
                {/*List Foods*/}
                <FoodList foods={this.state.foods} isLoading={this.state.isLoading}/>

                {/*  Food Form ADD  */}
                <FoodFormAdd
                    foodName={this.state.foodName}
                    foodCategoryID={this.state.foodCategory}
                    foodStock={this.state.foodStock}
                    foodPriceID={this.state.foodPrice}
                    handleChangeInput={this.handleChangeInput}
                    addNewFood={this.addNewFood}/>
            </div>
        );
    }
}

export default FoodContainer;