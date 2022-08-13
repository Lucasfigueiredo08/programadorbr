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

}