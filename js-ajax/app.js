document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create an XMLHttpRequest object
    const xrh = new XMLHttpRequest();

    xrh.onprogress = function () {
        //console.log('READYSTAE', this.readyState);
        document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }


    // Define a callback function
    xrh.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText)
        }
    }
    // xrh.onreadystatechange = function () {
    //     if (this.readyState === 4 && this.status === 200) {
    //         console.log(this.responseText)
    //     }
    // }
    //end request
    xrh.open('GET', 'data.txt', true);
    xrh.send();
}