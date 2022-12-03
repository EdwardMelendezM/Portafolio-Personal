const d = document;
let animado = d.querySelectorAll("#estilo_aparecer")
let animadoDerecha = d.querySelectorAll("#estilo_aparecer_derecha")
let parallax=d.querySelector(".parallax");

function scrollParalax(){
    let scrollTop = d.documentElement.scrollTop;;
    parallax.style.transform='translateY('+scrollTop*-0.2+'px)';
}
function mostrarElement(){
    let scrollTop=d.documentElement.scrollTop;
    animado.forEach(e=>{
        let alturaAnimado=e.offsetTop;
        if(alturaAnimado-400<scrollTop){
            e.style.opacity=1;
            e.classList.add("mostrarArriba");
        }
    })
}
function mostrarDerecha(){
    let scrollTop=d.documentElement.scrollTop;
    animadoDerecha.forEach(e=>{
        let alturaAnimado=e.offsetTop;
        if(alturaAnimado-400<scrollTop){
            e.style.opacity=1;
            e.classList.add("mostrarDerecha");
        }
    })
}
window.addEventListener("scroll",mostrarElement);
window.addEventListener("scroll",mostrarDerecha);
window.addEventListener("scroll",scrollParalax);