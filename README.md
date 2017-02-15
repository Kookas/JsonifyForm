# JsonifyForm
JsonifyForm lets you group a bunch of inputs together and send a JSON-encoded object with their values when you submit the form. This makes dealing with form tables on the backend much simpler, as you can group the rows of the table together with this plugin.

For example, you could make a page for bulk-modifying some People entities, with each entity on its own row with the modification form. Instead of then getting an obscene dataset like ```my_person_1_new_name="John"&my_person_2_new_name="Jessica"``` (which only gets worse as you modify more entities at once), you can use this little plugin to get something more like ```people={1:{'name':"John"}, 2:{'name':"Jessica"}}```.

# Usage

First, declare ```data-jsonify``` on your form. Then, for each input you wish to jsonify, declare the string ```data-jsonify-name``` and the array ```data-jsonify-group```.

In the example above, the name inputs might look something like this: 
```<input type="text" data-jsonify-name="people" data-jsonify-group="[{{ Person.id }}, 'name']" />```

Each subsequent of the Jsonify group is a layer deeper within the resulting JSON and refers to the key for that layer.
