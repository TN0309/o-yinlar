  var userName = "Nurmuhammad";  //string
 var userAge = 23;

 console.log(typeof userAge)

 // alert = ogohlantirish 
 // prompt = tavsiya 
 // confirm = tasdiqlash 

  var userName = prompt("Ismingizni kiriting:");
  var userLastName = prompt(`${userName} familyangizni kiriting:`);
  var userAge= prompt (`${userName} ${userLastName} yoshingizni kiriting`)
  var userNumber = prompt (`${userName} ${userLastName} telefon raqamingizni kiriting`)
  var userViloyat = prompt (`${userName} ${userLastName} Viloyatingizni  kiriting`)
  var userTuman = prompt (`${userName} ${userLastName} Yashayotgan tumaningizni kiriting`)
 alert(
  `ismi: ${userName}
familyasi: ${userLastName}
yoshi:${userAge}
Nurmber:${userNumber}
Viloyat:${userViloyat}
Tuman:${userTuman} `
 );