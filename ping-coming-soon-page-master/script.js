const submitBtn = document.getElementById('submit');
const input = document.getElementById('email');
const errText = document.querySelector('.err-text');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/;
  if(input.value === '' || !regex.test(input.value)){
    errText.style.display = 'block';
    errText.textContent = 'Please provide a valid email address';
    input.style.borderColor = 'hsl(354, 100%, 66%)';
  }else {
    alert("Thanks");
    errText.textContent = '';
    input.value = '';
    input.style.borderColor = 'hsl(223, 100%, 88%)';
    errText.style.display = 'none';
  }
})