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
                    if (this.props.store.currentView) {
                        document.getElementById("searchInput").focus();
                    }
                }}
                onFocus={this.onInputFocus.bind(this)}
                onBlur={this.onInputBlur.bind(this)}
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
    this.props.store.toggleView('index');
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
}
