// CONTENIDO DE LA PRÁCTICA:
// Vamos a añadir elementos en una lista (con la clase "color-list") con javascript a partir del array aportado en este documento, en la constante "colorList" (ver imagen en el proyecto "ejemplo_lista.png"). 

// Como se puede apreciar en la imagen, cada elemento que esté en una posición par de de la lista tiene que tener la clase "color-item--odd". Esta clase debe añadirse desde javascript, NO haciendo uso del selector css nth-of-type(odd) o similares. NOTA: En este caso vamos a considerar un elemento par pensando en el primer elemento como el 1 no como el 0.

// Cada elemento del listado contendrá:
//    * El nombre del color.
//    * Una muestra en la que se ve el color.
//    * Un botón que modifica el color del siguiente elemento de la lista.
//    * Un botón que modifica el color del fondo de la página.
// La información de cada item la obtendremos de cada objeto del array "colorList"

// La estructura de un item de la lista deberá quedar con de la siguiente forma en el HTML (ejemplo del item para el color "white"):
// <li class="color-item">
// 	<div class="color-name">Color: white</div>
// 	<div class="color-show">Muestra</div>
// 	<button class="color-set">Next item color</button>
// 	<button class="color-set">Page color</button>
// </li>

// En esta práctica hay que añadir 4 funcionalidades:
//    * Al hacer click directamente (no en un item o botón) sobre el fondo de la página (elemento body), debe aparecer un alert en el que aparezca la palabra "body".
//    * Al hacer click directamente sobre uno de los items de la lista (no en uno de sus botones) debe aparecer un "alert" en el que se indique el nombre de su color.
//    * Al hacer click sobre el botón con el texto "Next item color" deberá aplicarse el color de ese item al color de fondo del siguiente item (el último item cambia al primero).
//    * Al hacer click sobre el botón con el texto "Page color" deberá aplicarse el color de ese item al color de fondo de la página (elemento body).

// Buena suerte!
const colorList = [
  {
    colorName: 'white',
    hex: '#ffffff'
  },
  {
    colorName: 'red',
    hex: '#ff0000'
  },
  {
    colorName: 'orange',
    hex: '#ffa500'
  },
  {
    colorName: 'yellow',
    hex: '#ffff00'
  },
  {
    colorName: 'orchid',
    hex: '#da70d6'
  },
  {
    colorName: 'pink',
    hex: '#ffc0cb'
  },
  {
    colorName: 'green',
    hex: '#008000'
  },
  {
    colorName: 'silver',
    hex: '#c0c0c0'
  }
];
//ul
const listParent = document.querySelector("ul");

//guardamos los li dentro del padre
for(let i=0;i<colorList.length;i++){
  let li=document.createElement("li");
  listParent.appendChild(li);
}

//lista de li
let li_list=document.querySelectorAll("li");

//el contenido a cada li 
for(let i=1;i<li_list.length;i++){

  //creamos el div 1 
  let d_child1=document.createElement("div");
  //texto del div
  let t_child1=document.createTextNode("color: "+ colorList[i - 1].colorName);
  d_child1.appendChild(t_child1);
  d_child1.classList.add("color-name");

  //creamos el div 2
  let d_child2=document.createElement("div")
  //texto del div
  let t_child2=document.createTextNode("Muestra");
  d_child2.appendChild(t_child2);
  d_child2.classList.add("color-show")
  

  //creamos el button 1
  let b_child3=document.createElement("button")
  //texto del button
  let t_child3=document.createTextNode("Next item color");
  b_child3.appendChild(t_child3);
  b_child3.classList.add("color-set");
  /*let atr=document.createAttribute("color",colorList[i -1].hex)

  b_child3.classList.add(colorList[i -1].hex);
  console.log(b_child3)*/
 


  //creamos el button 2
  let b_child4=document.createElement("button")
  //texto del button
  let t_child4=document.createTextNode("Page color");
  b_child4.appendChild(t_child4);
  b_child4.classList.add("color-set");

  li_list[i].append(d_child1);
  li_list[i].append(d_child2);
  li_list[i].append(b_child3);
  li_list[i].append(b_child4);
  let b_colorShow = document.querySelectorAll("div.color-show");
  /*b_child3.classList.add(colorList[i -1].hex);*/
  console.log("ey"+b_colorShow)
}
 li_list[1].classList.add("color-item");
 li_list[2].classList.add("color-item--odd");
 li_list[3].classList.add("color-item");
 li_list[4].classList.add("color-item--odd");
 li_list[5].classList.add("color-item");
 li_list[6].classList.add("color-item--odd");
 li_list[7].classList.add("color-item");
 li_list[8].classList.add("color-item--odd");


console.log(li_list[1].classList)

