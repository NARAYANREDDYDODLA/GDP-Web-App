const firebaseConfig = {
  apiKey: "AIzaSyDvVcLwk3MP5QkZgHiRPUnB13-a7FAA8Sk",
  authDomain: "gdp-web-app-86e5e.firebaseapp.com",
  databaseURL: "https://gdp-web-app-86e5e-default-rtdb.firebaseio.com",
  projectId: "gdp-web-app-86e5e",
  storageBucket: "gdp-web-app-86e5e.appspot.com",
  messagingSenderId: "737129792510",
  appId: "1:737129792510:web:1b7aa5eb31c4115b3a76af"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("sendemail");
  
  document.getElementById("sendemail").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    console.log(name,emailid,msgContent);
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("sendemail").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };