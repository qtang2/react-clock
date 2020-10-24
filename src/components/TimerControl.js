import React from 'react'

function TimerControl(props) {
    
    return (
        <div className="timer-control-container">
            <i id="start_stop" className={props.intervalIsPlaying? "fa fa-pause": "fa fa-play"} onClick={props.startStop}></i>
            <i id="reset" className="fa fa-refresh" onClick={props.reset}></i>
        </div>
        
    )
}

export default TimerControl
