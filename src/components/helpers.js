export const getSheetData = async sheetID => {
  const URL = `https://spreadsheets.google.com/feeds/cells/${sheetID}/public/full?alt=json`
  const request = await fetch(URL)
  const resp = await request.json()
  let data = resp.feed.entry
  let keys = []

  let parsedData = []
  data = data.map(item => item.gs$cell)
  let i = 0
  while (data[i].row === 1) {
    keys.push(data[i].inputValue)
    i++
  }
  for (i = keys.length; i < data.length; i++) {
    let temp = {}
    while (data[i].col < keys.length + 1) {
      temp[keys[Number(data[i].col) - 1]] = data[i].inputValue
      if (data[i].col === keys.length) break
      i++
    }
    parsedData.push(temp)
  }
  return parsedData
}

export const showChatBox = () =>
  window.$crisp && window.$crisp.push(["do", "chat:open"])
