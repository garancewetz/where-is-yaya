const yaya = document.getElementById("yaya")
const leaves1 = document.getElementById("leaves1")

let count = 0;
leaves1.addEventListener("click", (e) => {
  leaves1.classList.add('active')
    setTimeout(function(){ 
      yaya.style.zIndex = 50; 
      yaya.classList.add("walk")
    }, 1000);
})




