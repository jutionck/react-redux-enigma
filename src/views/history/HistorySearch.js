import React from 'react';

const HistorySearch = (props) => {
    const {search, searchHistory, onChangeSearchHistory} = props
    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="list row">
                        <div className="col-md-12">
                            <div className="input-group mb-3">
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Start Date"
                                    name="startDate"
                                    onChange={(event) => {
                                        onChangeSearchHistory(event, "startDate");
                                    }}
                                    value={search["startDate"]}
                                />
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="End date"
                                    name="endDate"
                                    onChange={(event) => {
                                        onChangeSearchHistory(event, "endDate");
                                    }}
                                    value={search["endDate"]}
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Symbol IDR,USD..."
                                    name="historySymbol"
                                    onChange={(event) => {
                                        onChangeSearchHistory(event, "historySymbol");
                                    }}
                                    value={search["historySymbol"]}
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        onClick={searchHistory}
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default HistorySearch;