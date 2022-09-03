console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});

$(document).ready(function(){
  $('.hambuger').click(function (e) { 
    e.preventDefault();
    $('.top-menu').slideToggle(600);
  });
});