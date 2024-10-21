//Object singleton 

//two ways of declaring 

// const newuser = new Object()
const newUser = {}; // this is not singleton

 newUser.id = "12dn";
  newUser.name = "kdkd";

// console.log(newUser);

const user = {
    username: "user123",  // Use colon to assign property value
    user1: {
        user1details: {
            userid: "123",
            subject: "hindi",
        }
    }
};

// console.log(user.user1.user1details?.subject);  // Corrected path


//objects merge combine 

const object1 = { a: 1, b: 2};
const object2 = {c: 3, d: 4};

const object3 = Object.assign({} ,object1, object2)
const object31 = Object.assign(object1, object2)
console.log(object3)
console.log(object31)

console.log("this is keys", Object.keys(user));
console.log("this is values" , Object.values(user));
console.log("this is entries" , Object.entries(user));

console.log(user.hasOwnProperty('usernames'));
console.log(user.hasOwnProperty('username'));



 

