function main() {
   const container = document.querySelector('.container');
   const top = document.querySelector('.top');
   const box1 = document.querySelector('.box');
   const box2 = document.querySelector('.box2');

   window.addEventListener('scroll', function () {
      top.innerHTML = windowScrollTop;
   });

   function sub1() {
      const introTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: '.sec1',
            start: "top top",
            // end: "+=10000", // 전체 스크롤 길이.
            end: 400, // 전체 스크롤 길이.
            pin: ".sec1",
            scrub: 2,
            pinSpacing: true,
            markers: { startColor: "blue", endColor: "blue" },
         }
      });

      function introMotion1() {
         const sec1ContainerTimeLine = gsap.timeline();
         sec1ContainerTimeLine.to(box1, 2, { opacity: 0, y: -(window.innerHeight / 3) })
         sec1ContainerTimeLine.to(box2, 1.8, { opacity: 1, display: 'block', scale: 1, delay: -.8 })
         return sec1ContainerTimeLine;
      }
      introTimeline.add(introMotion1());

      window.addEventListener('scroll', function () {
         console.log(box2.getBoundingClientRect().width , 620, box2.getBoundingClientRect().width === 620)
         if (box2.getBoundingClientRect().width === 620) {
            console.log('맏다?')
         } else {
            console.log('아니다')
         }
      });
   }

   function sub2() {
      window.addEventListener('scroll', function () {
         if (windowScrollTop > 50) {
            gsap.to(box1, 1, { opacity: 0, y: -(window.innerHeight / 3) })
            // gsap.to(box2, 1, { opacity: 1, display: 'block', scale: 1, delay: 1 })
         } else {
            gsap.to(box1, 1, { opacity: 1, y: 0 })
            // gsap.to(box2, 1, { opacity: 0, display: 'none', scale: 0, delay: 1 })
         }
         console.log()
      });

   }

   container.classList.contains('sub1') && sub1()
   container.classList.contains('sub2') && sub2()

}