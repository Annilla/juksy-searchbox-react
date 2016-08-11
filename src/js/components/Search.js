import React from "react"
import { connect } from "react-redux"

import Label from "./Search/Label"
import Advance from "./Search/Advance"
import Keyword from "./Search/Keyword"
import AdvanceIn from "./Search/AdvanceIn"
import Related from "./Search/Related"

import { initStep, goStep1 } from "../actions/stepActions"

@connect((store) => {
  return {
    step: store.step.step,
  };
})
export default class Search extends React.Component {
  initStep() {
    this.props.dispatch(initStep())
  }

  goStep1() {
    this.props.dispatch(goStep1())
  }

  render() {
    const { step } = this.props;
    return (
    	<div>
      		<div class="bottom">
            	<input onFocus={this.goStep1.bind(this)} onBlur={this.initStep.bind(this)} class="input" name="keyword" type="search" />
            	<Label />
        	</div>
        	<div class="sbox">
            	<div class="sboxPosi">
                	<div class="sboxWrap">
                    	<Advance step={this.props.step} />
                        <Keyword step={this.props.step} />
                        <AdvanceIn step={this.props.step} />
                        <Related step={this.props.step} />
                	</div>
            	</div>
        	</div>
    	</div>
    );
  }
}
