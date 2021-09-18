var player_1n = localStorage.getItem("player1_key");
var player_2n = localStorage.getItem("player2_key");

document.getElementById("player1_name").innerHTML = player_1n + " : ";
document.getElementById("player2_name").innerHTML = player_2n + " : ";

var player1s = 0;
var player2s = 0;

document.getElementById("player1Score").innerHTML = player1s;
document.getElementById("player2Score").innerHTML = player2s;

document.getElementById("player_question").innerHTML = "Question Turn: " + player_1n;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player_2n;

function send() {
    getN1 = document.getElementById("n1").value;
    getN2 = document.getElementById("n2").value;
    if (getN1 == "" || getN2=="") {
        document.getElementById("n1").innerHTML = "Enter the first number !"
        document.getElementById("n2").innerHTML = "Enter the second number !"
    } else {
        answer=Number(getN1)*Number(getN2);
        question = "<h3 id='word_display'>Q." + getN1 +"X"+getN2+ "</h3>";
        input_box = "<br>Answer:<input id='input_check_box'>"
        button_tag = "<br><br><button class='btn btn-info' onclick='check()'>Check Answer</button>"
        row = question + input_box + button_tag;
        document.getElementById("output").innerHTML = row;
        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
    }
}
var Q_turn = "player1"
var A_turn = "player2"

function check() {
    getAnswer = document.getElementById("input_check_box").value;
   
    if (answer == getAnswer) {
        if (A_turn == "player1") {
            player1s = player1s + 1;
            document.getElementById("player1Score").innerHTML = player1s;
        } else {
            player2s = player2s + 1;
            document.getElementById("player2Score").innerHTML = player2s;
        }
    }
    if(Q_turn=="player1"){
        Q_turn="player2";
        document.getElementById("player_question").innerHTML = "Question Turn:" + player_2n;
    }
    else{
        Q_turn="player1";
        document.getElementById("player_question").innerHTML = "Question Turn:" + player_1n;
    }
    if(A_turn=="player2"){
        A_turn="player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn:" + player_1n;
    }
    else{
        A_turn="player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn:" + player_2n;
    }
    document.getElementById("output").innerHTML="";
}