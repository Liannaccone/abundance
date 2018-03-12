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

    $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').toggle();
        }
    );

});