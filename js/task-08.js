const userLoginForm = document.querySelector('.login-form');

userLoginForm.addEventListener('submit', onLogicBtnClick);
function onLogicBtnClick(event) { 
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;

    if (email.value === '' && password.value === '') {
        alert('Please, fill in empty fields!');
    } else if (email.value === '') {
        alert('Please, enter your email!');
    } else if (password.value === '') {
        alert('Please, enter your password!');
    } else { 
        const formData = { email: email.value, password: password.value };
        console.log('formData: ', formData);
        event.currentTarget.reset();
    }
}