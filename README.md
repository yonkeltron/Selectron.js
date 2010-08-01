# Introduction

I was thinking about ways one can filter JavaScript
objects. Specifically, wouldn't it be awesome if you could provide
some sort of a template? What if the template was an actual object
which you can build up programmatically? What if the properties of the
template could be functions which are evaluated on the corresponding
object?

Selectron aims to do all of these things. You can select objects from
a collection if they match a template object. Properties of the
template objects can be any type of object and can even be predicate
functions.

It *depends* on
[Underscore.js](http://github.com/documentcloud/underscore/) so you
can use it in your predicate functions.

!FEEDBACK AND IMPROVEMENTS WELCOME!

# Examples

Create some objects:

`var my_collection = [{panda: 1, bamboo: "Bamboo!"}, {panda: 1, bamboo: 2}, {curry: 'tree', bamboo: 2}];`

Then, use selectron to select those objects which match a template object:

`selectron.select(my_collection, {panda: 1});`

The above will yield `[{panda: 1, bamboo: "Bamboo!"}, {panda: 1, bamboo: 2}]`

Try making a property of the template object a function (remember we
can use Underscore.js goodies here!):

`selectron.select(my_collection, {bamboo: function (e) { return _.isString(e) && e.length > 3}});`

The above will yield `[{panda: 1, bamboo: "Bamboo!"}]`

The template objects can even be assembled programmatically so you can
build them up however you choose.

# Known problems

The largest issue here is that you might want to select objects whose
properties are themselves functions. That could get hairy.

The other thing is that you might want to match objects strictly so
you only get objects which match *exactly* the template object. In
that case, you'll prob want to just use the tools given by
Underscore.js because they rock.

# Credits

This would not be possible without the
[Underscore.js](http://github.com/documentcloud/underscore/) project
and [QUnit](http://github.com/jquery/qunit) for testing.

# License

Apache Public License 2.0 - Have at it

# Other cool projects

* [Lawnchair](http://brianleroux.github.com/lawnchair/)
