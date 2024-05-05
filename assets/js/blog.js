// Blog page JS
const button = document.querySelector("button");

function goToHome(){
  document.location.assign("index.html")
}

button.addEventListener("click", goToHome);