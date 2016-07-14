// JavaScript Document
var score = 0;
$(document).keydown(function(e){
	switch(e.keyCode){
		case 37:  //left
			if(moveLeft()){
				 generateOneNumber();
				 isgameover();
			}
			break;
		case 38:  //up
			if(moveUp()){
				 generateOneNumber();
				 isgameover();
			}				
			break;
		case 39:  //right 
			if(moveRight()){
				 generateOneNumber();
				 isgameover();
			}		
			break;
		case 40:  //down
			if(moveDown()){
				 generateOneNumber();
				 isgameover();
			}				
			break;
		default:
			break;
	}
});
/**********************************moveLeft**************************************/
function moveLeft(){
	if(!canMoveLeft(board)){
		return false;	
	}
	for(var i = 0; i < 4; i++){
		for(var j = 1; j < 4; j++){
			if(board[i][j] != 0){
				for(var k = 0; k < j; k++){
					if(board[i][k] == 0 && noblock(i, k, j, board)){
						showMoveAnimation(i, j, i, k);
						board[i][k] = board[i][j];
						board[i][j] = 0;
						continue;
					}else if(board[i][k] ==  board[i][j] && noblock(i, k, j, board) && !hasAdd[i][k] && !hasAdd[i][j]){
						showMoveAnimation(i, j, i, k);
						board[i][k] += board[i][j];
						board[i][j] = 0;
						score += board[i][k];
						hasAdd[i][k] = true;
						hasAdd[i][j] = true;
						updateScore(score);
						continue;
					}
				}
			}
		}
	}
	updateBoardView();	
	return true;
}

function canMoveLeft(board){
	for(var i = 0; i < 4; i++){
		for(var j = 1; j < 4; j++){
			if(board[i][j] != 0){
				if(board[i][j-1] == 0 || board[i][j] == board[i][j-1]){
					return true;
				}				
			}
		}
	}
	return false;
} 

/*************************************moveRight***************************************/
function moveRight(){
	if(!canMoveRight(board)){
		return false;	 
	}
	for(var i = 0; i < 4; i++){
		for(var j = 2; j >=0 ; j--){
			if(board[i][j] != 0){
				for(var k = 3; k > j; k--){
					if(board[i][k] == 0 && noblock(i, k, j, board)){
						showMoveAnimation(i, j, i, k);
						board[i][k] = board[i][j];
						board[i][j] = 0;
						continue;
					}else if(board[i][k] ==  board[i][j] && noblock(i, j, k, board) && !hasAdd[i][k] && !hasAdd[i][j]){
						showMoveAnimation(i, j, i, k);
						board[i][k] += board[i][j];
						board[i][j] = 0;
						score += board[i][k]; 
						hasAdd[i][k] = true;
						hasAdd[i][j] = true;
						updateScore(score);
						continue;
					}
				}
			}
		}
	}
	updateBoardView();	
	return true;
}

function canMoveRight(board){
	for(var i = 0; i < 4; i++){
		for(var j = 2; j >=0 ; j--){
			if(board[i][j] != 0){
				if(board[i][j+1] == 0 || board[i][j] == board[i][j+1]){
					return true;
				}				
			}
		}
	}
	return false;
} 

/*************************************moveUp***************************************/
function moveUp(){
	if(!canMoveRight(board)){
		return false;	 
	}
	for(var i = 1; i < 4; i++){
		for(var j = 0; j < 4 ; j++){
			if(board[i][j] != 0){
				for(var k = 0; k < i; k++){
					if(board[k][j] == 0 && noblockup(j, k, i, board)){
						showMoveAnimation(i, j, k, j);
						board[k][j] = board[i][j];
						board[i][j] = 0;
						continue;
					}else if(board[k][j] ==  board[i][j] && noblockup(j, k, i, board) && !hasAdd[k][j] && !hasAdd[i][j]){
						showMoveAnimation(i, j, k, j);
						board[k][j] += board[i][j];
						board[i][j] = 0;
						score += board[k][j];
						hasAdd[k][j] = true;
						hasAdd[i][j] = true;
						updateScore(score);
						continue;
					}
				}
			}
		}
	}
	updateBoardView();	
	return true;
}

function canmoveUp(board){
	for(var i = 1; i < 4; i++){
		for(var j = 0; j < 4 ; j++){
			if(board[i][j] != 0){
				if(board[i-1][j] == 0 || board[i][j] == board[i-1][j]){
					return true;
				}				
			}
		}
	}
	return false;
} 

/*************************************moveDown***************************************/
function moveDown(){
	if(!canMoveRight(board)){
		return false;	 
	}
	for(var i = 2; i >= 0; i--){
		for(var j = 0; j < 4 ; j++){
			if(board[i][j] != 0){
				for(var k = 3; k > i; k--){
					if(board[k][j] == 0 && noblockup(j, i, k, board)){
						showMoveAnimation(i, j, k, j);
						board[k][j] = board[i][j];
						board[i][j] = 0;
						continue;
					}else if(board[k][j] ==  board[i][j] && noblockup(j, i, k, board) && !hasAdd[k][j] && !hasAdd[i][j]){
						showMoveAnimation(i, j, k, j);
						board[k][j] += board[i][j];
						board[i][j] = 0;
						score += board[k][j];
						hasAdd[k][j] = true;
						hasAdd[i][j] = true;
						updateScore(score);
						continue;
					}
				}
			}
		}
	}
	updateBoardView();	
	return true;
}

function canmoveDown(board){
	for(var i = 0; i < 3; i++){
		for(var j = 0; j < 4 ; j++){
			if(board[i][j] != 0){
				if(board[i+1][j] == 0 || board[i][j] == board[i+1][j]){
					return true;
				}				
			}
		}
	}
	return false;
} 
/*************************************************************************************/

function noblock(row, col1, col2, board){
	for(var i = col1 + 1; i < col2; i++){
		if(board[row][i] != 0 ){
			return false;
		}	
	}
	return true;
}

function noblockup(row, col1, col2, board){
	for(var i = col1 + 1; i < col2; i++){
		if(board[i][row] != 0 ){
			return false;
		}	
	}
	return true;
}

function showMoveAnimation(i, j, i, k){
	var numbercell = $("#number-cell-" + i + "-" + j);	
	numbercell.animate({
        top: getTopPos(i, k),
        left: getLeftPos(i, k)
	}, 200);
}

function updateScore(score){
	$("#score").text("score: " +score);
	$("#score").css("color", "#2A0000");
}

function isgameover(){
	if(!canMoveLeft(board)  && !canMoveRight(board) && !canmoveUp(board) && !canmoveDown(board)){
		$("#score").text("score: " +score);
		$("#score").css("color", "red");
		gameover();
	}
}

function gameover(){
	$("#grid-container").append("<div id='gameover' class='gameover'><p>Score</p><span>"+score+"</span><a href='javascript:restartgame();' id='restartgamebutton'>Restart</a></div>");
	  var gameover = $(".gameover");
      gameover.css("width", "460px");
      gameover.css("height", "460px");
      gameover.css("background-color", "rgba(0, 0, 0, 0.5)");
}

function restartgame(){
    $(".gameover").remove();
    updateScore(0);
    newgame();
}

