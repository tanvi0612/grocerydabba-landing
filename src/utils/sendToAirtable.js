import Airtable from "airtable"
import config from "./config"

const { AIRTABLE_API_KEY, AIRTABLE_BASE, AIRTABLE_ENTRIES_SHEET_NAME } = config

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE)

const sendToAirtable = formData =>
  new Promise((resolve, reject) => {
    base(AIRTABLE_ENTRIES_SHEET_NAME).create(
      {
        ...formData,
      },
      (err, record) => {
        if (err) {
          console.error(err)
          reject(err)
        }

        resolve(record)
      }
    )
  })

export default sendToAirtable
