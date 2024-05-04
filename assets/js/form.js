// Home page JS

// Setting global variable
const username = document.querySelector("#userName");
const title = document.querySelector("#title");
const content = document.querySelector("#content");


// Saving blog information to local storage
function saveBlog(e){
  e.preventDefault();
  localStorage.setItem("username", username.value);
  localStorage.setItem("title", title.value);
  localStorage.setItem("content", content.value);
  openBlog();
};

// Open blog page
function openBlog(){
  document.location.assign('blog.html');
}

// Listening for clicks on icon to switch mode
submit.addEventListener("click", saveBlog);
