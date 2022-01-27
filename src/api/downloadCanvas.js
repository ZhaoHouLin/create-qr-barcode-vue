// 下載Canvas元素的圖片
const downloadPng = (id,text) => {
  console.log(id);
  // 通過選擇器獲取canvas元素
  const canvas = document.querySelector(id)
  // 使用toDataURL方法將影象轉換被base64編碼的URL字串
  const url = canvas.toDataURL('image/png')
  // 生成一個a元素
  const a = document.createElement('a')
  // 建立一個單擊事件
  const event = new MouseEvent('click')

  // 將a的download屬性設定為我們想要下載的圖片名稱，若name不存在則使用‘下載圖片名稱’作為預設名稱
  a.download = text || '下載圖片名稱'
  // 將生成的URL設定為a.href屬性
  a.href = url

  // 觸發a的單擊事件
  a.dispatchEvent(event)
}

export default downloadPng