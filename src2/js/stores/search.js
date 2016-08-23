import { observable } from "mobx";

class SearchStore {
	@observable advanceVisible = true;
}

var store = new SearchStore

export default store