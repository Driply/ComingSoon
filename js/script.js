var $bigPhoneAdd = $('.removeResize');

$(window).resize(function(e) {
   var windowWidth = $(this).width();

   if (windowWidth < 768) {
       $bigPhoneAdd.remove();

       //You should append at desired insertion point...
       //Perhaps it could be made dynamic by storing $('.addBigphone').parent()
       //when the page loaded.
   }
});