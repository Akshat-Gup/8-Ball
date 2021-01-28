let ball = document.querySelector(".eightballback");
let text = document.querySelector("h3");
let responses = ['As I see it, yes.', "Ask again later."," Better not tell you now.","Cannot predict now.","Don’t count on it.","It is certain."," Yes.","No.","Never.","No Way!", "Absolutely not!"]
ball.addEventListener("click", () => {
	text.classList.add("rotate");
	setTimeout(() => {
		text.classList.remove("rotate");
		let index = Math.floor(Math.random() * responses.length);
		text.style.fontSize = '3em';
		text.style.padding = '30% 0 0 0';
		text.textContent = responses[index];
	}, 1000);
});
