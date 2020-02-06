import Route from '@ember/routing/route';
import ENV from 'coronavirus-tracker/config/environment';

export default class IndexRoute extends Route {

  async model() {
    return await (await fetch(ENV.APP.API_HOST + '/latest')).json();
  }

}

