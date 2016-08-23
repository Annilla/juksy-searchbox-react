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
                <li><a>流行</a></li>
                <li><a>造型</a></li>
                <li><a>娛樂</a></li>
                <li><a>生活</a></li>
                <li><a>影片</a></li>
                <li><a>專題</a></li>
                <li><a>動漫</a></li>
                <li><a>遊戲</a></li>
                <li><a>科技</a></li>
                <li><a>運動</a></li>
                <li><a>兩性</a></li>
                <li><a>車訊</a></li>
                <li><a>新奇</a></li>
                <li><a>動物</a></li>
              </ul>
            </div>
        );
	}
}
