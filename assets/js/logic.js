const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");

function getIcon(){
  const mode = localStorage.getItem("icon")
  if(mode === sun){
    
  }
};

function saveToStorage(e){
  e.preventDefault()
  if(e.target.id === "sun"){
    localStorage.setItem("icon", "sun") 
  } else if(e.target.id === "moon"){
    localStorage.setItem("icon", "moon")
  }
  changeIcon()
};

function changeIcon(){
  if(sun.style.display === "inline"){
    sun.style.display = "none"
    moon.style.display = "inline"
  } else if(sun.style.display === "none"){
    moon.style.display = "none"
    sun.style.display = "inline"
  }
};

sun.addEventListener("click", saveToStorage);
moon.addEventListener("click", saveToStorage);