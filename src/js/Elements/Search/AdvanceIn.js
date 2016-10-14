import React from "react"
import { action } from "mobx"
import { observer } from "mobx-react"


@observer(["store"])
export default class AdvanceIn extends React.Component {
	render() {
        return (
            <div className="advance-in">
                <div className="title"><b>in:</b> 使用分類搜尋文章</div>
                <ul>
                    {this.props.store.catagories.map(function(el, i) {
                    var boundClick = this.onCaClick.bind(this, el);
                    return (
                        <li key={i} onClick={boundClick} ><a>{el.name}</a></li>
                    );
                    }, this)}
                </ul>
            </div>
        );
	}
    @action onCaClick(el) {
        if(this.props.store.advanVisible){
            const value = document.getElementById("searchInput").value;
            document.getElementById("searchInput").value = "in:"+el.name+" "+value;
        }
        this.props.store.advanVisible = false;
    }
}
