$(document).ready(function(){
 // A ROW
  $('#a1').on('click', function(){
    $('#a2,#b1').toggleClass('blue');
  });
  $('#a2').on('click', function(){
    $('#a1,#b2,#a3').toggleClass('blue');
  });
  $('#a3').on('click', function(){
    $('#a2,#b3,#a4').toggleClass('blue');
  });
  $('#a4').on('click', function(){
    $('#a3,#b4,#a5').toggleClass('blue');
  });
  $('#a5').on('click', function(){
    $('#a4,#b5').toggleClass('blue');
  });

// B ROW
  $('#b1').on('click', function(){
    $('#a1,#b2,#c1').toggleClass('blue');
  });
  $('#b2').on('click', function(){
    $('#a2,#b1,#b3,#c2').toggleClass('blue');
  });
  $('#b3').on('click', function(){
    $('#a3,#b2,#c3,#b4').toggleClass('blue');
  });
  $('#b4').on('click', function(){
    $('#a4,#b3,#b5,#c4').toggleClass('blue');
  });
  $('#b5').on('click', function(){
    $('#a5,#b4,#c5').toggleClass('blue');
  });

// C ROW
  $('#c1').on('click', function(){
    $('#b1,#c2,#d1').toggleClass('blue');
  });
  $('#c2').on('click', function(){
    $('#c1,#b2,#c3,#d2').toggleClass('blue');
  });
  $('#c3').on('click', function(){
    $('#c2,#b3,#c4,#d3').toggleClass('blue');
  });
  $('#c4').on('click', function(){
    $('#c3,#b4, #c5, #d4').toggleClass('blue');
  });
  $('#c5').on('click', function(){
    $('#c4,#b5,#d5').toggleClass('blue');
  });

// D ROW
  $('#d1').on('click', function(){
    $('#c1,#d2,#e1').toggleClass('blue');
  });
  $('#d2').on('click', function(){
    $('#d1,#c2,#d3,#e2').toggleClass('blue');
  });
  $('#d3').on('click', function(){
    $('#d2,#c3,#d4,#e3').toggleClass('blue');
  });
  $('#d4').on('click', function(){
    $('#d3,#c4,#d5,#e4').toggleClass('blue');
  });
  $('#d5').on('click', function(){
    $('#d4,#c5,#e5').toggleClass('blue');
  });

// E ROW
  $('#e1').on('click', function(){
    $('#d1,#e2').toggleClass('blue');
  });
  $('#e2').on('click', function(){
    $('#e1,#d2,#e3').toggleClass('blue');
  });
  $('#e3').on('click', function(){
    $('#e2,#d3,#e4').toggleClass('blue');
  });
  $('#e4').on('click', function(){
    $('#e3,#d4,#e5').toggleClass('blue');
  });
  $('#e5').on('click', function(){
    $('#e4,#d5').toggleClass('blue');
  });

// LOGIC
  $('.span4').on('click', function(){
    $(this).toggleClass('blue');

  if ($('.span4').not('.blue').length === 0){
    $('#congratulations').removeClass('hidden');
   }
  });

  $('.btn-large').on('click', function(){
    $('.span4').removeClass('blue');
      $('#congratulations').addClass('hidden');
  });
});



