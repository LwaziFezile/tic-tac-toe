//Create variables for blocks
let block_0 = document.getElementById('block-0'), block_1 = document.getElementById('block-1'), block_2 = document.getElementById('block-2'), block_3 = document.getElementById('block-3'), block_4 = document.getElementById('block-4'), block_5 = document.getElementById('block-5'), block_6 = document.getElementById('block-6'), block_7 = document.getElementById('block-7'), block_8 = document.getElementById('block-8'), winnerText = document.getElementById('player');


//array of x and o to help check the win scenarios and another for stalemate
let x_and_o = []; 
let stalemateCheck = [];
//create a counter which will help us know whether player x or o is playing
let play_counter = 0;

//create 2 counters for player 1 and player 2
let player_X_counter = 0, player_O_counter = 0;

//every block should have an event listener that will pass the block to checkCounter, after the function, remove the eventListener
block_0.addEventListener('click', function cancelClick(){
    checkCounter(this);
    
});
block_1.addEventListener('click', function cancelClick(){
    checkCounter(this);
    block_1.removeEventListener('click', cancelClick);
});
block_2.addEventListener('click', function cancelClick(){
    checkCounter(this);
    block_2.removeEventListener('click', cancelClick);
});
block_3.addEventListener('click', function cancelClick(){
    checkCounter(this);
    block_3.removeEventListener('click', cancelClick);
});
block_4.addEventListener('click', function cancelClick(){
    checkCounter(this);
    block_4.removeEventListener('click', cancelClick);
});
block_5.addEventListener('click', function cancelClick(){
    checkCounter(this);
    block_5.removeEventListener('click', cancelClick);
});
block_6.addEventListener('click', function cancelClick(){
    checkCounter(this);
    
});
block_7.addEventListener('click', function cancelClick(){
    checkCounter(this);
    block_7.removeEventListener('click', cancelClick);
});
block_8.addEventListener('click', function cancelClick(){
    checkCounter(this);
    block_8.removeEventListener('click', cancelClick);
});


