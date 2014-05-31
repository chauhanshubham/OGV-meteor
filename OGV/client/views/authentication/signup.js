Template.signUp.events({
    'submit #sign-up-form': function(e,t)
    {
	e.preventDefault();

        var signUpForm = $(e.currentTarget),
	    email = trimInput(signUpForm.find('#sign-up-email').val().toLowerCase()),
	    password = signUpForm.find('#sign-up-password').val(),
	    passwordConfirm = signUpForm.find('#sign-up-password-confirm').val();

	    /**
	     * Validates the sign up form fields and gives errors if any 
	     */

	    if (isNotEmpty(email) && 
		isNotEmpty(password) &&
		isEmail(email) &&
		areValidPasswords(password, passwordConfirm)) {
	        Accounts.createUser({email:email, password:password},function(err){
		    if (err) {
			Session.set('alert',err.message);
		    } else {
			Session.set('alert','Congrats! Everything went fine and you can now view models at OGV');
		    }
		});
	    }
	return false;	
    },
});	
