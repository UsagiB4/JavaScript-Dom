const user = {id: 1211, uName: 'Tom'};
const userJson = JSON.stringify(user);
console.log(userJson);
const userJson2 = JSON.parse(userJson);
console.log(userJson2);