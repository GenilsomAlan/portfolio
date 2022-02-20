document.addEventListener('DOMContentLoaded',(load)=>{
	//check userAgent
	checkDevice =()=>{
		if (navigator.userAgent.match("/Android/i") ||
			navigator.userAgent.match("/webOS/i") ||
			navigator.userAgent.match("/iPhone/i") ||
			navigator.userAgent.match("/iPad/i") ||
			navigator.userAgent.match("/iPod/i") ||
			navigator.userAgent.match("/BlackBerry/i") ||
			navigator.userAgent.match("/WindowsPhone/i")){
			return true
		}else{
			return false
		}
	}
	startVersion=()=>{
		if (checkDevice() == true){
			//version mobile
			open("./home.html","_self",false)
		}else{
			//version desktop
			open("./homeDesk.html","_self",false)
		}
	}
	startVersion()	
})
