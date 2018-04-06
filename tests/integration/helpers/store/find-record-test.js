import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Model from 'ember-data/model';
import Adapter from 'ember-data/adapter';
import attr from 'ember-data/attr';

module('Integration | Helper | store/find-record', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('model:user', Model.extend({
      name: attr()
    }));

    this.owner.register('adapter:user', Adapter.extend({
      async findRecord(_store, _type, id) {
        return {id, name: 'takkanm'};
      }
    }));
  });

  test('it works', async function(assert) {
    await render(hbs`{{get (store/find-record 'user' 42) 'name'}}`);

    assert.equal(this.element.textContent.trim(), 'takkanm');
  });
});
