import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Model from 'ember-data/model';
import Adapter from 'ember-data/adapter';
import attr from 'ember-data/attr';

module('Integration | Helper | store/find-all', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('model:user', Model.extend({
      name: attr()
    }));

    this.owner.register('adapter:user', Adapter.extend({
      async findAll() {
        return [
          {id: 1, name: '1mura'},
          {id: 2, name: '2mura'},
          {id: 3, name: '3mura'},
        ]
      }
    }));
  });

  test('it works', async function(assert) {
    await render(hbs`{{join ', ' (map-by 'name' (store/find-all 'user'))}}`);

    assert.equal(this.element.textContent.trim(), '1mura, 2mura, 3mura');
  });
});
