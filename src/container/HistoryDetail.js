import React, {useEffect} from 'react';

const HistoryDetail = (props) => {

    return (
        <div>
            <h1>Detail {props.match.params.id}</h1>
        </div>
    );
};

export default HistoryDetail;