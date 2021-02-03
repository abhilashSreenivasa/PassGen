

    const numberInput=document.getElementById("number-input")
    const lower=document.getElementById("lower-case")
    const upper=document.getElementById("upper-case")
    const numbers=document.getElementById("numbers")
    const symbols=document.getElementById("symbols")
    const passSpace=document.getElementById("pass-space-text")
    numberInput.focus()

    
//copy logic,Need to create a textarea to perform copy action.
document.addEventListener('DOMContentLoaded',function(){
    
    var clip=document.getElementById('clip')
    clip.addEventListener('click',function(){
         const textarea = document.createElement('textarea');
        const password = passSpace.innerText;
        if(!password) { return; }
        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.style.paddingLeft="5px";
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        alert('Password copied to clipboard');
    })
   

})
        




document.addEventListener('DOMContentLoaded',()=>{

   var button=document.getElementById('button')
  button.addEventListener('click',function(){
    let length = numberInput.value;
	const hasLower = lower.checked;
	const hasUpper = upper.checked;
	const hasNumber = numbers.checked;
    const hasSymbol = symbols.checked;
    if(length>20){
    length=20;
    numberInput.value=20;
    }
    if(length<5){
    length=5;
    numberInput.value=5;
    }
    passSpace.innerText=generatePass(hasLower, hasUpper, hasNumber, hasSymbol, length);
  })
    

})
    
   
 

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

//Function that creates password
function generatePass(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	if(typesCount === 0)
		return '';

	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

