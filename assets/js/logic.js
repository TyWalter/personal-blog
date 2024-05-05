// Shared JS for home page and blog page

// Setting global variables
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");
const body = document.body;
const image = document.querySelector("aside")
const h1 = document.querySelector("h1");
const submit = document.querySelector("#submit");
const middle = document.querySelector("#middle");
const path = document.head.children[6].innerText;
const aEl = document.querySelectorAll("a");
const button = document.querySelector("button");
const divCard = document.querySelector("#card");
const username = document.querySelector("#userName");
const title = document.querySelector("#title");
const content = document.querySelector("#content");

// Grabbing icon mode from local storage and running certain functions based on what page we're on
function getIcon(){
  const mode = localStorage.getItem("icon");
  if(mode === "moon" && path === "Blog Entry"){
    displayMoon();
    displayDarkHome();
  } else if(mode === "sun" && path === "Blog Entry"){
    displaySun();
    displayLightHome();
  } else if(mode === "moon" && path === "Blogs"){
    displayMoon();
    displayDarkBlog();
  } else if(mode === "sun" && path === "Blogs"){
    displaySun();
    displayLightBlog();
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

// Display moon icon for dark mode
function displayMoon(){
  sun.style.display = "none";
  moon.style.display = "inline";
};

// Change display to dark mode home page
function displayDarkHome(){
  body.classList.remove("light-mode");
  body.classList.add("dark-mode");
  image.classList.remove("light-form-image");
  image.classList.add("dark-form-image");
  h1.classList.remove("light-form-h1");
  h1.classList.add("dark-form-h1");
  submit.classList.remove("light-form-submit");
  submit.classList.add("dark-form-submit");
  middle.classList.remove("light-form-middle");
  middle.classList.add("dark-form-middle");
};

// Change display to dark mode blog page
function displayDarkBlog(){
  aEl.forEach(a => {
    a.classList.remove("light-blog-a");
    a.classList.add("dark-blog-a");
  })
  body.classList.remove("light-mode");
  body.classList.add("dark-mode");
  divCard.classList.remove("light-blog-card");
  divCard.classList.add("dark-blog-card");
};

// Display sun icon for light mode
function displaySun(){
  sun.style.display = "inline";
  moon.style.display = "none";
};

// Change display to light mode home page
function displayLightHome(){
  body.classList.remove("dark-mode");
  body.classList.add("light-mode");
  image.classList.remove("dark-form-image");
  image.classList.add("light-form-image");
  h1.classList.remove("dark-form-h1");
  h1.classList.add("light-form-h1");
  submit.classList.remove("dark-form-submit");
  submit.classList.add("light-form-submit");
  middle.classList.remove("dark-form-middle");
  middle.classList.add("light-form-middle");
};

// Change display to light mode blog page
function displayLightBlog(){
  aEl.forEach(a => {
    a.classList.remove("dark-blog-a");
    a.classList.add("light-blog-a");
  })
  body.classList.remove("dark-mode");
  body.classList.add("light-mode");
  divCard.classList.remove("dark-blog-card");
  divCard.classList.add("light-blog-card");
};

// Listening for clicks on icon to switch mode
sun.addEventListener("click", saveToStorage);
moon.addEventListener("click", saveToStorage);

// Immediately grabbing local storage info to set page to correct mode
getIcon();