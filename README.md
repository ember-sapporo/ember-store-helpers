ember-store-helpers
==============================================================================

This add-on provides helpers related to ember-data.

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
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone https://github.com/ember-sapporo/ember-store-helpers.git`
* `cd ember-store-helpers`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
