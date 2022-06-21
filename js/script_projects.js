const stand = document.querySelector('.stand')
let projectsArray = [
	{nameProject: "Tic tac toe", link: "https://tictactoe-2021.vercel.app", linkGit: "https://github.com/GenilsomAlan/Jogo-da-Velha"},
	{nameProject: "Snake game", link: "https://snake-js-2022.vercel.app",linkGit: "https://github.com/GenilsomAlan/snake"},
	{nameProject: "Calculadora", link: "https://calculadora-2021.vercel.app",linkGit: "https://github.com/GenilsomAlan/calculadora"},
	{nameProject: "Jogo da velha em C", link: "/", linkGit: "https://github.com/GenilsomAlan/Jogo-da-velha-em-C"},
	{nameProject: "Game simples", link: "https://poc-nine.vercel.app", linkGit: "https://github.com/GenilsomAlan/poc"},
	{nameProject: "Bateria musical", link: "https://genilsomalan.github.io/drumKit/", linkGit: "https://github.com/GenilsomAlan/drumKit"},
	{nameProject: "Teclado virtual", link: "https://teclado-virtual.vercel.app", linkGit: "https://github.com/GenilsomAlan/teclado_virtual"}
]
for (var i = 0; i < projectsArray.length; i++) {
	stand.innerHTML += `
		<div class="cardProjects">
			<h3>${projectsArray[i].nameProject}</h3>
			<a href="${projectsArray[i].link}" target="blank">
				<p>Ver projeto</p>
			</a>
			<a href="${projectsArray[i].linkGit}" target="blank">
				<p>Código</p>
			</a>
		</div>`
}
