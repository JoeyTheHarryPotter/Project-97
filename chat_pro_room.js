var firebaseConfig = {
  apiKey: "AIzaSyAl4R33_pucYDF3oMXVIqhgsV9nPbaQGOM",
  authDomain: "chat-pro-298f4.firebaseapp.com",
  databaseURL: "https://chat-pro-298f4-default-rtdb.firebaseio.com",
  projectId: "chat-pro-298f4",
  storageBucket: "chat-pro-298f4.appspot.com",
  messagingSenderId: "954179800917",
  appId: "1:954179800917:web:1289ede509654c1d3c29dc"
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
  window.location = "chat_pro_page.html";
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
  localStorage.setItem("room_name", roomname);
  window.location = "chat_pro_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
