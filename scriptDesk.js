document.addEventListener('DOMContentLoaded',(load)=>{
	const menu = document.querySelector('#menu')
	const menuItems = document.querySelector('#menuItems')
	menu.addEventListener('click',(click)=>{
		animateMenu=()=>{
			const mBar_up = document.querySelector('#mBar_up')
			const mBar_midle = document.querySelector('#mBar_midle')
			const mBar_down = document.querySelector('#mBar_down')
			if (mBar_midle.style.display !== "none"){
				mBar_up.style.transform = "rotate(45deg)"
				mBar_up.style.transformOrigin = "0% 150%"
				mBar_midle.style.display = "none"
				mBar_down.style.transform = "rotate(-45deg)"
				mBar_down.style.transformOrigin = "30% -35%"
				menuItems.style.display = "block"
				activeButtons()
			}else{
				mBar_up.style.transform = "rotate(0deg)"
				mBar_up.style.transformOrigin = "0"
				mBar_midle.style.display = "block"
				mBar_down.style.transform = "rotate(0deg)"
				mBar_down.style.transformOrigin = "0"
				menuItems.style.display = "none"
			}
		}
		activeButtons=()=>{
			const home = document.querySelector('#home')
			home.addEventListener('click',()=>{
				open("./homeDesk.html","_self",false)
			})
			const download = document.querySelector('#download')
			download.addEventListener('click',()=>{
				open("https://drive.google.com/file/d/1KkrlKGelj1kH0DIa14dEOPV1mLnDb7qX/view?usp=sharing","_blanck",true)
			})
			const projects = document.querySelector('#projects')
			projects.addEventListener('click',()=>{
				open("./projectsDesk.html","_self",false)
			})
			const devWeb = document.querySelector('#info')
			info.addEventListener('click',()=>{
				open("./devWeb.html","_self",false)
			})
		}
		animateMenu()
	})

})
    