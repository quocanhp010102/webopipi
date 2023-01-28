var arrl=document.querySelector('.arrow.l')
var arrr=document.querySelector('.arrow.r')
var contentnd=document.querySelector('.ndxoay')
var contentndc=document.querySelectorAll('.content__ndc')
let x=0;
let i=0;

arrl.addEventListener('click',function(){
    
    x=x-360;
    contentnd.style.left=x+'px';
       
           
        console.log(10)
       
})
function show(n){
   
    
    if (n > contentndc.length) {showin = 1}    
    if (n < 1) {showin = contentndc.length}
    contentndc[showin-1].style.display = "block"; 
  
}
// var showin=1;
// function plusSlides(n) {
//     show(showin += n);
  
//   }

  
// function show(n){
   
//     for(let t=0;t<contentndc.length;t++){
//         contentndc[t].style.display='none';
        
//     }
//     if (n > contentndc.length) {showin = 1}    
//     if (n < 1) {showin = contentndc.length}
//     contentndc[showin-1].style.display = "block"; 
  
// }

// function show2(){
//     for (i = 0; i < contentndc.length; i++) {
//         contentndc[i].style.display = "none";  
//       }
//       showin++;
//       if (showin > contentndc.length) {showin = 1}    
     
//       contentndc[showin-1].style.display = "block";  
//       if(contentndc[showin-1].onmouseenter)
//       setTimeout(show2, 2000); // Change image every 2 seconds
    
// }

// show2();

