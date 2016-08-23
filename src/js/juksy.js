import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "mobx-react"

import SearchStore from "./Stores/SearchStore"
import Search from "./Elements/Search"

const appSearch = document.getElementById("app-search")

ReactDOM.render(
    <Provider store={SearchStore}>
        <Search />
    </Provider>
, appSearch)