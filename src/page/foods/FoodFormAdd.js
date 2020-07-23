import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class FoodFormAdd extends Component {
    render() {

        let {foodName, foodCategory, foodStock, foodPrice, handleChangeInput, addNewFood } = this.props

        return (
            <>
                <div className="card mt-5 mb-5">
                    <div className="card-header">
                        Form Add Food
                    </div>
                    <div className="card-body">
                        <form method="post" onSubmit={addNewFood}>
                            <div className="form-group row">
                                <label htmlFor="staticFoodName" className="col-sm-2 col-form-label">Food Name</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        name="foodName"
                                        onChange={handleChangeInput}
                                        value={foodName}
                                        className="form-control"
                                        id="staticFoodName"
                                        placeholder="Enter food name..."
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputFP" className="col-sm-2 col-form-label">Food Price</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        name="foodPrice"
                                        onChange={handleChangeInput}
                                        value={foodPrice}
                                        className="form-control"
                                        id="staticFoodName"
                                        placeholder="Enter food price..."/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputCF" className="col-sm-2 col-form-label">Food Category</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        name="foodCategory"
                                        onChange={handleChangeInput}
                                        value={foodCategory}
                                        className="form-control"
                                        id="staticFoodName"
                                        placeholder="Enter food category..."/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="staticStock" className="col-sm-2 col-form-label">Food Stock</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        name="foodStock"
                                        onChange={handleChangeInput}
                                        value={foodStock}
                                        className="form-control"
                                        id="staticStock"
                                        placeholder="Enter food stock..."
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="staticStock" className="col-sm-2 col-form-label"></label>
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary">SAVE</button>&nbsp;
                                    <a href="" className="btn btn-warning">CANCEL</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </>
        );
    }
}

export default FoodFormAdd;