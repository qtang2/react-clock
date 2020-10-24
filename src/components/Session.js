import React from 'react'

function Session(props) {
    return (
        <div className="session-container">
            <label id="timer-label">{props.currentTimer}</label>
            <label id="time-left">{props.clockCount}</label>
        </div>
    )
}

export default Session
