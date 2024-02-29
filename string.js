function reverseString(inputStr) {
    return inputStr.split("").reverse().join("");
}

document.getElementById("reverseButton").addEventListener("click", function(event) {
    event.preventDefault(); 

    let inputStr = document.getElementById("mainString").value;
    let reversedStr = "La cadena invertida es: " + reverseString(inputStr);
    document.getElementById("inverseString").innerText = reversedStr;
});