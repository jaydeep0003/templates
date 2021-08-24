function clearErrors(){
	erros = document.getElementsByClassName('form_error');
	for(let item of erros){
		item.innerHTML = '';
	}
}

function form_error(id, error){
	element = document.getElementById(id);
	element.getElementsByClassName('form_error')[0].innerHTML = error;
}

function validateForm() {
	var returnvalue = true;
	clearErrors();
	var name = document.forms['myform']['fname'].value;
	if(name.length < 5){
		form_error('name',' length of Name too sort');
		document.getElementById('nm').style.border = '2px solid red';
		returnvalue = false;
	}

	if(name.length == 0){
		form_error('name',' length of Name can not to zero');
		returnvalue = false;
	}

	var email = document.forms['myform']['femail'].value;
	if(email.length < 5){
		form_error('email',' Email is sort');
		document.getElementById('em').style.border = '2px solid red';
		returnvalue = false;
	}

	var pass = document.forms['myform']['fpassword'].value;
	if(pass.length < 8){
		form_error('password',' Password of too Much more');
		document.getElementById('ps').style.border = '2px solid red';
		returnvalue = false;
	}

	var a = document.forms['myform']['gender'].value;
	for(i=0; i<a.length; i++) {
		// return false
		if (a[i].checked == true) {
			console.log('a');
			return true;
		}
		else {
			console.log(a);
		}
	}

	return returnvalue;
}