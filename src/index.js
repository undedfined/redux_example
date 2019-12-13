import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"
import Controls from "./components/Controls"
import View from "./components/View"

import store from "./store"

function App(props) {
    return (
        <>
            <Provider store={store}>
                <Controls />
                <View />
            </Provider>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
