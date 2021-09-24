console.log("This is ajax");

let fetch = document.getElementById("fetch");

fetch.addEventListener('click', btnclick)

function btnclick() {
    console.log("Fetch btn clicked");

    //instantiate an xhr obj
    const xhr = new XMLHttpRequest();

    //open the obj
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    //for post
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);

    xhr.getResponseHeader('content-type', 'application/json')

    //what to do on progress
    xhr.onprogress = function () {
        console.log("on progress");
    }

    //this is an old function for getting know where is it
    //0 - unset, 1 - opend, 2- sent,3- loading, 4 - done
    // xhr.onreadystatechange = function(){
    //     console.log("ready state"+ this.readyState);
    // }
    //when its done
    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById('d').innerHTML = this.responseText;
            console.log(this.responseText);
        }
        else {
            document.getElementById('d').innerHTML = "Some error occured..";
        }
    }

    params = `{"name":"test","salary":"123","age":"23"}`;
    //send the data
    xhr.send(params);

}

let show = document.getElementById('show');
show.addEventListener('click', showdata);

function showdata() {
    console.log("show btn clicked");

    //instantiate an xhr obj
    const xhr = new XMLHttpRequest();

    //open the obj
    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);
    // //for post
    // xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);

    xhr.getResponseHeader('content-type', 'application/json')

    let spinner=`<div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
</div>`;


    //what to do on progress
    xhr.onprogress = function () {
        // document.getElementById('spi').innerHTML = spinner;
        console.log("on progress");
    }

    

    //this is an old function for getting know where is it
    //0 - unset, 1 - opend, 2- sent,3- loading, 4 - done
    xhr.onreadystatechange = function () {
        console.log("ready state" + this.readyState);
        if(this.readyState == 1){
         document.getElementsByTagName('body').innerHTML = spinner;
        }
        else if(this.readyState == 4){
        document.getElementById('spi').innerHTML = 'All list has been fetched succefully';
        }
    }
    //when its done
    xhr.onload = function () {
        // document.getElementById('spi').innerHTML = '';
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            // let m = obj.data;
            console.log(obj.data);
            let str = "";
            for (key in obj.data) {
                str += `<li>${obj.data[key].employee_name}</li>`
            }
            list.innerHTML = str;
        }
        else {
            document.getElementById('d').innerHTML = "Some error occured.. Please reload this page";
        }
    }


    //send the data
    xhr.send();
}