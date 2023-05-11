function main() {
   const aniSection = $('.ani-section');
   const intro = $('#intro'),
      introDeco = intro.find('.intro_deco'),
      introTitle = intro.find('h2'),
      introCursiveTxt = intro.find('.cursive_txt'),
      introInnerCont = intro.find('.inner_cont');
   let offSetTop = [];
   let SectionAniContent = [];

   aniSection.each(function () {
      var _this = $(this);
      offSetTop.push(_this.offset().top - window.innerHeight / 2);
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

   console.log(offSetTop, SectionAniContent)

   /* intro Motion */
   const introMotionTxt = gsap.timeline();
   introMotionTxt.to(introDeco, .6, { opacity: 1, transform: 'translate3d(0,0,0)' })
      .to(introTitle, .6, { opacity: 1, transform: 'translate3d(0,0,0)', delay: -.63 })
      .to(introCursiveTxt, .6, { opacity: 1, transform: 'translate3d(0,0,0)', delay: -.6 })
      .to(introInnerCont, .6, { opacity: 1, transform: 'translate3d(0,0,0)', delay: -.55 })
      .to($('.intro_img_wrap'), .8, { opacity: 1, transform: 'translate3d(0,0,0)', delay: -.6, onStart: tweenComplete })
   function tweenComplete() {
      TweenMax.staggerTo($('.intro_img_wrap .music_note'), .8, { opacity: 1, transform: 'translate3d(0,0,0)' }, .1);
      TweenMax.staggerTo($('.intro_img_wrap .logo_deco'), .8, { opacity: 1, transform: 'translate3d(0,0,0)' }, .1);
   }


   /* 스크롤 트리거 */
   const introTimeline = gsap.timeline({
      scrollTrigger: {
         trigger: '#intro .pin_contain',
         start: "top top",
         end: 1500, // 전체 스크롤 길이.
         pin: '#intro .pin_contain',
         scrub: 1,
         // pinSpacing: true,
         markers: { startColor: "blue", endColor: "blue" },
      }
   });
   function introMotion1() {
      const sec1ContainerTimeLine = gsap.timeline();
      sec1ContainerTimeLine.to('.intro_img_wrap', 1, { opacity: 0, y: -(window.innerHeight / 3), delay: -1.8 })
      sec1ContainerTimeLine.to('#intro .title_wrap', 1, { opacity: 1, scale: 1, delay: -1.2 })
      sec1ContainerTimeLine.to('#intro .sub_content .txt_wrap ', 1, { opacity: 1, scale: 1, delay: -1.2 })
      sec1ContainerTimeLine.to('#intro .deco_wrap', 1.2, { opacity: 1, delay: -.8 })
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
}