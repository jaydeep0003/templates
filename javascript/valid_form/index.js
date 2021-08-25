function printError(Id,Msg){
	document.getElementById(Id).innerHTML = Msg;
}

function validationForm(){
	var name = document.Form.name.value;
	var email = document.Form.email.value;
	var mobile = document.Form.mobile.value;
	var country = document.Form.country.value;
	var gender = document.Form.gender.value;

	var nameErr = emailErr = mobileErr = countryErr = genderErr = true;

	if(name==""){
		printError('nameErr' , 'Please enter your name');	
		var elem = document.getElementById('name');
		return false
	}
	else {
		var regex = /^[a-zA-Z\s]+$/;
		if(regex.test(name) == false){
			printError('nameErr', 'Please enter a valid name')

		}
		else {
			printError('nameErr', '');
			nameErr = false;
			var elem = document.getElementById('name');
		}
	}


	if(email==""){
		printError('emailErr' , 'Please enter your email');
		var elem = document.getElementById('email');
		return false
	}
	else {
		var regex = /^\S+@\S+\.\S+$/;
		if(regex.test(email) == false){
			printError('emailErr', 'Please enter a valid email')

		}
		else {
			printError('emailErr', '');
			emailErr = false;
			var elem = document.getElementById('email');
		}
	}

	if(mobile==""){
		printError('mobileErr' , 'Please enter your mobile');
		var elem = document.getElementById('mobile');
		return false;
	}
	else {
		var regex = /^[1-9]\d{9}$/;
		if(regex.test(mobile) == false){
			printError('mobileErr', 'Please enter a valid mobile')

		}
		else {
			printError('mobileErr', '');
			mobileErr = false;
			var elem = document.getElementById('mobile');
		}
	}



	if(country=="submit"){
		printError('countryErr' , 'Please enter your country');
		var elem = document.getElementById('country');
		elem.classList.add('input-4');
		elem.classList.remove('input-3');
		return false;
	}

	else{
		printError('countryErr' , '');
		var elem = document.getElementById('country');
		elem.classList.add('input-3');
		elem.classList.remove('input-4');
	}

	if(gender==""){
		printError('genderErr' , 'Please enter your gender');
		var elem = document.getElementById('gender');
		elem.classList.add('input-4');
		elem.classList.remove('input-3');
		return false;
	}

	else{
		printError('genderErr' , '');
		var elem = document.getElementById('gender');
		elem.classList.add('input-3');
		elem.classList.remove('input-4');
	}

	var check = document.Form.container;
	for(i=0; i<check.length; i++){
		if (check[i].checked==true) {
			return true
		}
		else{
			printError('hobbyErr', 'select your hobby');
			return false;
		}
	}

}


