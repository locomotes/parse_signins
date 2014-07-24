Parse.initialize("fO2OwQAG8SgEGcyNUeAnhAXhPVm8mrklqqgSmvZu", "pFUAUW1SGFshILHsndYURmgUTV9zmaURbYbcvTKj");

$('.form1').on('submit', function  (event) {
	

	event.preventDefault();

	var user = new Parse.User();
	user.set("username", $("#name").val());
	user.set("password", $("#password").val());
	user.set("email", $("#email").val());

	 
	user.signUp(null, {
	  success: function(user) {
	    // Hooray! Let them use the app now.

	  },
	  error: function(user, error) {
	    // Show the error message somewhere and let the user try again.
	    alert("Error: " + error.code + " " + error.message);
	  }
	});

	$(this).trigger('reset');
});




$('.form2').on('submit', function  (event) {

event.preventDefault();

var myname = $("#rname").val();
var mypass = $("#rpassword").val();

	Parse.User.logIn(myname, mypass, {
	  success: function(user) {
	    // Do stuff after successful login.
	    alert("Signed In");
	  },
	  error: function(user, error) {
	    // The login failed. Check error to see why.
	  }
	});

	$(this).trigger('reset');
});