let displayValue='';

document.querySelector('.clearDisplay').addEventListener('click', function(){
  displayValue='';
  document.querySelector('#inputDisplay').value=displayValue;
  console.log('Display cleared'); 
})

document.querySelector('.calcButton_1').addEventListener('click', function(){
  displayValue=displayValue+'1';
  document.querySelector('#inputDisplay').value=displayValue;
  console.log(displayValue);
  console.log(typeof(displayValue));
})

document.querySelector('.calcButton_2').addEventListener('click', function(){
  displayValue=displayValue+'2';
  document.querySelector('#inputDisplay').value=displayValue;
  console.log(displayValue);
  console.log(typeof(displayValue));
})

document.querySelector('.calcButton_add').addEventListener('click', function(){
  displayValue=displayValue+'+';
  document.querySelector('#inputDisplay').value=displayValue;
  console.log(displayValue);
  console.log(typeof(displayValue));
})

document.querySelector('.calcButton_3').addEventListener('click', function(){
  displayValue=displayValue+'3';
  document.querySelector('#inputDisplay').value=displayValue;
  console.log(displayValue);
  console.log(typeof(displayValue));
})

document.querySelector('.calcButton_4').addEventListener('click', function(){
  displayValue=displayValue+'4';
  document.querySelector('#inputDisplay').value=displayValue;
  console.log(displayValue);
  console.log(typeof(displayValue));
})

document.querySelector('.calcButton_sub').addEventListener('click', function(){
  displayValue=displayValue+'-';
  document.querySelector('#inputDisplay').value=displayValue;
  console.log(displayValue);
  console.log(typeof(displayValue));
})

document.querySelector('.calcButton_5').addEventListener('click', function(){
  displayValue=displayValue+'5';
  document.querySelector('#inputDisplay').value=displayValue;
  console.log(displayValue);
  console.log(typeof(displayValue));
})

document.querySelector('.calcButton_6').addEventListener('click', function(){
  displayValue=displayValue+'6';
  document.querySelector('#inputDisplay').value=displayValue;
  console.log(displayValue);
  console.log(typeof(displayValue));
})

document.querySelector('.calcButton_multiply').addEventListener('click', function(){
  displayValue=displayValue+'*';
  document.querySelector('#inputDisplay').value=displayValue;
  console.log(displayValue);
  console.log(typeof(displayValue));
})

document.querySelector('.calcButton_7').addEventListener('click', function(){
  displayValue=displayValue+'7';
  document.querySelector('#inputDisplay').value=displayValue;
  console.log(displayValue);
  console.log(typeof(displayValue));
})

document.querySelector('.calcButton_8').addEventListener('click', function(){
  displayValue=displayValue+'8';
  document.querySelector('#inputDisplay').value=displayValue;
  console.log(displayValue);
  console.log(typeof(displayValue));
})

document.querySelector('.calcButton_divide').addEventListener('click', function(){
  displayValue=displayValue+'/';
  document.querySelector('#inputDisplay').value=displayValue;
  console.log(displayValue);
  console.log(typeof(displayValue));
})

document.querySelector('.calcButton_assignment').addEventListener('click', function(){
  displayValue=eval(displayValue);
  document.querySelector('#inputDisplay').value=displayValue;
  console.log(displayValue);
  console.log(typeof(displayValue));
})

document.querySelector('.calcButton_9').addEventListener('click', function(){
  displayValue=displayValue+'9';
  document.querySelector('#inputDisplay').value=displayValue;
  console.log(displayValue);
  console.log(typeof(displayValue));
})

document.querySelector('.calcButton_0').addEventListener('click', function(){
  displayValue=displayValue+'0';
  document.querySelector('#inputDisplay').value=displayValue;
  console.log(displayValue);
  console.log(typeof(displayValue));
})

document.querySelector('.calcButton_dot').addEventListener('click', function(){
  displayValue=displayValue+'.';
  document.querySelector('#inputDisplay').value=displayValue;
  console.log(displayValue);
  console.log(typeof(displayValue));
})
