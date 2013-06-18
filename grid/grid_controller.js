$(document).ready(function(){
  $('#t1').on('click', function(){
    $('#t2,#m1').toggleClass('blue');
  });
  $('#t2').on('click', function(){
    $('#t1,#m2,#t3').toggleClass('blue');
  });
  $('#t3').on('click', function(){
    $('#t2,#m3').toggleClass('blue');
  });
  $('#m1').on('click', function(){
    $('#t1,#m2,#b1').toggleClass('blue');
  });
  $('#m2').on('click', function(){
    $('#t2,#m1,#m3,#b2').toggleClass('blue');
  });
  $('#m3').on('click', function(){
    $('#t3,#m2,#b3').toggleClass('blue');
  });
  $('#b1').on('click', function(){
    $('#m1,#b2').toggleClass('blue');
  });
  $('#b2').on('click', function(){
    $('#b1,#m2,#b3').toggleClass('blue');
  });
  $('#b3').on('click', function(){
    $('#b2,#m3').toggleClass('blue');
  });

  $('.span4').on('click', function(){
    $(this).toggleClass('blue');

  if ($('.span4').not('.blue').length === 0){
    $('#congratulations').removeClass('hidden');
   }
  });

  $('#btn').on('click', function(){
    $('.span4').removeClass('blue');
      $('#congratulations').addClass('hidden');
  });
});


// Effected Blocks

// ID
// t1 => [t2,m1]
// t2 => [t1,t3, m2]
// t3 => [t2,m3]

// m1 => [t1,b1,m2]
// m2 => [m1,m3,t2,b2]
// m3 => [t3,b3]

// b1 => [m1, b2]
// b2 => [b1,b3,m2]
// b3 => [b2, m3]