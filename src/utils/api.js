const BASE_URL = 'https://musical-notes-converter.herokuapp.com/'
//const BASE_URL = 'http://127.0.0.1:5000/'

export const postSpreadsheetData = async (data) => { 
  const response = await fetch(BASE_URL, {
    method:'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'},
  })
  const retData = await response.json()
  return [response.status, retData]
}

export const findJobStatus = async (jobId) => { 
  const url = BASE_URL + 'status'
  const response = await fetch(url, {
    method:'POST',
    body: JSON.stringify({ jobId }),
    headers: {'Content-Type': 'application/json'},
  })
  const retData = await response.json()
  return [response.status, retData]
}
