export default function reducer(state={
    step: {
      advance: false,
      keyword: false,
      advancein: false,
      related: false,
    },
  }, action) {

    switch (action.type) {
      case "INIT_STEP": {
        return {
          ...state,
          step: {
            ...state.step,
            advance: action.payload.advance,
            keyword: action.payload.keyword,
            advancein: action.payload.advancein,
            related: action.payload.related,
          },
        }
      }
      case "GO_STEP1": {
        return {
          ...state,
          step: {
            ...state.step,
            advance: action.payload.advance,
            keyword: action.payload.keyword,
            advancein: action.payload.advancein,
            related: action.payload.related,
          },
        }
      }
      case "GO_STEP2": {
        return {
          ...state,
          step: {
            ...state.step,
            advance: action.payload.advance,
            keyword: action.payload.keyword,
            advancein: action.payload.advancein,
            related: action.payload.related,
          },
        }
      }
      case "GO_STEP3": {
        return {
          ...state,
          step: {
            ...state.step,
            advance: action.payload.advance,
            keyword: action.payload.keyword,
            advancein: action.payload.advancein,
            related: action.payload.related,
          },
        }
      }
    }
    return state
}
