let input = document.querySelector(".input-bar");
let btn = document.querySelector(".btn");
let copytag = document.querySelector('.copy-tags');
let copy_text = document.querySelector('.copy-text')

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special = "!@#$%^&*()_+[]{}|;:,.<>?";

copytag.addEventListener('click',()=>{
    input.select();
    document.execCommand("copy");
    copy_text.style.opacity = 1;
    setTimeout(()=>{
        copy_text.style.opacity = 0;
    }, 2000)
});

function generator(length){
    let allchars = upper+lower+special+numbers;
    let pass = '';
    for(let i = 0; i<length; i++){
        pass += allchars[Math.floor(Math.random()*allchars.length)];
    }
    pass = pass.split('').sort(()=>Math.random()-0.5).join('');
    return pass;
}


btn.addEventListener('click',()=>{
    let length = 13;
    input.value = generator(length);
});