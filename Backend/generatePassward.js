// const numChars = "0123456789";
// const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerChars = "abcdefghijklmnopqrstuvwxyz";
// const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";


// const n = document.getElementById("length");
// const num = document.getElementById("numbers");
// const uppercase = document.getElementById("uppercase");
// const lowercase = document.getElementById("lowercase");
// const symbols = document.getElementById("symbols");

// const generate = document.querySelector(".generate-btn");

// function getRandomChars(chars, count){
//     let str = "";
//     for(let i = 0; i<count; i++){
//         const index = Math.floor(Math.random()*chars.length);
//         str += chars[index];
//     }
//     return str;
// }

// function shuffle(str){
//     return str.split('').sort(()=> Math.random()-0.5).join('');
// }

// generate.addEventListener("click", ()=>{
    
//     let password = "";

//     const active = [num.checked, uppercase.checked, lowercase.checked, symbols.checked].filter(Boolean).length;

//     if (active === 0) { // ✅ FIXED: added check to avoid division by 0 if no options selected
//         alert("Please select at least one character type.");
//         return;
//     }

//     const length = Math.floor(parseInt(n.value));
//     const portion = Math.floor(length/active);

//     if(num.checked){
//         password += getRandomChars(numChars, portion);
//     }
//     if(uppercase.checked){
//         password += getRandomChars(upperChars, portion);
//     }
//     if(lowercase.checked){
//         password += getRandomChars(lowerChars, portion);
//     }
//     if(symbols.checked){
//         password += getRandomChars(symbolChars, portion);
//     }

//     while (password.length < length) {
//         let all = "";
//         if (num.checked) all += numChars;
//         if (uppercase.checked) all += upperChars;
//         if (lowercase.checked) all += lowerChars;
//         if (symbols.checked) all += symbolChars;
//         password += getRandomChars(all, 1);
//     }

//     password = shuffle(password);

//     document.getElementById("password").value = password;

// })