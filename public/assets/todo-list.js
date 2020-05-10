$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {item: text.val()};

      $.ajax({
        type: 'POST',
        url: '/',
        data: todo,
        success: function(data){
          //do something with the data via front-end 
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text();
      $.ajax({
        type: 'DELETE',
        url: '/' + item,
        success: function(data){
          //do something with the data via front-end 
          location.reload();
        }
      });
  });

});
