# JsonifyForm
JsonifyForm lets you group a bunch of inputs together and send a JSON-encoded object with their values when you submit the form. This makes dealing with form tables on the backend much simpler, as you can group the rows of the table together with this plugin.

# Usage

First, declare ```data-jsonify``` on your form. Then, for each input you wish to jsonify, declare the string ```data-jsonify-name``` and the array ```data-jsonify-group```.
