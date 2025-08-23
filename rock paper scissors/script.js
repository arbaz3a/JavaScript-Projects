let user = 0;
let computer = 0;
const choices = document.querySelectorAll(".choice");
let msgprint = document.querySelector("#msg-access");
let userscore = document.querySelector("#user-score");
let computerscore = document.querySelector("#computer-score");

const generateChoice = () => {
    const selectionOptions = ["rock", "paper", "scissor"];
    const randomindex = Math.floor(Math.random() * 3);
    return selectionOptions[randomindex];
}

const drawMatch = () => {
    console.log("Match is draw");
    msgprint.innerText = "Match was Draw, Try Again";
    msgprint.className = ""; // Remove previous classes
    msgprint.style.backgroundColor = "#fff";
    msgprint.style.color = "black";
};

const printwinner = (winmode, userChoice, computerChoice) => {
    if (winmode) {
        user++;
        userscore.innerText = user;
        msgprint.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msgprint.className = "win";
    } else {
        computer++;
        computerscore.innerText = computer;
        msgprint.innerText = `You lose! ${computerChoice} beats your ${userChoice}`;
        msgprint.className = "lose";
    }
}

const playgame = (userChoice) => {
    const computerChoice = generateChoice();
    if (userChoice === computerChoice) {
        drawMatch();
    } else {
        let winmode = true;
        if (userChoice === "rock") {
            winmode = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            winmode = computerChoice === "scissor" ? false : true;
        } else {
            winmode = computerChoice === "rock" ? false : true;
        }
        printwinner(winmode, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
