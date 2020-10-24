import React from 'react'
import '../App.css'

function LengthControl(props) {
    return (
        <div id={props.type+"-length"} className="length-container">
            <label id={props.type+"-label"}>{props.name}</label>
            <div>
                <i id={props.type+"-increament"} className="fa fa-arrow-up" onClick={props.increase}></i>
                {props.length}
                <i id={props.type+"-decrement"} className="fa fa-arrow-down" onClick={props.decrease}></i>
            </div>
            
        </div>
    )
}

export default LengthControl
