module("Basic structure testing");
test("selectron namespace", function () {
    ok(selectron, "selectron exists");
    ok(selectron.util, "selectron.util exists");
});


module("Object matching");

test("selectron.object_match", function () {
    ok(selectron.util.object_match, "selectron.util.object_match exists");
    ok(_.isFunction(selectron.util.object_match), "selectron.util.object_match is a function");
});

test("matching based on keys", function () {
    var test_obj = {
        panda: 1,
        bamboo: 2,
        curry: 3
    };

    ok(selectron.util.has_keys, "selectron.util.has_keys exists");
    ok(_.isFunction(selectron.util.has_keys), "selectron.util.has_keys is a function");
    ok(selectron.util.has_keys(test_obj, ["panda", "bamboo"]),
       "object_match passes given correct keys");
});
