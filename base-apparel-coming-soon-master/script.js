const submitBtn = document.getElementById('submitBtn');
const errIcon = document.querySelector('.error');
const errText = document.querySelector('.err-text');
const input = document.querySelector('input')

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/;
  const value = input.value;

  if(regex.test(value)){
    errIcon.style.display = 'none';
    errText.style.display = 'none';
    input.style.border = '1px solid hsl(0, 36%, 74%)';
    input.value = '';
    alert('Thanks');
  }else{
    errIcon.style.display = 'block';
    errText.style.display = 'block';
    input.style.border = '2px solid hsl(0, 93%, 68%)';
  }
})
