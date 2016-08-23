import React from "react"
import { observer } from "mobx-react"


@observer(["store"])
export default class Keyword extends React.Component {
	render() {
        return (
          <div className="newkey">
              <div className="title">熱門關鍵字</div>
              <ul>
                <li>
                  <a href="https://www.juksy.com/search/%E9%A6%99%E6%B8%AF">香港香港</a>
                </li>
                <li>
                  <a href="https://www.juksy.com/search/%E7%99%BD%E9%9E%8B">白鞋</a>
                </li>
                <li>
                  <a href="https://www.juksy.com/search/%E7%98%A6%E8%BA%AB">瘦身</a>
                </li>
                <li>
                  <a href="https://www.juksy.com/search/%E6%B6%88%E6%9A%91">消暑</a>
                </li>
                <li>
                  <a href="https://www.juksy.com/search/%E5%88%BA%E9%9D%92">刺青</a>
                </li>
                <li>
                  <a href="https://www.juksy.com/search/%E6%BD%AE%E9%9D%92">潮青</a>
                </li>
              </ul>
          </div>
        );
	}
}
