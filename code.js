var username = ""///////////////////////////////////////////////////////
var password = ""///////////////////////////////////////////////////////
var revealdata = ///////////////////////////////////////////////////////
/////////////////////////////LOGIN SCREEN///////////////////////////////
///////////////////ENTER YOUR USERNAME AND PASSWORD/////////////////////

username = "Mohamed"
password = "12345"
revealdata = true


///////////////////////////////////////////////////////////////////////


function login () {
 if (revealdata===false) {
  return("what the hecc do you want")
              
              
} else if (username=== "Sarah"
    && password==="brokensarah"
    && revealdata===true) {
  return("Hello " +user1.username+
              "!\nYou are " +user1.age+
              " old.\nYou are studying in " +user1.faculty+
              "\nand work as a " +user1.work+
              "\nYour Email is: " +user1.email)
      
      
} else if (username=== "Ali"
    && password==="Minecraft9"
    && revealdata===true) {
  return("Hello " +user2.username+
              "!\nYou are " +user2.age+
              " old.\nYou are studying in " +user2.faculty+
              "\nand work as a " +user2.work+
              "\nYour Email is: " +user2.email)
              
              
} else if (username=== "Mohamed"
    && password==="12345"
    && revealdata===true) {
  return("Hello " +user3.username+
              "!\nYou are " +user3.age+
              " old.\nYou are studying in " +user3.faculty+
              "\nand work as a " +user3.work+
              "\nYour Email is: " +user3.email)
} else {
        return ("incorrect username/password")
      } 
}


//////////////////////////////DATABASE/////////////////////////////////


var user1 = {
  username: "Sarah Mohamed Berkawy",
  age: "19",
  faculty: "Specific Education AU",
  work: "Graphic Designer",
  email: "sarahberkawy22@gmail.com"
}

var user2 = {
  username: "Ali Hassan Mohamed",
  age: "20",
  faculty: "B.I.S. HU",
  work: "IS Manager",
  email: "scorpodark@gmail.com"
}

var user3 = {
  username: "Mohamed Abdelrahman Othman",
  age: "18",
  faculty: "Computer Science CU",
  work: "Software Enginner and AI Specialist",
  email: "mohamedothman33@gmail.com"
}


///////////////////////////////OUTPUT AREA/////////////////////////////


console.log(login())


//////////////////////////////////////////////////////////////////////
