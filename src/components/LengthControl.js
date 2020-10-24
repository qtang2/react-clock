import React from 'react'
import '../App.css'

function LengthControl(props) {
    return (
        <div className="length-container">
            <label id={props.type+"-label"}>{props.name}</label>
            <div>
                <i id={props.type+"-increment"} className="fa fa-arrow-up" onClick={props.increase}></i>
                <span id={props.type+"-length"}>{props.length}</span>
                <i id={props.type+"-decrement"} className="fa fa-arrow-down" onClick={props.decrease}></i>
            </div>
            
        </div>
    )
}

export default LengthControl
