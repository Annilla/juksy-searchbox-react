import React from "react"
import { action, observable } from "mobx"

import Advance from "../Elements/Search/Advance"
import Keyword from "../Elements/Search/Keyword"
import AdvanceIn from "../Elements/Search/AdvanceIn"

class SearchStore {
	@observable currentView; //control view
	@observable isVisible = false; //continue view for input blur
	@observable inputFocus = false; //continue input focus
	@observable advanVisible = true; //advance visibility
	@observable keywords = [
                	{name: '高街'},
                	{name: '黑潮'},
                	{name: '瘦身'},
                	{name: '驚悚'},
                	{name: '髮色'},
                	{name: '潮青'}]
	@observable catagories = [
                	{name: '球鞋'},
                	{name: '美妝'},
                	{name: '流行'},
                	{name: '造型'},
                	{name: '娛樂'},
                	{name: '生活'},
                	{name: '專題'},
                	{name: '運動'},
                	{name: '兩性'}]

	//add view menu
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

  	//destroy view menu
  	disable() {
  		this.isVisible = false;
  		this.currentView = null;
  		this.inputFocus = false;
  	}
};

export default new SearchStore;
