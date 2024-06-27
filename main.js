const buy=document.querySelectorAll(".js-buy"),aywaa=document.querySelector(".aywaa"),youtube=document.getElementById("you");console.log(buy);const biggerContainer=document.querySelector(".bigger-contaier"),kahyaan=document.getElementById("kahyaan"),visa=document.getElementById("visa"),procontainer=document.getElementById("pro-container");procontainer.addEventListener("click",e=>{"js-buy btn btn-primary"==e.target.className&&(console.log("تمام"),biggerContainer.classList.add("active"),e.preventDefault(),kahyaan.style.display="none",visa.style.display="block")}),aywaa.addEventListener("click",e=>{kahyaan.style.display="block",visa.style.display="none",setTimeout(()=>{kahyaan.style.display="none",biggerContainer.classList.remove("active")},1e3)}),youtube.addEventListener("click",e=>{e.preventDefault()});const dark=document.getElementById("dark"),body=document.getElementById("body");dark.addEventListener("click",e=>{body.classList.toggle("dark"),dark.classList.toggle("light")});const flexpro=document.querySelector("#pro-container"),addpro=document.querySelector("#addpro");addpro.addEventListener("click",e=>{let a=`
  
  
  
  <div class="card mycard" style="width: 18rem;">
  <img style="border-radius: 5px;" src="pexels-cottonbro-3826678.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a id="buy" href="#"  class="js-buy btn btn-primary">buy</a>
   
  </div>
</div>
  
  
  
  `;flexpro.innerHTML+=a});