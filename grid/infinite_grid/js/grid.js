$(document).ready(function(){
  var square = $('<div class="span1"></div>');
  var row = $('<div class="row"></div></div>');
  var turn_holder = 'blue';
  var first_in_new_row = $('<div class="row"><div class="span1"></div></div');
  var neighbors = function($el){
    return {
      up:    $('.span1[data-row='+($el.data('row')-1)+'][data-column='+$el.data('column')+']'),
      down:  $('.span1[data-row='+($el.data('row')+1)+'][data-column='+$el.data('column')+']'),
      left:  $('.span1[data-row='+$el.data('row')+'][data-column='+($el.data('column')-1)+']'),
      right: $('.span1[data-row='+$el.data('row')+'][data-column='+($el.data('column')+1)+']')
    };
  };
  var change_color = function($el){
  //Toggle squares between blue and red classes.
    $el.removeClass('red green blue').addClass(turn_holder);

  };


  $('.container').on('click', '.span1', function(){
    change_color($(this));
    //Find neighbors
    $.each(neighbors($(this)), function(){
      change_color($(this));
    });
    //Add a new row if necessary

    //Add new columns if necessary.

    //Update whose turn it is...hopefully :)
    if (turn_holder === 'blue'){
      turn_holder = 'red';
    } else {
      turn_holder = 'blue';
    }
  });



//
  // $('.span1').parent().prepend(square);
  //   $(this).parent().append(square);
  //     $('.span1').prepend(first_in_new_row);

});