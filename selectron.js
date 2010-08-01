var selectron = {};
selectron.util = {};

selectron.util.has_keys = function has_keys(obj, keylist) {
    var obj_keys, matches;
    obj_keys = _.keys(obj);
    matches = true;
    _(keylist).each( function (key) {
        if ( matches && !(_(obj_keys).include(key)) ) {
            matches = false;
        }
    });
    return matches;
};

selectron.util.object_match = function object_match(object, template) {
    
};
