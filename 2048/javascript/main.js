// JavaScript Document
$(function () {
    newgame();
});

var board = new Array();
var hasAdd = new Array();

function newgame(){
	init();
	generateOneNumber();
    generateOneNumber();
}

function init(){
	for(var i = 0; i < 4; i++){
		board[i] = new Array();
		hasAdd[i] = new Array();
		for(var j = 0; j < 4; j++){
			board[i][j] = 0;
			hasAdd[i][j] = false;
			var gridCell = $("#grid-cell-" + i + "-" + j);
			gridCell.css("top", getTopPos(i,j));
			gridCell.css("left", getLeftPos(i,j));
		}
	}
	updateBoardView();	
}

function updateBoardView(){
	$(".number-cell").remove();
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			$("#grid-container").append("<div class = 'number-cell' id = 'number-cell-" + i + "-" + j + "'></div>");
			var numbercell = $("#number-cell-" + i + "-" + j);
			if(board[i][j] == 0){
				numbercell.css("width","0px");
				numbercell.css("height","0px");
				numbercell.css("top", getTopPos(i,j) + 50);
				numbercell.css("left", getLeftPos(i,j) + 50);				
			}else{
				numbercell.css("width", "100px");
                numbercell.css("height", "100px");
                numbercell.css("top", getTopPos(i, j));
                numbercell.css("left", getLeftPos(i, j));
                numbercell.css("background-color", getNumberBackgroundColor(board[i][j]));
                numbercell.css("color", getNumberColor(board[i][j]));
                numbercell.text(board[i][j]);
			}
			hasAdd[i][j] = false;
		}
	}
	$(".number-cell").css("line-height", "100px");
    $(".number-cell").css("font-size", "60px");
}

function isgeneratenumber(){
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			if(board[i][j] == 0){
				return true;
			}
		}
	}
	return false;
}
 
function generateOneNumber(){
	
	if(!isgeneratenumber()){
		return false;	
	}
	
	var x = parseInt(Math.floor(Math.random()*4));
	var y = parseInt(Math.floor(Math.random()*4));
	
	while(true){
		if(board[x][y] == 0){
			break;
		}
	x = parseInt(Math.floor(Math.random()*4));
	y = parseInt(Math.floor(Math.random()*4));		
	}
	
	var randNumber = Math.random() < 0.5 ? 2 : 4;
	board[x][y] = randNumber;
	ShowNumberWithAnimation(x, y, randNumber);
	return true;
}

function ShowNumberWithAnimation(x, y, randNumber){
	var numbercell = $("#number-cell-" + x + "-" + y);		
	numbercell.text(randNumber);
	numbercell.css("color", getNumberColor(randNumber));
	numbercell.css("background-color", getNumberBackgroundColor(randNumber));
	numbercell.animate({
		width: "100px",
        height: "100px",
        top: getTopPos(x, y),
        left: getLeftPos(x, y)
	}, 100);
}
