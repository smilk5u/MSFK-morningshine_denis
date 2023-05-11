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