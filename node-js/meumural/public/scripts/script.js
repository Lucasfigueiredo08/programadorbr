document.addEventListener('DOMContentLoaded', function () {
    updatePosts();
})

function updatePosts() {

    fetch("http://localhost:3000/api/all").then(res => {
        return res.json()
    }).then(data => {
        // console.log(res);
            let postElements = '';

            let posts = JSON.parse(data);
            posts.forEach(post => {
                let postElement = `<div id=${post.id} class="card md-4">
                                        <div class="card-header">
                                            <h5 class="card-title">${post.title}</h5>
                                        </div>
                                        <div class="card-body">
                                            <div class="card-text">${post.description}</div>
                                        </div>
                                    </div>`        
                postElements += postElement;
            })

            document.getElementById('posts').innerHTML = postElements;
        })
   
}

function newPosts() {
    let title = document.getelementById('title').value;
    let description = document.getelementById('desc').value;

    let post = { title, description };

    const options = {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(post)
    }

    fetch("http://localhost:3000/api/new", options).then(res => {
        updatePosts();
        document.getElementById.apply("title").value = "";
        document.getElementById.apply("desc").value = "";
    })
}