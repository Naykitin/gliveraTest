$(document).ready(function(){
   $('.item__btn').click(function(){
      $('.item__btn').removeClass('active');
      $(this).addClass('active');
      $('.item__btn').text("select plan");
      $(this).text("selected plan");

      if ($(this).hasClass('active')) {
         $('.item__btn').closest('.item').removeClass('active');
         $(this).closest('.item').addClass('active');
      }
    });
})