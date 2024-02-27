var fondo = document.querySelector(".fondo") 
var carroceria = document.querySelector(".carroceria") 
var llanta1 = document.querySelector(".llanta1") 
var llanta2 = document.querySelector(".llanta2") 
var luces = document.querySelector(".luz") 
var sprite = document.querySelector(".sprite") 

fondo.addEventListener('click', Mover)

function Mover(){
fondo.classList.add('bodyMover')
carroceria.classList.add('carroceriaMover')
llanta1.classList.add('llanta1Mover')
llanta2.classList.add('llanta2Mover')
luces.classList.add('lucesMover')
luces.classList.remove('oculto')
sprite.classList.remove('oculto')
sprite.classList.add('spriteMover')
}

