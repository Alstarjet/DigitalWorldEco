//crearMundo genera una array bidimencional que servira como mundo
function crearMundo(x,y) {
    let z = new Array(x);
    for (let i = 0; i < x; i++) {
        z[i] = new Array(y);
    }
    return z;
 }
 //tAleatorio sera usado por generadorM para crear un terreno con forma
 //dinamica, esto es provicional a un generador mas complejo.
function tAleatorio(x,y){
     let selector=Math.random();
     if(selector<0.25){
        return new terreno_elemento("roca",9,"<roca>X</roca>",x,y);
     }
     else if(selector>=0.25&&selector<0.4){
        return new terreno_elemento("comida",5,"<comida>X</comida>",x,y);
     }
     else{
         return new terreno_elemento("suelo",0,"<piso>X</piso>",x,y);
     }
 }
function terreno_elemento(clase, estado,grafico,x,y){
    this.clase=clase;
    this.estado=estado;
    this.grafico=grafico;
    this.x=x;
    this.y=y;
} 
 //gneradorM llena el array bidimencionar con elementos dados por tAleatorio
function generadorM(wd){
    for (let i = 0; i < wd.length; i++) {
        for (let e = 0; e < wd[1].length; e++) {
           wd[i][e]=tAleatorio(i,e);
        }
    }
 }
function graficadorM(wd){
    let liezo="";
    for (let i = 0; i < wd.length; i++) {
        for (let e = 0; e < wd[1].length; e++) {
           liezo += wd[i][e].grafico;
        }
        liezo += "<br>"
    }
    return liezo;
 }
 function generadorG(wd){
    for (let i = 0; i < wd.length; i++) {
        for (let e = 0; e < wd[1].length; e++) {
           wd[i][e]=mundo[i][e];
        }
    }
 }
let mundo=crearMundo(50,50);
generadorM(mundo);
let mundoV2=crearMundo(50,50);
generadorG(mundoV2);
for (let i = 0; i < cDigi.length; i++) {
    mundoV2[cDigi[i].x][cDigi[i].y]=cDigi[i];
}
let hiro=document.getElementById("demo").innerHTML=graficadorM(mundoV2);
function cliclo () {
    generadorG(mundoV2);
    for (let i = 0; i < cDigi.length; i++) {
        cDigi[i].elector(cDigi[i].opCi())
        mundoV2[cDigi[i].x][cDigi[i].y]=cDigi[i];
    }
    hiro=document.getElementById("demo").innerHTML=graficadorM(mundoV2);
    console.log("hola tiempo")
}
setInterval(cliclo,1000);