function checkCounter(block){
    //gets the value in the block which is a number, block_0 value = 0, block_1 = 1, etc
    let index = block.getAttribute('value');
    /* alert('Play Counter = ' + play_counter) */
    
    //if the play counter is an even number, its player X's move, if odd, its player O's move
    if(play_counter % 2 == 0){
        //place an X on the block, put an X in the x_and_o array in the index position and increment the play counter and the player x counter 
        //push X in the stalemate array
        block.innerHTML = 'X';
        block.style.color = 'red'
        x_and_o[index] = 'X';
        play_counter+=1;
        player_X_counter+=1
        stalemateCheck.push("X");
        
    }else if(play_counter % 2 != 0){
        //same as above but for O
        block.innerHTML = 'O';
        block.style.color = 'blue'
        x_and_o[index] = 'O';
        play_counter+=1;
        player_O_counter+=1;
        stalemateCheck.push("O");
        
    }

    /* alert('player x counter ' + player_X_counter + ', player o counter ' + player_O_counter) */
    
    //if the number of X's in the game are 3 or more execute this code
    if(player_X_counter >= 3){
        //if statements contain the win scenarios
        if(x_and_o[0] == "X" && x_and_o[3] == "X" && x_and_o[6] =="X" || x_and_o[6] =="X" && x_and_o[3] == "X" && x_and_o[0] == "X"){
           //call this function
            player_x_y_win("X")
        }
        else if(x_and_o[0] == "X" && x_and_o[1] == "X" && x_and_o[2] == "X" || x_and_o[2] == "X" && x_and_o[1] == "X" && x_and_o[0] == "X"){
            player_x_y_win("X")
        }
        else if(x_and_o[0] == "X" && x_and_o[4] == "X" && x_and_o[8] == "X" || x_and_o[8] == "X" && x_and_o[4] == "X" && x_and_o[0] == "X"){
            player_x_y_win("X")
        }
        else if(x_and_o[1] == "X" && x_and_o[4] == "X" && x_and_o[7] == "X" || x_and_o[7] == "X" && x_and_o[4] == "X" && x_and_o[1] == "X"){
            player_x_y_win("X")
        }
        else if(x_and_o[2] == "X" && x_and_o[5] == "X" && x_and_o[8] == "X" || x_and_o[8] == "X" && x_and_o[5] == "X" && x_and_o[2] == "X"){
            player_x_y_win("X")
        }
        else if(x_and_o[2] == "X" && x_and_o[4] == "X" && x_and_o[6] == "X" || x_and_o[6] == "X" && x_and_o[4] == "X" && x_and_o[2] == "X"){
            player_x_y_win("X")
        }
        else if(x_and_o[3] == "X" && x_and_o[4] == "X" && x_and_o[5] == "X" || x_and_o[5] == "X" && x_and_o[4] == "X" && x_and_o[3] == "X"){
            player_x_y_win("X")
        }
        else if(x_and_o[6] == "X" && x_and_o[7] == "X" && x_and_o[8] == "X" || x_and_o[8] == "X" && x_and_o[7] == "X" && x_and_o[6] == "X"){
            player_x_y_win("X")
        }
    }
    //if the number of O's in the game are 3 or more execute this code
    if(player_O_counter >= 3){
         //if statements contain the win scenarios
        if(x_and_o[0] == "O" && x_and_o[3] == "O" && x_and_o[6] =="O" || x_and_o[6] =="O" && x_and_o[3] == "O" && x_and_o[0] == "O"){
            //call this function
            player_x_y_win("O")
        }
        else if(x_and_o[0] == "O" && x_and_o[1] == "O" && x_and_o[2] == "O" || x_and_o[2] == "O" && x_and_o[1] == "O" && x_and_o[0] == "O"){
            player_x_y_win("O")
        }
        else if(x_and_o[0] == "O" && x_and_o[4] == "O" && x_and_o[8] == "O" || x_and_o[8] == "O" && x_and_o[4] == "O" && x_and_o[0] == "O"){
            player_x_y_win("O")
        }
        else if(x_and_o[1] == "O" && x_and_o[4] == "O" && x_and_o[7] == "O" || x_and_o[7] == "O" && x_and_o[4] == "O" && x_and_o[1] == "O"){
            player_x_y_win("O")
        }
        else if(x_and_o[2] == "O" && x_and_o[5] == "O" && x_and_o[8] == "O" || x_and_o[8] == "O" && x_and_o[5] == "O" && x_and_o[2] == "O"){
            player_x_y_win("O")
        }
        else if(x_and_o[2] == "O" && x_and_o[4] == "O" && x_and_o[6] == "O" || x_and_o[6] == "O" && x_and_o[4] == "O" && x_and_o[2] == "O"){
            player_x_y_win("O")
        }
        else if(x_and_o[3] == "O" && x_and_o[4] == "O" && x_and_o[5] == "O" || x_and_o[5] == "O" && x_and_o[4] == "O" && x_and_o[3] == "O"){
            player_x_y_win("O")
        }
        else if(x_and_o[6] == "O" && x_and_o[7] == "O" && x_and_o[8] == "O" || x_and_o[8] == "O" && x_and_o[7] == "O" && x_and_o[6] == "O"){
            player_x_y_win("O")
        }
    }
   
    //if the stalemate length is 9, end game.
    if(stalemateCheck.length  == 9){
        
            play_counter = 0;
            stalemateCheck = []
            x_and_o = []
            player_O_counter = 0, player_X_counter = 0;

            block_0.style.pointerEvents ='none',block_1.style.pointerEvents ='none', block_2.style.pointerEvents ='none', block_3.style.pointerEvents ='none', block_4.style.pointerEvents ='none', block_5.style.pointerEvents ='none', block_6.style.pointerEvents ='none', block_7.style.pointerEvents ='none', block_8.style.pointerEvents ='none';
            winnerText.style.color = 'grey'
            winnerText.innerHTML = "Stalemate, Game restarts in 3 seconds";
            
            setInterval(function(){
                window.location.reload();
            }, 5000)
            
           
    }
    
}
function player_x_y_win(winner){
            x_and_o = [];
            stalemateCheck = [];
           
            player_O_counter = 0, player_X_counter = 0;
            play_counter = 0;
          
            block_0.style.pointerEvents ='none',block_1.style.pointerEvents ='none', block_2.style.pointerEvents ='none', block_3.style.pointerEvents ='none', block_4.style.pointerEvents ='none', block_5.style.pointerEvents ='none', block_6.style.pointerEvents ='none', block_7.style.pointerEvents ='none', block_8.style.pointerEvents ='none';
            if(winner == 'X'){
                winnerText.style.color = 'red'
            }else{
                winnerText.style.color = 'blue'
            }
            winnerText.innerHTML = "Player " + winner + ' Wins, Game restarts in 3 seconds';
            setInterval(function(){
                window.location.reload();
            }, 5000)

}
