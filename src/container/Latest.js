import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import LatestList from "../views/latest/LatestList";
import {
    getServiceExChangeSymbol,
    getServiceLatest,
    getServiceLatestBase,
    getServiceLatestBaseChange
} from "../services/exchangeRateService";
import LatestSearch from "../views/latest/LatestSearch";

function Latest (props) {

    const initialSearchState = {
        searchLatest: "",
        searchBase: "",
        searchSymbol: ""
    }

    const [latest, getLatest] = useState([]);
    const [loading, isLoading] = useState(false)
    const [search, setSearch] = useState(initialSearchState)


    const loadData = () => {
        getServiceLatest().then(res => {
            props.GetLatest(getLatest(res.data));
            console.log(props.GetLatest)
            isLoading(false)
        })
    }

    useEffect(() => {
        loadData();
    }, []);

    const onChangeSearchLatest = (e, field) => {
        const { value } = e.target;
        setSearch({ ...search, [field]: value });
        console.log(search)
    }

    const searchLatest = () => {
        if(search.searchLatest !== '' && search.searchBase !== '') {
            getServiceLatestBaseChange(search.searchLatest, search.searchBase)
                .then(response => {
                    getLatest(response.data);
                    const latest = response.data;
                    props.GetLatest(latest);
                    isLoading(false)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e);
                });
        } else if(search.searchLatest !== '') {
            getServiceLatest(search.searchLatest)
                .then(response => {
                    getLatest(response.data);
                    const latest = response.data;
                    props.GetLatest(latest);
                    isLoading(false)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e);
                });
        } else if(search.searchBase !== '') {
            getServiceLatestBase(search.searchBase)
                .then(response => {
                    getLatest(response.data);
                    const latest = response.data;
                    props.GetLatest(latest);
                    isLoading(false)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e);
                });
        } else if(search.searchSymbol !== '') {
            getServiceExChangeSymbol(search.searchSymbol)
                .then(response => {
                    getLatest(response.data);
                    const latest = response.data;
                    props.GetLatest(latest);
                    isLoading(false)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e);
                });
        }

    }

    return (
        <>
            <LatestSearch
                search={search}
                searchLatest={searchLatest}
                onChangeSearchLatest={onChangeSearchLatest}
            />
            <LatestList
                latest={latest}
                loading={loading}
            />
        </>
    );
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