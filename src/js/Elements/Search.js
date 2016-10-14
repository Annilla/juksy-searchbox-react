import React from "react"
import { action } from "mobx"
import { observer } from "mobx-react"

import Advance from "./Search/Advance"
import Keyword from "./Search/Keyword"
import AdvanceIn from "./Search/AdvanceIn"

import Devtools from "mobx-react-devtools"

@observer(["store"])
export default class Search extends React.Component {
	render() {
    	return (
          <div>
            <Devtools />
            <div className="bottom">
              <input id="searchInput" className="input" name="keyword" type="search"
                ref={(el) => {
                    if (this.props.store.inputFocus) {
                        document.getElementById("searchInput").focus();
                    }
                }}
                onFocus={this.onInputFocus.bind(this)}
                onBlur={this.onInputBlur.bind(this)}
                onChange={this.onInputChange.bind(this)}
              />
            </div>
            <div className="sbox">
              <div className="sboxPosi">
                <div className="sboxWrap">
                  {this.props.store.currentView}
                </div>
              </div>
            </div>
          </div>
        )
	}
    @action onInputFocus() {
        const store = this.props.store;
        if(store.advanVisible){
            store.toggleView('index');
        }
        store.inputFocus = true;
    }

    @action onInputBlur() {
        const store = this.props.store;
        const blurTimer = setTimeout(blur,500);
        function blur() {
            if (!store.isVisible) {
                store.disable();
            }
            store.isVisible = false;
        }
    }

    @action onInputChange() {
        const value = document.getElementById("searchInput").value;
        const existStr = value.indexOf("in:");
        console.log(existStr);
        if(existStr==-1){
            this.props.store.advanVisible = true;
        }
        else {
            this.props.store.advanVisible = false;
        }
    }
}
