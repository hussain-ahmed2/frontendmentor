const submitBtn = document.getElementById("submit");
const yearInput = document.getElementById("year");
const monthInput = document.getElementById("month");
const dayInput = document.getElementById("day");
const yearText = document.getElementById("year-text");
const monthText = document.getElementById("month-text");
const dayText = document.getElementById("day-text");
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth()+1;
const currentDate = date.getDate();
const monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dayError = document.getElementById('day-error');
const monthError = document.getElementById('month-error');
const yearError = document.getElementById('year-error');
const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');
const paras = document.querySelectorAll('p');

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (yearInput.value == '' || dayInput.value == '' || monthInput.value == '' || yearInput.value > currentYear || (yearInput.value == currentYear && monthInput.value > currentMonth) || (yearInput.value == currentYear && monthInput.value == currentMonth && dayInput.value > currentDate) || dayInput.value > monthArr[monthInput.value-1] || dayInput.value > 31 || monthInput.value > 12 || dayInput.value == 0 || monthInput.value == 0) {
    yearText.innerText = '--';
    monthText.innerText = '--';
    dayText.innerText = '--';
    
    if(yearInput.value == ''){
      yearError.innerText = 'This field is required';
    }
    else if(yearInput.value > currentYear){
      yearError.innerText = 'Must be in the past';
    }else{
      yearError.innerText = '';
    }

    if(monthInput.value == ''){
      monthError.innerText = 'This field is required';
    }
    else if(monthInput.value > 12 || (yearInput.value == currentYear && monthInput.value > currentMonth || monthInput.value == 0)){
      monthError.innerText = 'Must be a valid month';
    }else {
      monthError.innerText = '';
    }

    if(dayInput.value == ''){
      dayError.innerText = 'This field is required';
    }
    else if(dayInput.value > monthArr[monthInput.value-1] || dayInput.value > 31 || (yearInput.value == currentYear && monthInput.value == currentMonth && dayInput.value > currentDate) || dayInput.value == 0){
      dayError.innerText = 'Must be a valid day';
    }else {
      dayError.innerText = '';
    }

    inputs.forEach(input => input.style.borderColor = 'hsl(0, 100%, 67%)');
    labels.forEach(label => label.style.color = 'hsl(0, 100%, 67%)');
    paras.forEach(para => para.style.color = 'hsl(0, 100%, 67%)');
  } else {
    inputs.forEach(input => input.style.borderColor = 'hsl(0, 0%, 86%)');
    labels.forEach(label => label.style.color = 'hsl(0, 1%, 44%)');
    dayError.innerText = '';
    monthError.innerText = '';
    yearError.innerText = '';

    let year = currentYear - yearInput.value;
    let month, day;

    if (currentMonth >= monthInput.value) {
      month = currentMonth - monthInput.value;
    } else {
      year--;
      month = 12 + (currentMonth - monthInput.value);
    }

    if (currentDate >= dayInput.value) {
      day = currentDate - dayInput.value;
    } else {
      month--;
      day = 31 + currentDate - dayInput.value;
    }

    if (month < 0) {
      month = 11;
      year--;
    }

    yearText.innerText = year;
    monthText.innerText = month;
    dayText.innerText = day;
  }
});
