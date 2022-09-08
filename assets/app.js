let submitBtn = document.querySelector(".submit-btn");
let passwordInput = document.querySelector("#password");
let isUpper = false;
let isDigit = false;
let numbers = [0,1,2,3,4,5,6,7,8,9];
passwordInput.addEventListener("keyup",function(e){
    console.log(e.target.value);
    let word = e.target.value;
    if (!isUpper) {
        for (let i = 0; i < word.length; i++) {
            if (word[i].toUpperCase()==word[i]) {
                document.body.style.backdropFilter = "blur(75px)";
                break;
            }
        }
    } 
    if (!isDigit) {
        for (let i = 0; i < numbers.length; i++) {
           for (let j = 0; j < word.length; j++) {
                if (numbers[i]==word[j]) {
                    document.body.style.backdropFilter = "blur(50px)";
                }
           }
        }
    }
})