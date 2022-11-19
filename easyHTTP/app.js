const http = new easyHTTP;

//get posts
// http.get('https://jsonplaceholder.typicode.com/posts',
//     function (err, response) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(response)
//         }
//     }
// )

//get single post 
// http.get('https://jsonplaceholder.typicode.com/posts/1',
//     function (err, response) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(response)
//         }
//     }
// )

//create data
const data = {
    title: 'Costum post',
    body: 'This is z costum post'
}

//create post
// http.post('https://jsonplaceholder.typicode.com/posts', data,
//     function (err, post) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(post)
//         }
//     }
// );


//update post 
// http.put('https://jsonplaceholder.typicode.com/posts/1', data,
//     function (err, post) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(post)
//         }
//     }
// );

//delete posts
http.delete('https://jsonplaceholder.typicode.com/posts/1',
    function (err, response) {
        if (err) {
            console.log(err)
        } else {
            console.log(response)
        }
    }
)
