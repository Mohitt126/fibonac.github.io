function fibonacci(fMax) {
	var F = 1, Fp=0,Fn, fib=[];
	   while (Fp <= fMax){
			fib.push(Fp);
			Fn = F +Fp; Fp = F; F = Fn;
		}
	return fib;
}
// -- END FIBONACCI Fx--

//grab the code output, and display in the on the page...
var input = document.querySelector('input');
var output = document.querySelector('#output');
output.textContent = fibonacci(input.value).join(", ");

function refresh(){
	output.textContent = fibonacci(input.value).join(", ");
	sumOdds();
}


// - - BONUS code - -
var sums;
var bonus = document.querySelector('#bonus');
function sumOdds(){
	var fibs = output.textContent;
	fibs = fibs.split(', ');
	sums = fibs.map(x=>x*1).filter(x => x%2 !== 0).reduce((x,y)=>{return x+y;});
	if (show){
		bonus.innerHTML = bonusMsg + sums + "</p>";
	}
}
var bonusMsg = "<p>The sum of the ODD Fibonacci numbers is: ";
var show = false;
function showBonus(){
	show=true;
	sumOdds();
	bonus.innerHTML = bonusMsg + sums + "</p>";
}
