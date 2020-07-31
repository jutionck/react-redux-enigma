import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import LatestList from "../views/latest/LatestList";
import {
    getServiceExChangeSymbol,
    getServiceLatest,
    getServiceLatestBase,
    getServiceLatestBaseChange
} from "../services/exchangeRateService";

function Latest () {

    const initialSearchState = {
        searchLatest: "",
        searchBase: "",
        searchSymbol: ""
    }

    const [loading, isLoading] = useState(false)
    const [search, setSearch] = useState(initialSearchState)


    const loadData = (props) => {
        getServiceLatest().then(res => {
            const latest = res.data
            props.GetLatest(latest);
            isLoading(false)
        })
    }

    useEffect(() => {
        loadData();
    }, []);

    const onChangeSearchLatest = (e, field) => {
        const { name, value } = e.target;
        setSearch({ ...search, [field]: value });
        let searchLatest = e.target.name;
        let searchBase = e.target.name;
        let searchSymbol = e.target.name;
        setSearchLatest( ...searchLatest, [searchLatest]: e.target.value)
        this.setState({
            ...this.state,
            ...this.state.searchLatest, ,
            ...this.state.searchBase, [searchBase]: e.target.value,
            ...this.state.searchSymbol, [searchSymbol]: e.target.value,
        });
    }

    searchLatest = () => {
        if(this.state.searchLatest !== '' && this.state.searchBase !== '') {
            getServiceLatestBaseChange(this.state.searchLatest, this.state.searchBase)
                .then(response => {
                    const latest = response.data;
                    this.props.GetLatest(latest);
                    this.setState({
                        ...this.state, isLoading: false
                    })
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        } else if(this.state.searchLatest !== '') {
            getServiceLatest(this.state.searchLatest)
                .then(response => {
                    const latest = response.data;
                    this.props.GetLatest(latest);
                    this.setState({
                        ...this.state, isLoading: false
                    })
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        } else if(this.state.searchBase !== '') {
            getServiceLatestBase(this.state.searchBase)
                .then(response => {
                    const latest = response.data;
                    this.props.GetLatest(latest);
                    this.setState({
                        ...this.state, isLoading: false
                    })
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        } else if(this.state.searchSymbol !== '') {
            getServiceExChangeSymbol(this.state.searchSymbol)
                .then(response => {
                    const latest = response.data;
                    this.props.GetLatest(latest);
                    this.setState({
                        ...this.state, isLoading: false
                    })
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }

    }

    render() {
        return (
            <>
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="list row">
                            <div className="col-md-12">
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search base"
                                        name="searchBase"
                                        value={this.state.searchBase}
                                        onChange={this.onChangeSearchLatest}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search date"
                                        name="searchLatest"
                                        value={this.state.searchLatest}
                                        onChange={this.onChangeSearchLatest}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search symbol"
                                        name="searchSymbol"
                                        value={this.state.searchSymbol}
                                        onChange={this.onChangeSearchLatest}
                                    />
                                    <div className="input-group-append">
                                        <button
                                            className="btn btn-outline-secondary"
                                            type="button"
                                            onClick={this.searchLatest}
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <LatestList
                    latest={this.props.latest}
                    isLoading={this.state.isLoading}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { latest: state.latestReducer.latestTodo.latest };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetLatest: (data) => dispatch({ type: "GET_LATEST", data: data })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Latest);