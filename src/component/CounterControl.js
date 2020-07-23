import React from 'react'

const CounterControl = (props) => {
    return(
        <div>
            <button onClick={props.clicked}>{props.label}</button>
        </div>
    )
}

export default CounterControl;