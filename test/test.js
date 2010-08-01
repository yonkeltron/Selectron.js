var test_obj = {
    panda: 1,
    bamboo: 2,
    curry: 3
};

module("Basic structure testing");
test("selectron namespace", function () {
    ok(_, "underscore object exists");
    ok(selectron, "selectron exists");
    ok(selectron.util, "selectron.util exists");
});


module("Object matching");

test("basic selectron.object_match", function () {
    ok(selectron.util.object_match, 
       "selectron.util.object_match exists");

    ok(_.isFunction(selectron.util.object_match), 
       "selectron.util.object_match is a function");

    ok(selectron.util.object_match(test_obj, {panda: 1}),
       "selectron.util.object_match returns true for matching template object with one key");

    ok(selectron.util.object_match(test_obj, {panda: 1, bamboo: 2}),
       "selectron.util.object_match returns true for matching template object with two keys");

    ok(!selectron.util.object_match(test_obj, {panda: 1, bamboo: 3}),
       "selectron.util.object_match returns false for non-matching template object with two present keys");

    ok(!selectron.util.object_match(test_obj, {panda: 1, chicken: 2}),
       "selectron.util.object_match returns false for non-matching template object with mixed-presence keys");
});

test("with functions test of selectron.object_match", function () {

    ok(selectron.util.object_match(test_obj, {
        panda: function (obj) {
            return obj === 1;
        }
    }),
       "returns true for one present key and one matching function");


    ok(selectron.util.object_match(test_obj, {
        panda: function (obj) {
            return obj === 1;
        }
    }),
       "returns true for two present keys and one matching function, one correct value");

    ok(!selectron.util.object_match(test_obj, {
        panda: function (obj) {
            return obj === 0;
        },
        bamboo: 2
    }),
       "returns false for one present key and one non-matching function");

    ok(!selectron.util.object_match(test_obj, {
        panda: function (obj) {
            return obj === 0;
        },
        bamboo: function (obj) {
            return obj < 0;
        }
    }),
       "returns false for two present keys and two non-matching functions");

});

test("key checking with selectron.util.has_keys", function () {
    ok(selectron.util.has_keys, "selectron.util.has_keys exists");
    ok(_.isFunction(selectron.util.has_keys), "selectron.util.has_keys is a function");
    ok(selectron.util.has_keys(test_obj, {panda: 'whatever', bamboo: 'whatever'}),
       "has_keys passes given correct keys");
    ok(!selectron.util.has_keys(test_obj, {panda: 'whatever', chocolate: 'missing'}),
       "has_keys fails given incorrect keys");
    
});
