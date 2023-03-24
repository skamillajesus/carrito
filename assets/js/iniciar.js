
const calcular = () => {
    var producto=document.querySelector("#producto").value;
    var img=document.querySelector("#img");
    var precio=document.querySelector("#precio");
    
    var costo = 0;
    img.innerHTML=`<img src="./assets/img/${producto}.jpg" width=400>`; 

switch(producto){
    case "camisa": costo= 200;break;
    case "pantalon": costo= 500;break;
    case "balon": costo= 350;break;
    case "gorra": costo= 800;break;
}
precio.innerHTML=`<h3>Precio:  $ ${costo.toFixed(2)} mnx </h3>`;


}
