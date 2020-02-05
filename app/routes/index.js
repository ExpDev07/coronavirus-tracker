import Route from '@ember/routing/route';
import { google } from 'googleapis';

/**
 * Google Sheets instance.
 */
const sheets = google.sheets();

export default class IndexRoute extends Route {

  async model() {
    await fetchData();
  }

}

/**
 * Fetches the data.
 */
async function fetchData() {

  // Get the spreadsheet.
  const doc = await sheets.spreadsheets.get('1wQVypefm946ch4XDp37uZ-wartW4V7ILdg-qYiDXUHM');

  doc.

}


