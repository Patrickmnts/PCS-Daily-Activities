$(document).ready(function(){
  console.log($.getJSON(
    'http://bstshk-replacement.herokuapp.com/?callback=?&screen_name=vosechu',
    function(data){
      console.log('Huh...');

// Parsing the returned JSON
      var items = [];
        $.each(data, function(key, val){
          items.push('<tr><td id="' + key + '">' +
          val["created_at"] + '</td><td>' + val["text"] + '</td></tr>');
        });

// Joins parsed tweets into unordered list and appends it to container.
        $('<table/>', {
          'class': 'my-new-list',
          html: items.join('')
        }).appendTo('.container');
  }));



});


//   console.log('got here.');
// });


  //  $.ajax({
  //     url:'/users/index.json',
  //     success:function(data){
  //     console.log('umm')
  // }});