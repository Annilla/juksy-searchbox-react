import React from "react"
import { action, observable } from "mobx"

import Advance from "../Elements/Search/Advance"
import Keyword from "../Elements/Search/Keyword"
import AdvanceIn from "../Elements/Search/AdvanceIn"

class SearchStore {
	@observable currentView;
	@observable isVisible = false;

	@observable advanceVisible = false;
	@observable keywordVisible = false;
	@observable advanceInVisible = false;

	//constructor() {
	//	this.isVisible = false;
	//}

	toggleView(view) {
		switch(view) {
	      case 'index':
	      	return this.currentView = (
	          <div>
	            <Advance />
	            <Keyword />
	          </div>
	        );
	      case 'categories':
	        return this.currentView = (
	          <AdvanceIn />
	        );
	    }
  	}

  	disable() {
  		this.isVisible = false;
  		this.currentView = null;
  	}
};

export default new SearchStore;
