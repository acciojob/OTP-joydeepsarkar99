//your JS code here. If required.
let inputValue = document.querySelectorAll(".code")
for(let i=0;i<inputValue.length;i++){
	if(i+1 < input.length && inputValue[i].value.length == 1){
		inputValue[i+1].focus()
	}
}