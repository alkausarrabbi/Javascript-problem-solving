 // Perfect friend 


 function perfectFriend(names) {  
    if (typeof names !="object")
    {
        return "please enter a name into the array"
    }
    for (const name of names) {
      if (name.length == 5) {
        return name;
      }
      
    }
  }
  const names = ["orni", "raihan", "zihad", "rizvi", "rehan"];
  var perfectFriendName=perfectFriend(names);
  console.log("Perfect friend name is :",perfectFriendName);