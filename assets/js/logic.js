// Shared JS for home page and blog page

// Setting global variable
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");

// Grabbing icon mode from local storage
function getIcon(){
  const mode = localStorage.getItem("icon");
  if(mode === "moon"){
    displayMoon();
    displayDark();
  } else if(mode === "sun"){
    displaySun();
    displayLight();
  }
};

// Saving icon mode to local storage
function saveToStorage(e){
  e.preventDefault();
  if(e.target.id === "sun"){
    localStorage.setItem("icon", "moon"); 
    getIcon();
  } else if(e.target.id === "moon"){
    localStorage.setItem("icon", "sun");
    getIcon();
  }
};

// Display sun icon for light mode
function displaySun(){
  sun.style.display = "inline";
  moon.style.display = "none";
};

// Display moon icon for dark mode
function displayMoon(){
  sun.style.display = "none";
  moon.style.display = "inline";
};







// Listening for clicks on icon to switch mode
sun.addEventListener("click", saveToStorage);
moon.addEventListener("click", saveToStorage);

// Immediately grabbing local storage info to set page to correct mode
getIcon();