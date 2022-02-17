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
			return true
		}
	}
	startVersion=()=>{
		if (checkDevice() == true){
			open("./home.html","_self",false)
		}else{
			//desktopVersion()
		}
	}
	startVersion()	
})