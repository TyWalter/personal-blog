const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");

function getIcon(){
  const mode = localStorage.getItem("icon");
  if(mode === "sun"){
    displayMoon();
  } else if(mode === "moon"){
    displaySun();
  }
};

function saveToStorage(e){
  e.preventDefault();
  if(e.target.id === "sun"){
    localStorage.setItem("icon", "sun"); 
    getIcon();
  } else if(e.target.id === "moon"){
    localStorage.setItem("icon", "moon");
    getIcon();
  }
};

function displaySun(){
  sun.style.display = "inline";
  moon.style.display = "none";
}

function displayMoon(){
  sun.style.display = "none";
  moon.style.display = "inline";
}

sun.addEventListener("click", saveToStorage);
moon.addEventListener("click", saveToStorage);

getIcon();