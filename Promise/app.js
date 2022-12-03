let myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Hello Tidiane")
        document.getElementById("demo").innerHTML = "Hello Tidiane"
    }, 2000);
});

myPromise;
//charger un fichier en utilisant la promess(asynchrone)

let myPromsieFile = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'file.txt');
        xhr.onload = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject("file not found");
            }
        }
        xhr.send();
    }, 3000)
});
myPromsieFile.then(
    function (value) { myDisplayer(value); },
    function (error) { myDisplayer(error); }
);
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}