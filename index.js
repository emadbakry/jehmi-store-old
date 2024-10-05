let percentage = {
	// 12%
	vedg: 0.88,
	// 13%
	bakery: 0.90,
	// 12%
	dairy: 0.88,
};
let allInputs = document.querySelectorAll(".input-outer input");
allInputs.forEach((input) => {
	input.addEventListener("input", () => {
		try {
			// calc all three sections
			//
			//
			// vedgetable
			let vedgeInput = document.querySelector("#vedg");
			let vedge = vedgeInput.value || 0;
			let vedgeOut = vedge * percentage.vedg;
			let vedgeIn = vedge - vedgeOut;
			console.log(vedgeOut, vedgeIn);
			document.querySelector(".vedg .p-out").textContent = Math.floor(vedgeOut);
			document.querySelector(".vedg .p-in").textContent = Math.floor(vedgeIn);
			//
			//
			// bakery
			let bakeryInput = document.querySelector("#bakery");
			let bakery = bakeryInput.value || 0;
			let bakeryOut = bakery * percentage.bakery;
			let bakeryIn = bakery - bakeryOut;
			document.querySelector(".bakery .p-out").textContent = Math.floor(bakeryOut);
			document.querySelector(".bakery .p-in").textContent = Math.floor(bakeryIn);
			//
			//
			// dairy
			let dairyInput = document.querySelector("#dairy");
			let dairy = dairyInput.value || 0;
			var dairyOut = dairy * percentage.dairy;
			let dairyIn = dairy - dairyOut;
			document.querySelector(".dairy .p-out").textContent = Math.floor(dairyOut);
			document.querySelector(".dairy .p-in").textContent = Math.floor(dairyIn);
			//
			// total
			let totalEntered = +vedge + +bakery + +dairy || 0;
			document.querySelector(".total-entered").textContent = Math.floor(totalEntered) || "nothing";
			let totalOut = vedgeOut + bakeryOut + dairyOut;
			// console.log(vedgeOut, bakeryOut, dairyOut);
			// console.log(vedgeIn, bakeryIn, dairyIn);
			let totalIn = vedgeIn + bakeryIn + dairyIn;
			document.querySelector(".total-out").textContent = Math.floor(totalOut);
			document.querySelector(".total-in").textContent = Math.floor(totalIn);
			//
			//
			//
			// count how many 1, 5, 10, 50, 100, 500 riyals we need for totalIn
			let totalInAmount = totalIn;

			let totalInFiveHundreds = Math.floor(totalInAmount / 500);
			let remainder = totalInAmount % 500;
			let totalInHundreds = Math.floor(remainder / 100);
			remainder %= 100;
			let totalInFifties = Math.floor(remainder / 50);
			remainder %= 50;
			let totalInTens = Math.floor(remainder / 10);
			remainder %= 10;
			let totalInFives = Math.floor(remainder / 5);
			remainder %= 5;
			let totalInRiyals = remainder;
			// console.log all of them
			console.log(totalInFiveHundreds, totalInHundreds, totalInFifties, totalInTens, totalInFives, totalInRiyals);
			// do the same for dairyOut, bakeryOut, vedgeOut
			// dairyOut
			let dairyOutAmount = dairyOut;
			let dairyOutFiveHundreds = Math.floor(dairyOutAmount / 500);
			let dairyOutRemainder = dairyOutAmount % 500;
			let dairyOutHundreds = Math.floor(dairyOutRemainder / 100);
			dairyOutRemainder %= 100;
			let dairyOutFifties = Math.floor(dairyOutRemainder / 50);
			dairyOutRemainder %= 50;
			let dairyOutTens = Math.floor(dairyOutRemainder / 10);
			dairyOutRemainder %= 10;
			let dairyOutFives = Math.floor(dairyOutRemainder / 5);
			dairyOutRemainder %= 5;
			let dairyOutRiyals = dairyOutRemainder;
			// bakeryOut
			let bakeryOutAmount = bakeryOut;
			let bakeryOutFiveHundreds = Math.floor(bakeryOutAmount / 500);
			let bakeryOutRemainder = bakeryOutAmount % 500;
			let bakeryOutHundreds = Math.floor(bakeryOutRemainder / 100);
			bakeryOutRemainder %= 100;
			let bakeryOutFifties = Math.floor(bakeryOutRemainder / 50);
			bakeryOutRemainder %= 50;
			let bakeryOutTens = Math.floor(bakeryOutRemainder / 10);
			bakeryOutRemainder %= 10;
			let bakeryOutFives = Math.floor(bakeryOutRemainder / 5);
			bakeryOutRemainder %= 5;
			let bakeryOutRiyals = bakeryOutRemainder;
			// vedgeOut
			let vedgeOutAmount = vedgeOut;
			let vedgeOutFiveHundreds = Math.floor(vedgeOutAmount / 500);
			let vedgeOutRemainder = vedgeOutAmount % 500;
			let vedgeOutHundreds = Math.floor(vedgeOutRemainder / 100);
			vedgeOutRemainder %= 100;
			let vedgeOutFifties = Math.floor(vedgeOutRemainder / 50);
			vedgeOutRemainder %= 50;
			let vedgeOutTens = Math.floor(vedgeOutRemainder / 10);
			vedgeOutRemainder %= 10;
			let vedgeOutFives = Math.floor(vedgeOutRemainder / 5);
			vedgeOutRemainder %= 5;
			let vedgeOutRiyals = vedgeOutRemainder;
			//
			//
			//
			// compain total
			let totalRiyals = totalInRiyals + dairyOutRiyals + bakeryOutRiyals + vedgeOutRiyals;
			let totalFives = totalInFives + dairyOutFives + bakeryOutFives + vedgeOutFives;
			let totalTens = totalInTens + dairyOutTens + bakeryOutTens + vedgeOutTens;
			let totalFifties = totalInFifties + dairyOutFifties + bakeryOutFifties + vedgeOutFifties;
			let totalHundreds = totalInHundreds + dairyOutHundreds + bakeryOutHundreds + vedgeOutHundreds;
			let totalFiveHundreds = totalInFiveHundreds + dairyOutFiveHundreds + bakeryOutFiveHundreds + vedgeOutFiveHundreds;

			document.querySelector(".totalOut1 .unit").textContent = Math.round(totalRiyals);
			document.querySelector(".totalOut5 .unit").textContent = Math.round(totalFives);
			document.querySelector(".totalOut10 .unit").textContent = Math.round(totalTens);
			document.querySelector(".totalOut50 .unit").textContent = Math.round(totalFifties);
			document.querySelector(".totalOut100 .unit").textContent = Math.round(totalHundreds);
			document.querySelector(".totalOut500 .unit").textContent = Math.round(totalFiveHundreds);
		} catch (err) {
			console.log(err);
			document.querySelector(".errors span").append(`${err}`);
		}
	});
});

