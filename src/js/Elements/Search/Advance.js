import React from "react"
import { action } from "mobx"
import { observer } from "mobx-react"


@observer(["store"])
export default class Advance extends React.Component {
	render() {
        return (
            <div className="advance">
                <div className="title">進階搜尋</div>
                <ul>
                  <li onClick={this.onLiClick.bind(this)} ><b>in:</b> 使用分類搜尋文章</li>
                </ul>
            </div>
        );
	}
    @action onLiClick() {
        this.props.store.toggleView('categories');
        this.props.store.isVisible = true;
        this.props.store.inputFocus = true;
    }
}
