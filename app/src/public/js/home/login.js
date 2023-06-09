'use strict'
console.log('h');
function login(){
    const req = {
        id : id.value,
        pw : pw.value,
    };
    fetch("/login",{
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res)=>res.json())
    .then((res)=>{
        if(res.success){
            location.href="/"
        }else{
            alert(res.msg);
        }
    }).catch((err)=>{
        console.error('login error 404');
    });
}

const id = document.querySelector('#id');
const pw = document.querySelector('#password');
const loginbtn = document.querySelector('#login-button');

console.log(id, pw, loginbtn);
loginbtn.addEventListener("click",login);
