import React from "react"
import { observer } from "mobx-react"


@observer(["store"])
export default class Keyword extends React.Component {
	render() {
        return (
            <div className="newkey">
                <div className="title">熱門關鍵字</div>
                <ul>
                    {this.props.store.keywords.map(function(el,i) {
                        return <li key={i}><a href={'https://www.juksy.com/search/'+el.name}>{el.name}</a></li>;
                    })}
                </ul>
            </div>
        );
	}
}