// printing
function print_out(sec_name, sec_amount, date) {
	// print div
	let printSec = document.querySelector(".toPrint");
	let printContent = `
	<p>${sec_name}</p>
	<p>${sec_amount} ريال</p>
	<p style="width:100%;">${date}</p>

	`;
	printSec.innerHTML = printContent;
	// console.log(sec_name, sec_amount, date);

	window.print();
}
// print btns
let printBtns = document.querySelectorAll(".btn-print button");
// listener
printBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		print_out(btn.dataset.name, btn.parentElement.parentElement.querySelector(".p-out").textContent, new Date().toLocaleDateString());
	});
});

// ------ print all
let printAllBtn = document.querySelector(`.printAll .btn`);
function printAll() {
	let printSec = document.querySelector(".toPrint");
	let printContent = `
	<div>
	<div>
	<p>الخضار</p>
	<p>${document.querySelector(".vedg .p-out").textContent} ريال</p>
	<p style="width:100%;">${new Date().toLocaleDateString()}</p>
	</div>
	</div>
	<br>

	<div>
	<div>
	<p>المخبز</p>
	<p>${document.querySelector(".bakery .p-out").textContent} ريال</p>
	<p style="width:100%;">${new Date().toLocaleDateString()}</p>
	</div>
	</div>
	<br>
	<div>
	<div>
	<p>الأجبان</p>
	<p>${document.querySelector(".dairy .p-out").textContent} ريال</p>
	<p style="width:100%;">${new Date().toLocaleDateString()}</p>
	</div>
	</div>
	<br>

	

	`;
	printSec.innerHTML = printContent;

	window.print();
}

printAllBtn.addEventListener("click", () => {
	// do something
	printAll();
});
