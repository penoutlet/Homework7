// Firebase Initialize



  // Initialize Firebase
 
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDZgLkwovbsiHiokhGAJzNa5msndwsB5CI",
    authDomain: "timesheet-exercise-9e1a2.firebaseapp.com",
    databaseURL: "https://timesheet-exercise-9e1a2.firebaseio.com",
    storageBucket: "timesheet-exercise-9e1a2.appspot.com",
    messagingSenderId: "650357396120"
  };
  firebase.initializeApp(config);
// Save the database 
var database = firebase.database();



$("#add-train-btn").on("click", function(){
		event.preventDefault();
	// grab input from the four fields
	var trainName = $("#train-name-input").val().trim();
	var trainDestination = $("#destination-input").val().trim();
		var trainFrequency = $("#frequency-input").val().trim();

	if (trainName === "") {
	alert("Please fill in all fields.")
	return;
}

	else if (trainDestination === ""){
	alert("Please fill in all fields.")
	return;
}

	else if (trainFrequency === ""){
	alert("Please fill in all fields.")
	return;
}


	var nextArrival = 

		arrivalinput = $("#nextArrival-input").val().trim();

		if (arrivalinput.length > 5) {

			alert("Invalid time format. Enter HH:mm please.");
			return;
}

		else if (arrivalinput.length < 5) {
			alert("Invalid time format. Enter HH:mm please.");
			return;
}	

		else if (arrivalinput.match(/[a-z]/i)) {
		alert("Invalid time format. Enter HH:mm please.");
		return;
}
		else {
		nextArrival = arrivalinput;
}

	// console.log
	console.log(trainName);
	console.log(trainDestination);
	console.log(nextArrival);
	console.log(trainFrequency);

// object to be pushed to firebase
var trainNew = {
		name: trainName,
		destination: trainDestination,
		nextArrival:nextArrival,
		frequency:trainFrequency
		// dateAdded:firebase.database.ServerValue.TIMESTAMP
		
		}
	// save these input values to firebase
	database.ref().push(trainNew)


	// console.log 

	console.log(trainNew.name);
	console.log(trainNew.destination);
	console.log(trainNew.nextArrival);
	console.log(trainNew.frequency);
	console.log(trainNew.dateAdded);

	//Alert
	alert("Train successfully added!");

	// Clears all text-boxes
	$("#train-name-input").val("");
	$("#destination-input").val("");
	$("#nextArrival-input").val("");
	$("#frequency-input").val("");

	// Prevents moving to new page
	return false;

});// end of on.click function


// then from firebase, generate the table. Believe I need child add for this. 
database.ref().on("child_added", function (childSnapshot, prevChildKey){ 


		// console.log
	console.log(childSnapshot.val());
	console.log(childSnapshot.val().name);
	console.log(childSnapshot.val().destination);
	console.log(childSnapshot.val().nextArrival);
	console.log(childSnapshot.val().frequency);
	console.log(childSnapshot.val().dateAdded);
	
	// resets the initial variables to have the values from firebase.
	var trainName = childSnapshot.val().name;
	var trainDestination = childSnapshot.val().destination;
	var nextArrival = childSnapshot.val().nextArrival;
	var trainFrequency = childSnapshot.val().frequency;
	// 
	// to convert time of nenxt arrival from military to regular. 

	
	// need to calculate Minutesaway variable. To do this, get the dateAdded timestamp and convert it using moment.js. This will give
	// the current time. Make sure it's in military time. Then subtract this converted timestamp from the time of firstTrain (Nextarrival) 
	// need to convert next arrival time from military to regular
	// Add each train's data into the table

	$(".table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
	trainFrequency	 + "</td><td>" + nextArrival + "</td></tr>");


});

// Functions 
// to give error message if entered time isn't in right format
// function timeformatchecker (nextArrival) {

// 	if (nextArrival 
// };









 