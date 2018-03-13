$(document).ready(function(){
	
	$('.add-button').on('click', function(event) {
		var newProduct = {
			product_id: $(this).data('id'),
			product_name: $(this).data('name')
		}
		// ajax call to /api/useritem' method='post'>
	    $.ajax("/api/useritem", {
	      type: "POST",
	      data: newProduct
	    }).then(
	      function() {
	        console.log("created new useritem");
	        // Reload the page to get the updated list
	        location.reload();
	      }
	    );
	});

	$('.remove-button').on('click', function(event) {
		var condition = {
			id: $(this).data('id')
		}
		// ajax call to /api/useritem method delete
		$.ajax('/api/useritem', {
			type: 'DELETE',
			data: condition
		}).then(function() {
			console.log('deleted user item', id);
			location.reload();
		})
	})

    $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').toggle();
        }
    );

});