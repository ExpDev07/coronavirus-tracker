import Route from '@ember/routing/route';

export default class IndexRoute extends Route {

  async model() {
    await fetchData();
  }

}

/**
 * Fetches the data.
 */
async function fetchData() {

}


