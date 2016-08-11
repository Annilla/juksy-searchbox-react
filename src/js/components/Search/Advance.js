import React from "react"

export default class Advance extends React.Component {
  render() {
    if(this.props.step.advance==true) {
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