import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Model from 'ember-data/model';
import Adapter from 'ember-data/adapter';
import attr from 'ember-data/attr';

module('Integration | Helper | store/query-all', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('model:user', Model.extend({
      name: attr()
    }));

    this.owner.register('adapter:user', Adapter.extend({
      async query(_store, _type, query) {
        const data = [
          {id: 1, name: '1mura'},
          {id: 2, name: '2mura'},
          {id: 3, name: '3mura'},
          {id: 4, name: '1mura'},
        ]
        return data.filter( (rec) => rec.name === query.query.name )
      }
    }));
  });

  test('it works', async function(assert) {
    await render(hbs`{{join ', ' (map-by 'name' (store/query-all 'user' (hash query=(hash name="1mura"))))}}`);

    assert.equal(this.element.textContent.trim(), '1mura, 1mura');
  });
});
