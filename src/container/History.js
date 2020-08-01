import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {
    getServiceHistorical, getServiceHistoricalSymbol
} from "../services/exchangeRateService";
import HistorySearch from "../views/history/HistorySearch";
import HistoryList from "../views/history/HistoryList";

function History (props) {

    const initialSearchState = {
        startDate: "",
        endDate: "",
        historySymbol: ""
    }

    const [history, getHistory] = useState([]);
    const [loading, isLoading] = useState(false)
    const [search, setSearch] = useState(initialSearchState)


    const loadDataHistory = () => {
        getServiceHistorical().then(res => {
            console.log(res.data)
            props.GetHistory(getHistory(res.data));
            isLoading(false)
        })
    }

    useEffect(() => {
        loadDataHistory();
    }, []);

    const onChangeSearchHistory = (e, field) => {
        const { value } = e.target;
        setSearch({ ...search, [field]: value });
        console.log(search)
    }

    const searchHistory = () => {
        if(search.startDate !== '' && search.endDate !== '' && search.historySymbol !== '') {
            getServiceHistoricalSymbol(search.startDate, search.endDate, search.historySymbol)
                .then(response => {
                    props.GetHistory(getHistory(response.data));
                    isLoading(false)
                    console.log(response)
                })
                .catch(e => {
                    console.log(e);
                });
        } else {
            getServiceHistorical(search.startDate, search.endDate)
                .then(response => {
                    props.GetHistory(getHistory(response.data));
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
            <HistorySearch
                search={search}
                searchHistory={searchHistory}
                onChangeSearchHistory={onChangeSearchHistory}
            />
            <HistoryList
                history={history}
                loading={loading}
            />
        </>
    );
}

const mapStateToProps = (state) => {
    return { history: state.historyReducer.historyTodo.history };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetHistory: (data) => dispatch({ type: "GET_HISTORY", data: data })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);