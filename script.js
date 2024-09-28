let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("number");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");


// ? Showing Input Slider Value  

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
    // console.log(inputSlider.value);

});


genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
    // console.log(passBox.value);

});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "!@#$%^&*";


// ? Function to generate Password

function generatePassword() {
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? lowerChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if (allChars == "" || allChars.length == 0) {
        return genPassword;
    }
    copyIcon.style.display = "inline";



    let i = 1;
    while (i <= inputSlider.value) {

        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    return genPassword;
}





copyIcon.addEventListener('click', ()=> {
document.getElementById("copyIcon").style.display = "inline";
    if(passBox.value != "" || passBox.value.length >= 1){
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";
    
     copyIcon.title = "Passwoard Copied";

    setTimeout(() => {
        copyIcon.innerHTML = "content_copy";
        copyIcon.title = "";
    },3000);
    }
})

    // copyIcon.onmouseover = () => {
    //     console.log("Click to Copied");
    //     // copyIcon.style.display = "flex";
    //     // copyIcon.style.innerHTML = "Click to Copy";
    // };