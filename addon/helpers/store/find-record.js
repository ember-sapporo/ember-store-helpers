import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';
import { isNone } from '@ember/utils';

export default Helper.extend({
  store: service(),

  compute([type, id]) {
    if (isNone(id)) { return null; }

    return this.get('store').findRecord(type, id);
  }
});
