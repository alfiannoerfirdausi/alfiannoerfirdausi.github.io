let body = document.body
let info = document.getElementById("info");
let mode = document.getElementById("mode");
let home = document.getElementById("home");
let pelangi = document.getElementById("pelangi");
let content = document.getElementById("contentGerak");
const limit = 5;
let counter = 0;
let remainingLeft
function darkMode(){
	counter+=1;
	remainingLeft =limit-counter;
	if(counter >= limit){
		info.textContent="maaf jatah ubah mode anda habis!!!";
		mode.style.display ="none";
		home.textContent="RESTART";
		return;
	}else{
		
	}
	if(mode.textContent=="Mode Dark"){
		mode.textContent="Mode Light"
		content.classList.add("animasiGerak")
	}else if(mode.textContent=="Mode Light"){
		mode.textContent="Mode Dark"
		content.classList.remove("animasiGerak")
	}
	info.textContent=`mode dark diklik ${counter}x, tersisa ${remainingLeft}x kesempatan anda`;
	body.classList.toggle("dark");
}
function homei(){
	location.reload();
}
function rainbow(){
	counter+=1;
	remainingLeft =limit-counter;
	if(counter >= limit){
		info.textContent="maaf jatah ubah mode anda habis!!!";
		pelangi.style.display ="none";
		home.textContent="RESTART";
		return;
	}else{
		
	}	

	info.textContent=`mode pelangi diklik ${counter}x, tersisa ${remainingLeft}x kesempatan anda`;
	body.classList.toggle("warnaWarni");
}
