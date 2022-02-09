const firebaseConfig = {
      apiKey: "AIzaSyCQlEcyDXgjJQKH8P59BFw4okxu1BG1Dc8",
      authDomain: "citychatbot-xpvd.firebaseapp.com",
      databaseURL: "https://citychatbot-xpvd-default-rtdb.firebaseio.com",
      projectId: "citychatbot-xpvd",
      storageBucket: "citychatbot-xpvd.appspot.com",
      messagingSenderId: "233289655440",
      appId: "1:233289655440:web:804c34f8d01ae759b5a415",
      measurementId: "G-L3LJ80XCPN"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name"); 
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
