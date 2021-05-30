let postId = 1;

function addNewPost(event){
    event.preventDefault()

    let title = document.getElementById("postTitle").value;
    let mainContent = document.getElementById("postMainContent").value;
    let postImageURL = document.getElementById("postImage").value;

    let blogPosts = document.getElementById("blog-posts");

    let newPostDivContainer = document.createElement("div");
    let newPostDiv = document.createElement("div");
    let newPostTitle = document.createElement("h3");
    let newPostContent = document.createElement("p");
    let postImage = document.createElement("img");

    let newPostTitleContent = document.createTextNode(title);
    let newPostContentText = document.createTextNode(mainContent);
    
    newPostDivContainer.setAttribute("class", " col-sm-12 col-md-6 col-lg-4 newPostContainer mb-2");
    newPostContent.setAttribute("class", "m-2 pb-5");
    newPostDiv.setAttribute("class", "blog-post col-md-12");
    newPostDivContainer.setAttribute("id", postId);

    postImage.setAttribute("src", postImageURL);
    postImage.setAttribute("alt", "Blog Post Image");
    postImage.setAttribute("class", "rounded postImage float-end p-3");

    newPostDivContainer.appendChild(newPostDiv);
    newPostTitle.appendChild(newPostTitleContent);
    newPostContent.appendChild(newPostContentText);
   
    
    newPostDiv.appendChild(newPostTitle);
    if(postImageURL){
        newPostDiv.appendChild(postImage);
    }
    newPostDiv.appendChild(newPostContent);
    blogPosts.appendChild(newPostDivContainer);
    
    postId++;

    clearInputs();
}

function clearInputs(){
    document.getElementById("postTitle").value = null;
    document.getElementById("postMainContent").value = null;
    document.getElementById("postImage").value = null;
}
