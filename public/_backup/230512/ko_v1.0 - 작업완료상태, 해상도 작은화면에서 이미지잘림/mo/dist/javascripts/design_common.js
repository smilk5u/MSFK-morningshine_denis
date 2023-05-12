"use strict";
var winW;
var winH;
var $window = $(window);
var winSc = $(window).scrollTop();
$window.load(function () {
    var _this =  $(this);
    winW = _this.width();
    winH = _this.height();
    winSc = _this.scrollTop();
    $window.on("resize", function () {
        winW = _this.width();
        winH = _this.height();
    });
    _this.trigger("resize");
    $(window).scroll(function () {
        winSc = _this.scrollTop();
    });
    layout();
    main();
});
function layout() {
   var aArray = ['#intro', '#sec2', '#sec3', '#sec4', '#sec5'];
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
function main() {
}