import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default Helper.extend({
  store: service(),

  compute([type]) {
    return this.get('store').findAll(type);
  }
});
