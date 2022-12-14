const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post)
//     }, 2000);
// }

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach(function (post) {
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({ title: 'Post three', body: 'This is post three' });

// getPosts();

// using callbacks function
// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }

//##########  using promise instead of callback
function createPost(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error:  Something went wrong')
            }
        }, 2000);

    })
}

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({ title: 'Post three', body: 'This is post three' })
    .then(getPosts)
    .catch(function (err) {
        console.log("Error:  Something went wrong");
    });
