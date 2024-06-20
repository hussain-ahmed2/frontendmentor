const submitBtn = document.getElementById('submit');
const fnameField = document.getElementById('fname');
const lnameField = document.getElementById('lname');
const emailField = document.getElementById('email');
const pwdField = document.getElementById('pwd');
const fnameErrIcon = document.getElementById('fname-img');
const lnameErrIcon = document.getElementById('lname-img');
const emailErrIcon = document.getElementById('email-img');
const pwdErrIcon = document.getElementById('pwd-img');
const fnameWarningText = document.getElementById('err-fname');
const lnameWarningText = document.getElementById('err-lname');
const emailWarningText = document.getElementById('err-email');
const pwdWarningText = document.getElementById('err-pwd');



submitBtn.addEventListener('click', (e) => {
  
  e.preventDefault();

  let isValidEmail = false;

  if(fnameField.value === ''){
    fnameWarningText.textContent = 'First Name connot be empty';
    fnameField.style.border = '2px solid hsl(0, 100%, 74%)';
    fnameErrIcon.style.display = 'block';
  }else{
    fnameWarningText.textContent = '';
    fnameField.style.border = '1px solid hsl(246, 25%, 77%)';
    fnameErrIcon.style.display = 'none';
  }

  if(lnameField.value === ''){
    lnameWarningText.textContent = 'Last Name connot be empty';
    lnameField.style.border = '2px solid hsl(0, 100%, 74%)';
    lnameErrIcon.style.display = 'block';
  }else{
    lnameWarningText.textContent = '';
    lnameField.style.border = '1px solid hsl(246, 25%, 77%)';
    lnameErrIcon.style.display = 'none';
  }

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/;

  if(emailField.value === ''){
    emailWarningText.textContent = 'Email connot be empty';
    emailField.style.border = '2px solid hsl(0, 100%, 74%)';
    emailErrIcon.style.display = 'block';
  }else if(!regex.test(emailField.value)){
    emailWarningText.textContent = 'Looks like this is not an email';
    emailField.style.border = '2px solid hsl(0, 100%, 74%)';
    emailErrIcon.style.display = 'block';
    emailField.style.color = 'hsl(0, 100%, 74%)';
  }else{
    emailWarningText.textContent = '';
    emailField.style.border = '1px solid hsl(246, 25%, 77%)';
    emailErrIcon.style.display = 'none';
    emailField.style.color = 'hsl(249, 10%, 26%)';
    isValidEmail = true;
  }

  if(pwdField.value === ''){
    pwdWarningText.textContent = 'Password connot be empty';
    pwdField.style.border = '2px solid hsl(0, 100%, 74%)';
    pwdErrIcon.style.display = 'block';
  }else{
    pwdWarningText.textContent = '';
    pwdField.style.border = '1px solid hsl(246, 25%, 77%)';
    pwdErrIcon.style.display = 'none';
  }

  if(isValidEmail && fnameField.value !== '' && lnameField.value !== '' && emailField.value !== '' && pwdField.value !== ''){
    alert('Thank You');
    fnameField.value = '';
    lnameField.value = '';
    emailField.value = '';
    pwdField.value = '';
  }
})