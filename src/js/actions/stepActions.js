//分步驟出現區塊

//初始化 都不出現
export function initStep() {
  return {
    type: "INIT_STEP",
    payload: {
      advance: false,
      keyword: false,
      advancein: false,
      related: false,
    }
  }
}

//STEP1 進階搜尋、熱門關鍵字
export function goStep1() {
  return {
    type: "GO_STEP1",
    payload: {
      advance: true,
      keyword: true,
      advancein: false,
      related: false,
    }
  }
}

//STEP2 進階搜尋in分類
export function goStep2() {
  return {
    type: "GO_STEP2",
    payload: {
      advance: false,
      keyword: false,
      advancein: true,
      related: false,
    }
  }
}

//STEP3 相關字詞
export function goStep3() {
  return {
    type: "GO_STEP3",
    payload: {
      advance: false,
      keyword: false,
      advancein: false,
      related: true,
    }
  }
}