import React from "react"
import ReactDOM from "react-dom"
import { observable, action, computed } from "mobx"
import { inject, observer, Provider } from "mobx-react"

import SearchStore from "./stores/search.js"

import Devtools from "mobx-react-devtools"


@inject("store")
@observer
class Search extends React.Component {
  	render() {
  		//console.debug(this.props);
    	return (
    		<div>
    			<Devtools />
      			<div class="bottom">
            		<input class="input" name="keyword" type="search" 
            			
            		/>
        		</div>
        		<div class="sbox">
            		<div class="sboxPosi">
            			<div class="sboxWrap">
                    		<Advance />
                    	</div>
            		</div>
        		</div>
    		</div>
    	)
  	}
}

@inject("store")
@observer
class Advance extends React.Component {
  	render() {
    	if(this.props.store.advanceVisible==true) {
        	return (
            	<div class="advance">
                	<div class="title">進階搜尋</div>
                	<ul>
                    	<li><b>in:</b> 使用分類搜尋文章</li>
                	</ul>
            	</div>
        	);
    	}
    	return (
        	null
    	);
  	}
}

ReactDOM.render(
	<Provider store={SearchStore}>
		<Search />
	</Provider>
	,
	document.getElementById('app-search')
)