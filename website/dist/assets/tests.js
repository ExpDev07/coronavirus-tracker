'use strict';

define("coronavirus-tracker/tests/integration/helpers/numeral-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | numeral', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{numeral inputValue}}
      */
      {
        id: "fSUvYD3e",
        block: "{\"symbols\":[],\"statements\":[[1,[28,\"numeral\",[[24,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define("coronavirus-tracker/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/map.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/map.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/numeral.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/numeral.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
});
define("coronavirus-tracker/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('coronavirus-tracker/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'coronavirus-tracker/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('coronavirus-tracker/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'coronavirus-tracker/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('coronavirus-tracker/templates/loading.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'coronavirus-tracker/templates/loading.hbs should pass TemplateLint.\n\n');
  });
});
define("coronavirus-tracker/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/helpers/numeral-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/numeral-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
});
define("coronavirus-tracker/tests/test-helper", ["coronavirus-tracker/app", "coronavirus-tracker/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("coronavirus-tracker/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('coronavirus-tracker/config/environment', [], function() {
  var prefix = 'coronavirus-tracker';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('coronavirus-tracker/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
