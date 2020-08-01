import React from 'react';

const LatestSearch = (props) => {
    const {search, searchLatest, onChangeSearchLatest} = props
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
                                    placeholder="Search base [EUR,USD...]"
                                    name="searchBase"
                                    onChange={(event) => {
                                        onChangeSearchLatest(event, "searchBase");
                                    }}
                                    value={search["searchBase"]}
                                />
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Search date"
                                    name="searchLatest"
                                    onChange={(event) => {
                                        onChangeSearchLatest(event, "searchLatest");
                                    }}
                                    value={search["searchLatest"]}
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search symbol IDR,USD..."
                                    name="searchSymbol"
                                    onChange={(event) => {
                                        onChangeSearchLatest(event, "searchSymbol");
                                    }}
                                    value={search["searchSymbol"]}
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        onClick={searchLatest}
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

export default LatestSearch;