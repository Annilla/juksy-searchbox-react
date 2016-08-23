import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Search from "./components/Search"
import store from "./juksystore"

const appSearch = document.getElementById('app-search')

ReactDOM.render(<Provider store={store}>
  <Search />
</Provider>, appSearch);