const accountId = 10;
let accountEmail = "nikita@google.com";
var accountPassword = "12345";
accountCity = "Pune";
let accountState;

// accountId = 2; // assignment to constant variable not allowed

accountEmail = "ns@google.com";
accountPassword = "10101010";
accountCity = "Mumbai";

/*
Prefer not to use var
because of problem in Block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);