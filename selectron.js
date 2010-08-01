var selectron = {};
selectron.util = {};

selectron.util.has_keys = function has_keys(obj, temp) {
    var obj_keys, temp_keys, matches;
    // get the keys of the target object
    obj_keys = _(obj).keys();
    // get the keys of the template
    temp_keys = _(temp).keys();
    matches = true;

    _(temp_keys).each( function (key) {
        // if the key is not present in the target object, set false and break
        if ( !(_(obj_keys).include(key)) ) {
            matches = false;
            _.breakLoop();
        }
    });
    return matches;
};

selectron.util.object_match = function object_match(object, template) {
    var matches = true;

    if ( selectron.util.has_keys(object, template) ) { // first, see if the object has all the right keys
        // go over all of the temlate properties
        _(template).chain()
        .keys()
        .each( function (key) {
            var value = template[key];
            // if the template property is a function
            if (_.isFunction(value)) {
                // record the function's result
                matches = value(object[key]);
            } else if ( !(value === object[key]) ) { // if the properties aren't equal, set false
                matches = false;
            }

            // if false, then break
            if (!matches) {
                _.breakLoop();
            }
        });
    } else {
        matches = false;
    }
    return matches;
};
