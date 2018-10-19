
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1;
var bitacoras=[];
var formulario = document.getElementById('bitacora');

formulario.addEventListener('submit',(evet)=>{
    evet.preventDefault();
    let bitacora={
        cant:cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value,
    }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
});

const crearElemento = (bitacora,tbody) => {
    let tr = document.createElement('tr');
    object.values(bitacora).forEach(item => {
        let td = document.createElement('td');
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
}