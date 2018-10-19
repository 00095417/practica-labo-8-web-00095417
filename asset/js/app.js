
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
/*variables a utilizar para el manejo de la informacion del formulario*/ 
var cont = 1;
var bitacoras=[];
var formulario = document.getElementById('bitacora');
/*escucha el evento del boton para obtener la información del formulario antes de enviarlos*/
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
/*creando una tabla que se mostrara en la pagina web*/
const crearElemento = (bitacora,tbody) => {
    let tr = document.createElement('tr');
    Object.values(bitacora).forEach(item => {
        let td = document.createElement('td');
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.appendChild(td);
        tr.setAttribute('class','click');
    });
    tbody.appendChild(tr);
}
/*eliminando los elementos de la tabla que se muestra en la pagina web*/
const eliminar = (tbody) =>{
    while (tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
}

const agregar = () =>{
    var eventtr = document.querySelectorAll(".click");
    eventtr.forEach((item,index)=>{
        item.addEventListener("click", () =>{
            document.querySelector("#fecha").value = item.childNodes[0].textContent;
            document.querySelector("#descp").value = item.childNodes[1].textContent;
            document.querySelector("#cant").value = item.childNodes[2].textContent;
        });
    });
}

const mostrar = () =>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0){
        eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item =>{
        crearElemento(item,document.querySelector(".tabla-btc tbody"));
    });
    agregar();
}
