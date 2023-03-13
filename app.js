const menu=document.querySelector('#menu');
const boton_nav=document.querySelector('#boton_nav');
const tarjeta = document.querySelector('.tarjeta');
const pie = document.querySelector('#pie');
menu.addEventListener('click',function(){
   const pop= document.querySelector('.pop-up');
   pop.classList.toggle('mostrar');
   
   if(pop.className!="pop-up mostrar"){
      boton_nav.setAttribute("style","display:block");
      menu.innerHTML="&#9776;";
      menu.setAttribute("style","font-size:18px;");
      tarjeta.setAttribute("style","display:flex");
      pie.setAttribute("style","display:flex");
   }else{
      boton_nav.setAttribute("style","display:none");
      menu.innerHTML="&#215;";
      menu.setAttribute("style","font-size:22px;");
      tarjeta.setAttribute("style","display:none");
      pie.setAttribute("style","display:none");
   }
});