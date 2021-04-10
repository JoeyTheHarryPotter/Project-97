var firebaseConfig = {
  apiKey: "AIzaSyCq1Fm2sAeh7Edfo3lJD_4HDCcMP2Igp0E",
  authDomain: "kwitter-project-dd72a.firebaseapp.com",
  databaseURL: "https://kwitter-project-dd72a-default-rtdb.firebaseio.com/",
  projectId: "kwitter-project-dd72a",
  storageBucket: "kwitter-project-dd72a.appspot.com",
  messagingSenderId: "813252440342",
  appId: "1:813252440342:web:a45cfc30342345b5a1a037"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "Adding Room Name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "Kwitter Page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
    console.log("Room Names - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
  //End code
});});}
getData();

function redirectToRoomName(username){
  console.log(username);
  localStorage.setItem("room_name", username);
  window.location = "Kwitter Page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
