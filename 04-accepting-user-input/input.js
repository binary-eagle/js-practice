// HOW TO ACCEPT USER INPUT

// Easy way = window prompt
// Professional way = HTML textbox

/*
let username = window.prompt("what is your username?");
console.log(username);
*/
let username;

document.getElementById("mySubmit").onclick = function(){
	username = document.getElementById("myText").value;
  
  document.getElementById("myH1").textContent = `Hello ${username}`
 	//console.log(username);
}