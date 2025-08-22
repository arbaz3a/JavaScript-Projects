let input = document.querySelector("#in");
let btn = document.querySelector("#btn");
let ul = document.querySelector("ul");

// add taskk
btn.addEventListener("click", ()=>{
    input.value = input.value.trim();
    if(input.value !== ''){
        let li = document.createElement("li");
        li.innerText = input.value;
        const delbtn = addbtn();
        li.appendChild(delbtn);
        ul.appendChild(li);
        input.value = '';

    }
    else{
        alert("please enter your task");
    }
});

// delbtn creation
function addbtn(){
    let button = document.createElement("button");
    button.innerText = 'Delete';
    button.classList.add("delbtn");

    button.addEventListener('click', function(){
        this.parentElement.remove();
    });
    return button;
};