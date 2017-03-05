// Firebase Boiler plate

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDkvuJ8WsvK3AzwZxcfoQrtwWkBi3RbKQ0",
    authDomain: "rps-game-hw7.firebaseapp.com",
    databaseURL: "https://rps-game-hw7.firebaseio.com",
    storageBucket: "rps-game-hw7.appspot.com",
    messagingSenderId: "737487304259"
  };
  firebase.initializeApp(config);

// 

var database = firebase.database();

$("#Submit").on("click", function(){
	var nameinput= $("#name-input").val().trim();
	// console.log
	console.log(nameinput);


})

$(".button").on("click", function(){

	if ($(this).attr('id')==("rock")) {
	database.ref().set({
		choice:"Rock"
		
	})
	
	console.log($(this).attr('id'));
	playerChoice = $(this).attr('id');

}
else if ($(this).attr('id')==("paper")){
	database.ref().set({
		choice:"Paper"
		})

	console.log($(this).attr('id'));
	playerChoice = $(this).attr('id');
}
else if ($(this).attr('id')==("scissors")){
	database.ref().set({
		choice:"Scissors"
		})

	console.log($(this).attr('id'));
	playerChoice = $(this).attr('id');
}

})


