console.log("Client side Js file is loaded")


    const weatherForm = document.querySelector('form')
    const search =document.querySelector("input")
    const messageOne = document.querySelector("#message-1");
    const messageTwo = document.querySelector("#message-2");
    messageOne.textContent ="Praveen here"

    weatherForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        console.log('Testing Search')
        console.log(search.value)

        fetch('http://localhost:3000/weather?address='+search.value)
    .then((response) => response.text())
    .then((body) => {
        console.log(body);
    }); 

    })

    