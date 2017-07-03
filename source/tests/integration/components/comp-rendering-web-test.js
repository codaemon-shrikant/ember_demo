import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('comp-rendering-web', 'Integration | Component | comp rendering web', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{comp-rendering-web}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#comp-rendering-web}}
      template block text
    {{/comp-rendering-web}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
