const timer = document.body.querySelector("#timer");
const HomeTime = new Date();
HomeTime.setHours(22);
HomeTime.setMinutes(0);
HomeTime.setSeconds(0);
//alert(HomeTime);
function timerCal() {
	const now = new Date();
	HomeTime.setDate(now.getDate());
	const minus = HomeTime - now;	
	let hour = String(
    Math.floor((minus % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
  ).padStart(2, "0");
 	 let min = String(
    Math.floor((minus % (60 * 60 * 1000)) / (60 * 1000))
  ).padStart(2, "0");
 	 let sec = String(Math.floor((minus % (60 * 1000)) / 1000)).padStart(2, "0");
	timer.innerText = `${hour}: ${min}: ${sec}`;
}
timerCal();
setInterval(timerCal, 1000);