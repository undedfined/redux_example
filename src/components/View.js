import React from "react"
import { connect } from "react-redux"

function View(props) {
    return (
        <>
            <h1>{props.counter}</h1>
        </>
    )
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(View)
