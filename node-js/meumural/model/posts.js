module.exports = {

    posts: [
        {
            id: 'erstes',
            title: 'Erstes Post',
            description: 'Das ist das erste Post'
        }
    ],

    getAll() {
        return this.posts;
    },
    postNew(title, description) {
        this.posts.push({id: generateId(), title, description})

    }

}

function generateId() {
    return Math.random().toString(36).substring(2,9);
}