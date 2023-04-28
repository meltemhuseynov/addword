  
 let upbutton = document.getElementById("upBtn");
 
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    upbutton.style.display = "block";
   } else {
    upbutton.style.display = "none";
   }
 }
 
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }
 
 