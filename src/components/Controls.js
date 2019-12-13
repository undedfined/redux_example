import React from "react"
import { connect } from "react-redux"

function dispatchPlusClick() {
    return {
        type: "CLICK_PLUS",
        payload: 1
    }
}

function dispatchMinusClick() {
    return {
        type: "CLICK_MINUS",
        payload: -1
    }
}

function Controls(props) {
    return (
        <>
            <button onClick={props.dispatchPlusClick}>+</button>
            <button onClick={props.dispatchMinusClick}>-</button>
        </>
    )
}

export default connect(null, { dispatchPlusClick, dispatchMinusClick })(Controls)
