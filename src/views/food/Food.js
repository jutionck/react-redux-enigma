import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import {getServiceFoods} from "../../services/foodService";

class Food extends React.Component {

    loadData = () => {
        getServiceFoods().then(res => {
            const foods = res.data.data;
            this.props.GetFood(foods);
        })
    }

    componentDidMount() {
        this.loadData()
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
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Food Lists</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
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
    return { foods: state.foodReducer.foodTodo.foods };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetFood: (data) => dispatch({ type: "GET_FOODS", data: data }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Food);