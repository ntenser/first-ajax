$(document).ready(function () {
  $(".run-ajax").on('click', function(){
    $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    dataType: 'text',
    method: 'GET'

  }).done(function(responseData){
    console.log('Ajax Request Done');
    });
  });

  $(".ajax-request").on('click', function(){
    $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/pong',
    dataType: 'text',
    method: 'GET'

    }).done(function(responseData){
      console.log('completed');
      $('section').append(responseData);
    }).fail(function(){
      console.log('fail');
      $('section').append('you failed, try again later');
    }).always(function(){
      console.log('Hey the request finished!');

    });
  });

  $(".ajax-count").on('click', function(){
    $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/count',
    dataType: 'text',
    method: 'GET'

    }).done(function(responseData){
      console.log('completed');
      $('section').append(responseData);
    });
  });

  $(".ajax-time").on('click', function(){
    $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/time',
    dataType: 'text',
    data: {timezone: 'Pacific/Honolulu'},
    method: 'GET'

    }).done(function(responseData){
      console.log('DONE');
      $('section').append(responseData);
    });
  });

  $(".ajax-car").on('click', function(){
    $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/a_car',
    dataType: 'html',
    method: 'GET'

    }).done(function(responseData){
      console.log('DONE');
      $('#car').append(responseData);
    });
  });



});
