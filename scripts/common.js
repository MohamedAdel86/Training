let myButton1 = document.querySelector('#b1');
let myButton2 = document.querySelector('#b2');
let myButton3 = document.querySelector('#b3');
let registerpagebutton = document.querySelector('#b4-log');
let loginpagebutton = document.querySelector('#b5-log');

let myHeading = document.querySelector('h1');

  myButton1.onclick = () => {
    window.open("login.html","_self")
  }
  myButton2.onclick = () => {
  }
  myButton3.onclick = () =>{
    window.open("nom1.html","_self")
  }

  registerpagebutton.onclick = (event) =>{
    event.preventDefault();
    window.open("register.html","_self")
  }

  loginpagebutton.onclick = (event2) =>{
    event2.preventDefault();
    window.open("login.html","_self")
  }