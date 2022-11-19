document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer() {
    //creation de l'objet XMLHttpRequest
    xhttp = new XMLHttpRequest();

    //create callback function
    xhttp.onload = function () {
        if (this.status == 200) {
            // console.log(this.responseText);
            const customer = JSON.parse(this.responseText);

            // const output = `
            //     <ul>
            //         <li>ID : ${customer.id}</li>
            //         <li>NAME : ${customer.name}</li>
            //         <li>COMPANY : ${customer.company}</li>
            //         <li>PHONE : ${customer.phone}</li>

            //     </ul>
            // `
            const output = `
                <table>
                        <tr>
                            <th>ID </th>
                            <th>NAME </th>
                            <th>COMPANY </th>
                            <th>PHONE </th>
                        </tr>
                        <tr>
                            <td>${customer.id}</td>
                            <td> ${customer.name}</td>
                            <td>${customer.company}</td>
                            <td>${customer.phone}</td>
                        </tr>
                
                </table>
            `

            document.getElementById('customer').innerHTML = output;
        }
    }
    //get data
    xhttp.open('GET', 'customer.json', true);
    xhttp.send();
}

//load customers
function loadCustomers() {
    //creation de l'objet XMLHttpRequest
    xhttp = new XMLHttpRequest();

    //create callback function
    xhttp.onload = function () {
        if (this.status == 200) {
            // console.log(this.responseText);
            const customers = JSON.parse(this.responseText);

            let output = '';
            // customers.forEach(function(customer) {
            //     output += `
            //     <ul>
            //         <li>ID : ${customer.id}</li>
            //         <li>NAME : ${customer.name}</li>
            //         <li>COMPANY : ${customer.company}</li>
            //         <li>PHONE : ${customer.phone}</li>

            //     </ul>
            // `   
            // });  
            customers.forEach(function (customer) {
                output += `
                <table>
                        
                        <tr>
                            <td>${customer.id}</td>
                            <td> ${customer.name}</td>
                            <td>${customer.company}</td>
                            <td>${customer.phone}</td>
                        </tr>
                
                </table>
            `
            });
            document.getElementById('customers').innerHTML = output;
        }
    }
    //get data
    xhttp.open('GET', 'customers.json', true);
    xhttp.send();
}