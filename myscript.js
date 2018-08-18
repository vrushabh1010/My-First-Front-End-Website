function validateSignUpForm(){
			var firstName = document.forms["signUpForm"]["First Name"];
			var lastName = document.forms["signUpForm"]["Surname"];
			var mobileNo = document.forms["signUpForm"]["Phone Number"];
			
			
			var email = document.forms["signUpForm"]["Email address"];

              
                
			if(firstName.value == ""){
				window.alert("Please enter your first name.");
				return false;
			}
			if(lastName.value == ""){
				window.alert("Please enter your last name.");
				return false;
			}
			if(mobileNo.value == ""){
				window.alert("Please enter your phone number.");
				return false;
			}
			
			if(email.value == ""){
				window.alert("Please enter your email.");
				return false;
			}
			 
              

			return true;
		}