$(function() {
    var $backgroundColor = $('li#one').css('background-color');
    $('ul').append($backgroundColor).after();
    $('li').css('background-color', '#c5a996');
    $('li').css('border', 'solid 1px white');
    $('li').css('color', 'black');
    $('li').css('text-shadow', 'none');
    $('li').css('font-family', 'Georgia');
});