const submitButton = document.querySelector('[data-id="submit-button"]');
const dismissButton = document.querySelector('[data-id="dismiss-button"]');
const email = document.querySelector('[data-id="email"]');
const emailInput = document.querySelector('[data-id="emailInput"]');
const inputContainer = document.querySelector('[data-id="input-container"]');
const errorContainer = document.querySelector('[data-id="error-message"]');
const errorMessageContainer = document.querySelector('[data-id="error-message-container"]');
const main = document.querySelector('[data-id="main"]');
const messageBody = document.querySelector('[data-id="message"]');

submitButton.addEventListener('click', () =>{
	validateEmail();

});

dismissButton.addEventListener('click', () => {
	dismissMessage();
})

emailInput.addEventListener('keydown', (key) =>{
	emailInput.classList.remove('errormess');
})

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailPattern.test(email);
}

function validateEmail(){
	if (errorMessageContainer.hasChildNodes()) {
		errorContainer.innerHTML = '';
    emailInput.classList.remove('errormess');
	}
	const emailToValidate = emailInput.value;
	
		 

if (isValidEmail(emailToValidate)) {
	email.textContent = emailToValidate;
		emailInput.value = '';
		main.classList.add('hidden');
		messageBody.classList.remove('hidden');
    console.log(`${emailToValidate} is a valid email address.`);
} else {
	errorMessageContainer.classList.add('errorText');
	emailInput.classList.add("errormess")
	  const errorMessage = `${emailToValidate} is not a valid email address`;
    errorContainer.innerHTML = errorMessage;
}

}

function dismissMessage(){

	messageBody.classList.add('hidden');
		main.classList.remove('hidden');
}