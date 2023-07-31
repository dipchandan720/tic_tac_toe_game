const playboxelement=document.querySelectorAll(".playground .playbox");
const player1=document.querySelector(".player .player1");
const player2=document.querySelector(".player .player2");
const playerO="O";
const playerX="X";
const result=document.querySelector(".result");
const result_text=document.querySelector(".result h1");
const restart_btn=document.querySelector(".result button");
const score_num=document.querySelector(".Xscore .Xscore_number")
const playbox=document.querySelector(".playbox");

let toggleturn=true;
const winner_cond=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

playboxelement.forEach(playbox=>{
    playbox.onclick=()=>{
       let currentPlayer=toggleturn?playerO:playerX;
        playbox.classList.add("disabled");
        playbox.innerHTML=currentPlayer;
        addInCell(playbox, currentPlayer);
       
        if(winnerCheck(currentPlayer)){
            result.classList.remove("inactive");
            result_text.innerHTML=currentPlayer+" is winner";
            if(currentPlayer=="O"){
               
                
            }
            else if(currentPlayer=="X"){
                Xscore=Xscore+1
                console.log(Xscore);
            }
        }
        else if(isDraw()){
            result.classList.remove("inactive");
            result_text.innerHTML="Game Draw";
        }
        
        swapPlayer();
        
        
    }
});

function winnerCheck(currentPlayer){
    return winner_cond.some(condition=>{
        // console.log(condition);
        return condition.every(index=>{
              return playboxelement[index].classList.contains(currentPlayer);
        });
    })
};
function isDraw(){
    return [...playboxelement].every(playbox=>{
        return playbox.classList.contains(playerX) || playbox.classList.contains(playerO);
    })
}


function swapPlayer(){
    toggleturn=!toggleturn;
    if(toggleturn){
        player1.classList.add("active");
        player2.classList.remove("active");
    }
    else{
        player1.classList.remove("active");
        player2.classList.add("active");
    }
}
function addInCell(playbox, currentPlayer){
    playbox.innerHTML=currentPlayer;
    playbox.classList.add(currentPlayer);

}
restart_btn.onclick=()=>{
    location.reload();
}