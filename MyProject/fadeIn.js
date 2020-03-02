$(document).ready(function(){
  const welArray = [
    '#W1',
    '#W2',
    '#W3',
    '#W4',
    '#W5',
    '#W6',
    '#W7'
  ];

  var time = 0;

  $.each(welArray, function(index, value){
    console.log(value);
    $(value).delay(time).fadeIn(2500);
    time += 250;
  })
});
