var firebaseConfig = {
  apiKey: "AIzaSyBBKoW6pg5djutHX7rBTLAxRgMM25RZC2g",
  authDomain: "let-s-chat-web-app-cfe57.firebaseapp.com",
  projectId: "let-s-chat-web-app-cfe57",
  storageBucket: "let-s-chat-web-app-cfe57.appspot.com",
  messagingSenderId: "997660528720",
  appId: "1:997660528720:web:1aef2996d5b0c91bf7c155",
};

// Initialize Firebase
firebase.initializeApp(config);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name -"+ Room_names);
  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML +=row;
  //End code
  });});}
getData();

function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name",room_name);

window.location="kwitter_page.html";
}

function redirectToRoomName (name) {
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}