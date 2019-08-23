ember-store-helpers
==============================================================================

This add-on provides helpers related to ember-data.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-store-helpers
```


Usage
------------------------------------------------------------------------------

``` hbs
{{get (store/find-record 'user' 42) 'name'}}

{{#each (store/find-all 'user') as |user|}}
  {{user.name}}
{{/each}}

{{#each (store/query-all 'user' (hash name='John')) as |john|}}
  John at age {{user.age}}
{{/each}}

{{#let (store/query-record 'setting' (hash key='uniqueKey')) as |setting|}}
  {{setting.name}}: {{setting.value}}
{{/let}}
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
