import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

class Food extends React.Component {

    componentDidMount() {
        axios.get(`/food`).then((res) => {
            const foods = res.data.data;
            console.log(foods)
            this.props.GetFood(foods);
        });
    }

    render() {

        const listFood = this.props.foods.map((food, index) => (
            <tr>
                <td>{index+1}</td>
                <td>{food.foodCode}</td>
                <td>{food.foodName}</td>
                <td>{food.foodPrice}</td>
                <td>{food.foodCategory.category_name}</td>
                <td>{food.foodStock}</td>
            </tr>
        ));
        return (
            <>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Food List</li>
                    </ol>
                </nav>
                <div className="card">
                    <div className="card-header bg-yellow">
                        <div className="row">
                            <div className="col">
                                <strong> Food List </strong>
                            </div>
                            <div className="col text-right">

                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <Link to="/food/add" className="btn btn-yellow-2 mb-3"><FontAwesomeIcon icon={faPlus} /></Link>
                        <div className="embed-responsive">
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Food ID</th>
                                    <th>Food Name</th>
                                    <th>Food Price</th>
                                    <th>Food Category</th>
                                    <th>Food Stock</th>
                                </tr>
                                </thead>
                                <tbody>
                                {listFood}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { foods: state.foods };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetFood: (data) => dispatch({ type: "GET_FOODS", data: data }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Food);