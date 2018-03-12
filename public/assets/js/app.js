$(document).ready(function(){
	
	$('.add-button').on('click', function(event) {
		var newProduct = {
			product_id: $(this).parent().data('id')
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