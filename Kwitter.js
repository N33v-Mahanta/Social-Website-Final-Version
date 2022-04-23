var firebaseConfig = {
  apiKey: "AIzaSyC1c_W18I65nW4puLjCKekIcfk65y6QcVg",
  authDomain: "kwitter-chat-app-4161e.firebaseapp.com",
  databaseURL: "https://kwitter-chat-app-4161e-default-rtdb.firebaseio.com",
  projectId: "kwitter-chat-app-4161e",
  storageBucket: "kwitter-chat-app-4161e.appspot.com",
  messagingSenderId: "954225779527",
  appId: "1:954225779527:web:535b3c62b499406a35a262",
  measurementId: "G-FVPKVZ1XXB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name= document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location= "kwitter_room.html";
}