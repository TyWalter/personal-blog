// Home page JS

// Check inputs for values
function checkInputs(e){
  e.preventDefault();
  if(!username.value || !title.value || !content.value){
    alert("You need to fill out all fields");
  } else {
    saveBlog();
  };
};

// Saving blog information to local storage with unique ID
function saveBlog(){
  const readBlog = JSON.parse(localStorage.getItem("blog")) || []
  const blogId = genUnique();
  const blogData = {
    id: blogId,
    username: username.value,
    title: title.value,
    content: content.value
  };
  readBlog.push(blogData);
  const blogJson = JSON.stringify(readBlog);
  localStorage.setItem("blog", blogJson);
  openBlog();
};

// Generate unique ID based off timestamp, converting the result to a string, and grabbing the last 8 characters out
function genUnique(){
  return Date.now().toString().slice(-8);
};

// Open blog page
function openBlog(){
  document.location.assign('blog.html');
};

// Listening for clicks on icon to switch mode
submit.addEventListener("click", checkInputs);
