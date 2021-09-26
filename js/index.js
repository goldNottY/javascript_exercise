let container = document.getElementById("container");
let wagon = document.getElementById("wagon");

wagon.style.position = 'absolute';
wagon.style.bottom = '0px';
wagon.style.left = '0px';
wagon.innerHTML = "1"


setInterval(function() {
  wagon.style.left = (parseInt(wagon.style.left)+10) + 'px';
  if(parseInt(wagon.style.left) > container.clientWidth){
    wagon.style.left = '0px';
  }
},20);

