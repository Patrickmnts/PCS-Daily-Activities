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
    var $this = $(this);
    var neighbors_value, new_up, new_down, new_left, new_right;

    change_color($this);

    //Find neighbors
    neighbors_value = neighbors($this);


    //Add a new row if necessary
    if (neighbors_value.up.length === 0){
      new_up = $('<div class="row"><div class="span1"></div></div');
      // debugger
      $('.span1', new_up).attr('data-row', parseInt($this.data('row'), 10) - 1);
      $('.span1', new_up).attr('data-column', parseInt($this.data('column'), 10));
      $('.container').prepend(new_up);
    }
    if (neighbors_value.down.length === 0){
      new_down = $('<div class="row"><div class="span1"></div></div');
      // debugger
      $('.span1', new_down).attr('data-row', parseInt($this.data('row'), 10) + 1);
      $('.span1', new_down).attr('data-column', parseInt($this.data('column'), 10));
      $('.container').append(new_down);
    }

    //Add new columns if necessary.


    //Reevaluate neighbors & Color Change
    neighbors_value = neighbors($this);
    // debugger
    $.each(neighbors_value, function(){
      change_color($(this));
    });

    //Update whose turn it is...hopefully :)
    if (turn_holder === 'blue'){
      turn_holder = 'red';
    } else {
      turn_holder = 'blue';
    }
  });


});