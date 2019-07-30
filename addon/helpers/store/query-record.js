import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default Helper.extend({
  store: service(),

  compute([type, query]) {
    if (isEmpty(query)) {
      return null;
    }

    return this.get('store').queryRecord(type, query);
  }
});
