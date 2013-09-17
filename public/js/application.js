$(document).ready( function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  $('form').on('submit', function(event){
    //on the form submit, do this function
    event.preventDefault();
    //prevent the browser from executing a get or post request
    
    var data = $(this).serialize();
    // .serialize() #encode form elements as a string for submission
    
    $.post('/grandma', data, function(response){
      //receive data back from controller
      //and append to container @grandma's response.

      $('.grandma').html(response);
    });
  });
});

// .click() trigger a click on an element
// .submit() #trigger a submit on an element
// 
// JQuery.post() #load data using a post request
