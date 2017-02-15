/* JsonifyForm by A. Udoh | GPL */
(function ( $ )
{
    $(document).ready(function()
    {
    	// Get all applicable form.

    	var forms = $('[data-jsonify]');

    	// Set submission events.

    	forms.each(function()
    	{
    		$(this).submit(function(e)
    		{
    			// Get applicable inputs.

    			var inputs = $(this).find('[data-jsonify-name]');

    			// Store all JSON outputs in this JSON.

    			var jsons = {};

    			inputs.each(function()
    			{
    				var name = $(this).data('jsonifyName');
    				var group = eval($(this).data('jsonifyGroup'));

    				if(!$(this).is('input[type="checkbox"]:not(:checked), input[type="radio"]:not(:checked)'))
    				{
    					var json = jsons[name] === undefined ? {} : jsons[name];
    					var val = $(this).val();

    					// String 'pointer' to the current array.

    					var pointer = "json";

    					// Build all nodes in the group.

    					for(var i = 0; i < group.length - 1; i++)
    					{
    						// Point to the next item in the group.

    						pointer = pointer + "[" + group[i] + "]";

    						// Initialise each undefined node with an empty JSON.

    						if(eval(pointer) === undefined)
    							eval(pointer + ' = {}');
    					}

    					// Store the value in the last node.

    					eval(pointer + "[" + group[group.length - 1] + "] = " + val);

    					// Store JSON in the JSON of JSONs.

    					jsons[name] = json;
    				}

    			});

    			var form = this;

    			$.each(jsons, function(key, val)
    			{
    				// Store each JSON in a hidden field.

    				var serial = JSON.stringify(val);

    				var hidden = $('<input></input')
    					.attr('type', 'hidden')
    					.attr('name', key)
    					.attr('value', serial)
					;

					$(form).append(hidden);
    			});
    		});
    	});


    });
}( jQuery ));