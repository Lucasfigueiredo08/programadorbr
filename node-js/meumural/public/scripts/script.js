document.addEventListener('DOMContentLoaded', function () {
    updatePosts();
})

function updatePosts() {

    fetch("http://192.168.0.5:3000/api/all").then(res => {
        return res.json()
    }).then(data => {
        // console.log(res);
            let postElements = '';

            let posts = JSON.parse(data);
            posts.forEach(post => {
                let postElement = `<div id=${post.id} class="card mb-4">
                                        <div class="card-header">
                                            <h5 class="card-title">${post.title}</h5>
                                        </div>
                                        <div class="card-body">
                                            <div class="card-text">${post.description}</div>
                                        </div>
                                        <button class="btn btn-danger" onclick="deletePost(${post.id})">Delete</button>
                                    </div>`        
                postElements += postElement;
                // console.log("post id: ", post.id);
            })

            document.getElementById('posts').innerHTML = postElements;
        })
   
}

function newPost() {
    let title = document.getElementById('title').value;
    let description = document.getElementById('desc').value;
    
    let post = { title, description };

    const options = {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(post)
    }

    fetch("http://192.168.0.5:3000/api/new", options).then(res => {
        // console.log(res);
        updatePosts();
        document.getElementById("title").value = "";
        document.getElementById("desc").value = "";
    })
}

function deletePost() { //id
    let id = event.target.parentElement.id;
    // console.log("Este é o id", id)

    let post = { id };

    const options = {
        method: 'DELETE',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(post)
    }

    fetch(`http://192.168.0.5:3000/api/delete/${id}`, options).then(res => { //${id}
        // console.log("este e o res", res);
        updatePosts();
        // document.getElementById("id").value = "";
    }).catch(err => {
        console.log("Este e o erro: ", err);
    })
}