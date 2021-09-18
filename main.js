function addUser(){
    var player1=document.getElementById("player1").value;
    localStorage.setItem("player1_key",player1);
    var player2=document.getElementById("player2").value;
    localStorage.setItem("player2_key",player2);
    window.location="game_page.html";
}