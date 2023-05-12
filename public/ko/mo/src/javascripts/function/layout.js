function layout() {
   var aArray = ['#intro', '#life', '#music', '#video', '#hope'];
   var count = 0;
   var $header = $("header");
   var $footer = $("footer");
   var $nav = $header.find("nav");

   // Up/Down nav
   function navi() {
      var _window = $("html, body");
      var $prev = $nav.find(".prev"),
         $next = $nav.find(".next");
      var _articleL = aArray.length;

      $prev.on("click", function () {
         count <= 0 ? count = 0 : count = count - 1;
         TweenMax.to(_window, .5, { scrollTop: $(aArray[count]).offset().top });
      });
      $next.on("click", function () {
         if (count >= _articleL) {
            count = _articleL
         } else {
            if (_articleL > count + 1) {
               count = count + 1;
            }
         }
         TweenMax.to(_window, .5, { scrollTop: $(aArray[count]).offset().top });
      });
   }
   navi();

   //donate button
   function donateBtn() {
      var $donaBtn = $footer.find(".donate_wrap");
      var _footerH = $footer.height();
      $(window).scroll(function () {
         if (window.scrollY + window.innerHeight >= document.body.clientHeight - _footerH) {
            $donaBtn.addClass("active");
         } else {
            $donaBtn.removeClass("active");
         }
      });
   }
   donateBtn();
}