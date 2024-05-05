// Blog page JS

// Parse information from local storage
function readBlogs(){
  const parsed = JSON.parse(localStorage.getItem("blog"));
  console.log(parsed)
  displayBlog(parsed);
};

// Iterate through each blog post and create then display that information on the page
function displayBlog(parsed){
  for(let i=0; i<parsed.length; i++){
    const num = parsed[i];
    const card = document.createElement("div");
    const title = document.createElement("h2");
    const line = document.createElement("section");
    const content = document.createElement("p");
    const userName = document.createElement("h3");
    title.textContent = num.title;
    content.textContent = num.content;
    userName.textContent = `Posted by: ${num.userName}`
    card.appendChild(title);
    card.appendChild(line);
    card.appendChild(content);
    card.appendChild(userName);
    divCard.appendChild(card);
  };
};

// Send back to home page
function goToHome(){
  document.location.assign("index.html");
};

// Event listener for go back to home page button
button.addEventListener("click", goToHome);

// When the page loads, start the reading
readBlogs();