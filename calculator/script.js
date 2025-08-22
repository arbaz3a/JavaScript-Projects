let input = document.querySelector(".input-bar");
let allbuttons = document.querySelectorAll(".btn");

allbuttons.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        let value = btn.innerText;
        if(value === 'AC'){
            input.value = '';
        }
        else if(value === 'DE'){
            input.value = input.value.slice(0,-1);
        }
        else{
            input.value += value;
        }
    });
});

let equalbtn = document.querySelector("#btnequal")
equalbtn.addEventListener("click", () => {
        input.value = eval(input.value);
});

