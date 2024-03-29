//your JS code here. If required.
let inputs = document.querySelectorAll(".code")
window.addEventListener("load",()=>inputs[0].focus());


let index = 0

for (let i of inputs) {
    i.addEventListener('input', (eventDetails) => {
        let inputElement = eventDetails.target.value
        if (inputElement.length == 1) {
            if (index < inputs.length - 1) {
                index++;
                inputs[index].focus();
            }
        } else if (inputElement.length == 0) {
            if (index > 0) {
                index--;
                inputs[index].focus();
            }
        }
    });
}