import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default Helper.extend({
  store: service(),

  compute([type, id]) {
    return this.get('store').findRecord(type, id);
  }
});
