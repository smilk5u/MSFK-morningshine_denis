"use strict";
let windowWidth; // Window Width
let windowHeight; // Window Height
let windowScrollTop; // Window Scroll Page YOffset

/* Window Width Height  */
let windowMeasurement = () => { 
   windowWidth = window.innerWidth; 
   windowHeight = window.innerHeight;
} 

/* Window Scroll Offset  */ 
let windowPageYOffset = () => { 
   windowScrollTop = window.pageYOffset;
}

/* Window Size Report */
let reportWindowSize = () => {
   windowScrollTop = window.pageYOffset;
   window.addEventListener('resize', windowMeasurement);
   window.addEventListener('scroll', windowPageYOffset);
   windowMeasurement();  
}

/* Window Load */
window.addEventListener('load', reportWindowSize);
layout(); 
main();  
function layout() {
}
function main() {
   const top = document.querySelector('.top');
   const intro_img_wrap = document.querySelector('.intro_img_wrap');
   const aniContent = document.getElementsByClassName('ani-content');

   const aniSection = $('.ani-section');

   const intro = $('#intro'),
      introDeco = intro.find('.intro_deco'),
      introTitle = intro.find('h2'),
      introCursiveTxt = intro.find('.cursive_txt'),
      introInnerCont = intro.find('.inner_cont');

   let offSetTop = []; 
   let SectionAniContent = [];

   window.addEventListener('scroll', function () {
      top.innerHTML = windowScrollTop;
   });

   aniSection.each(function () {
      var _this = $(this);
      offSetTop.push(_this.offset().top - window.innerHeight / 1.6);
      SectionAniContent.push(_this);
   });
   window.addEventListener('scroll', SecAction);
   function SecAction() {
      for (var i = 0; i < aniSection.length; i++) {
         if (windowScrollTop > offSetTop[i]) {
            TweenMax.staggerTo(SectionAniContent[i].find('.ani-content'), .8, { opacity: 1, transform: 'translate3d(0,0,0)' }, .2);
            SectionAniContent[i].addClass('end'); 
         }
      } 
   }

   /* intro Motion */
   const introMotionTxt = gsap.timeline();
   introMotionTxt.to(introDeco, 1, { opacity: 1, transform: 'translate3d(0,0,0)' })
      .to(introTitle, 1, { opacity: 1, transform: 'translate3d(0,0,0)', delay: -.94 })
      .to(introCursiveTxt, 1, { opacity: 1, transform: 'translate3d(0,0,0)', delay: -.92 })
      .to(introInnerCont, 1, { opacity: 1, transform: 'translate3d(0,0,0)', delay: -.9 })
      .to($('.intro_img_wrap'), .8, { opacity: 1, transform: 'translate3d(0,0,0)', delay: -.9 })


   // gsap.to('body,html', .5, { scrollTo: 0 })
   // $(window).scrollTop(0);
   


   /* 스크롤 트리거 */
   const introTimeline = gsap.timeline({
      scrollTrigger: {
         trigger: '#intro .pin_contain',
         start: "top top",
         end: 1000, // 전체 스크롤 길이.
         // pin: '#intro .pin_contain',
         scrub: 2,
         pinSpacing: true,
         markers: { startColor: "blue", endColor: "blue" },
      }
   });
   function introMotion1() {
      const sec1ContainerTimeLine = gsap.timeline();
      sec1ContainerTimeLine.to('#intro .title_content .txt_wrap', 2, { opacity: 0, y: -(window.innerHeight / 3) })
      sec1ContainerTimeLine.to('.intro_img_wrap', 2, { opacity: 0, y: -(window.innerHeight / 3), delay: -1.8 })
      sec1ContainerTimeLine.to('#intro .sub_content', 2, { opacity: 1, scale: 1 })
      return sec1ContainerTimeLine;
   }
   introTimeline.add(introMotion1());


   // window.addEventListener('scroll', function () {
   //    if (windowScrollTop > 500) {
   //       gsap.to('#intro .pin_contain .intro_img_wrap', 1, { opacity: 0, y: -200 })
   //    } else {
   //       gsap.to('#intro .pin_contain .intro_img_wrap', 1, { opacity: 1, y: 0 })
   //    }
   //    if (windowScrollTop > 700) {
   //       gsap.to('#intro .sub_content', .8, { opacity: 1, scale: 1 })
   //    } else{
   //       gsap.to('#intro .sub_content', .8, { opacity: 0, scale: .8 })
   //    }
   // });

   $(window).on('unload', function () {
      $('body,html').scrollTop(0);
   });

   // container.classList.contains('sub1') && sub1()
   // container.classList.contains('sub2') && sub2()

}