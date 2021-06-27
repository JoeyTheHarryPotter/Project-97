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
room_name = localStorage.getItem("room_name");
  
function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        username: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value="";
}
  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    //Start code
    console.log(firebase_message_id);
    console.log(message_data);
    username = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>" + username + "<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML+=row;
    //End code
} });  }); }
getData();

function updateLike(message_id){
    console.log("Clicked On Like Button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    update_likes = Number(likes) + 1;
    console.log(update_likes);
    firebase.database().ref(room_name).child(message_id).update({
          like: update_likes
    });
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}
  