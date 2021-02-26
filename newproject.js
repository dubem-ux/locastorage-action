
let body = document.getElementById('body');

// creating  the model input
let attribute = [
    'manufacturer', 'model', 'color', 'processor', 'screensize', 'ramsize', 'chargersize'
];
for( let i = 0; i<attribute.length; i++){
    let modelcreate = document.createElement('h2');
    modelcreate.type = 'text';
    modelcreate.setAttribute = ('id', attribute[i]);
    let m = document.createTextNode(attribute[i]);
    modelcreate.appendChild(m);
    modelproper = document.getElementById(attribute[i]);
    body.appendChild(modelcreate);
    let createmodel = document.createElement('input');
    createmodel.type = 'text';
    createmodel.setAttribute('class',attribute[i]);
   
    body.appendChild(modelcreate);
    body.appendChild(createmodel);
}
//creating the submit button
 let submit = document.createElement('button');
 submit.innerText = 'submit';
 submit.setAttribute('id', 'submit');
 body.appendChild(submit);
 submits = document.getElementById('submit');

 // creating the span tag
  let prints = document.createElement('p');
  let prints1 = document.createElement('span')
  prints1.setAttribute('id','print');
  prints.appendChild(prints1);
  body.appendChild(prints);
  let printgrab = document.getElementById('print');
 
  if(!localStorage.getItem('ind')){
      localStorage.setItem('ind',0);
  }
  let ind = JSON.parse(localStorage.getItem('ind')) ; 
  

let search = document.createElement('input');
search.type = 'search';
search.setAttribute('id','search');
body.appendChild(search);

let button = document.createElement('button');
button.innerText = 'fetch';
button.setAttribute('id', 'fetch');
body.appendChild(button);

//fetches the data and prints it in the html
button.addEventListener('click',(event) => {
    let print = document.getElementById('print');
    let grabbutton = document.querySelector('#search').value;

    for(let i = 0;i < localStorage.length;i++){

      if(grabbutton ===  localStorage.key(i)){;
        print.innerHTML = null
      print.append(localStorage.getItem( localStorage.key(i)));

    }};
} );

let model = document.getElementById('model');
let manufacturer = document.getElementById('manufacturer');
let color = document.getElementById('color');
let processor = document.getElementById('processor');
let screensize = document.getElementById('screensize');
let ramsize = document.getElementById('ramsize');
let chargersize = document.getElementById('chargersize');

//prints the form in the local storage
submits.addEventListener('click', (event)=>{
      
    ind = ind+1; 
    

    let manufacturers = document.querySelector('.manufacturer').value;
    let models = document.querySelector('.model').value;
    let colors = document.querySelector('.color').value;
    let processors = document.querySelector('.processor').value;
    let screensizes = document.querySelector('.screensize').value;
    let ramsizes = document.querySelector('.ramsize').value;
    let chargersizes = document.querySelector('.chargersize').value;


  //constructor function
    function Laptop(manufacturer,model, color,processor,screensize,ramsize,chargersize){
    
    
        this.manufacturer = manufacturers;
        this.model = models;
        this.color = colors;
        this.processor = processors;
        this.screensize = screensizes;
        this.ramsize = ramsizes;
        this.chargersize = chargersizes;   
    };

    
    newlaptop = new Laptop(manufacturers,models,colors,processors,screensizes,ramsizes,chargersizes );
    

    localStorage.setItem(`result${ind}`,JSON.stringify(newlaptop));
    // console.log(`result${ind}`)
    localStorage.setItem(`ind`,ind);
    //printing the form in the span tag
    let printit = JSON.parse(localStorage.getItem(`result${ind}`));
  printgrab.innerHTML = JSON.stringify(printit);

    event.preventDefault();


}

)

