let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let gameturn = true;
let newbtn = document.querySelector("#new");
let winnermsg = document.querySelector("#winner");
let container2 = document.querySelector(".container2");

const Patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (gameturn) {
            gameturn = false;
            box.innerText = "X";
            box.style.color = "rgb(16, 255, 88)";
            box.classList.add("clicked-x");
        } else {
            box.innerText = "O";
            box.style.color = "rgb(153, 2, 145)";
            box.classList.add("clicked-o");
            gameturn = true;
        }
        box.disabled = true;
        winner();
    });
});

const resetGame = () => {
    gameturn = true;
    enableforresetboxes();
    container2.classList.add("hide");
}

const enableforresetboxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("clicked-x", "clicked-o");
    });
};

const disboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const printwinner = (winner) => {
    winnermsg.innerText = `Winner is ( ${winner} )`;
    container2.classList.remove("hide");
    disboxes();
}

newbtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);

const winner = () => {
    for(let i of Patterns){
        let pos1 = boxes[i[0]].innerText;
        let pos2 = boxes[i[1]].innerText;
        let pos3 = boxes[i[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                printwinner(pos1);
            }
        }
    }
};
