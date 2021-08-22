
function getText() {
    document.getElementById("result").classList.add("invisible");

    let startText = document.getElementById("reverseText").value;
    let rText = reverseText(startText);
    displayText(rText);
}

function reverseText(startText){
    let rText = [];

    //reverse a string using a for loop
    for (let i = startText.length - 1; i >= 0; i--) {
        rText += startText[i];
    }

    return rText;
}

function displayText(rText) {
    
    // write to the page
    document.getElementById('message').innerHTML = `Your string reversed is: ${rText}`;
    // show the alert box
    document.getElementById('result').classList.remove("invisible");
}