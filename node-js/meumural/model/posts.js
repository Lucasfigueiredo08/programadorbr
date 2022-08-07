module.exports = {

    posts: [
        {
            id: '1',
            title: 'Esse vai ser apagado',
            description: 'Testando o delete'
        }
    ],

    getAll() {
        return this.posts;
    },
    postNew(title, description) {
        this.posts.push({id: generateId(), title, description})

    },
    deletePost(id) {
        console.log("Entrou aqui")
        return this.posts = this.posts.filter(post => post.id !== id);
    },


}

function generateId() {

    return Math.floor(Math.random() * 10);  //.toString(36);.substring(2,9);
}