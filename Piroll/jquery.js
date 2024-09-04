  $(document).ready(function(){
    $('#menu-toggle').click(function(){
        $('#mobile-menu').toggleClass('show');
    })
    $('#menuClose').click(function(){
        $('#mobile-menu').removeClass('show')
    });
  });