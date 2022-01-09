let cDigi=[];
for (let i = 0; i < 8; i++) {
        cDigi.push(new cDigi_Creatura("Oso",Math.round((Math.random()+0.2)*30),Math.round((Math.random()+0.2)*30)))
    }

function cDigi_Creatura(raza,x,y){
    this.estado=9;
    this.clase=raza;
    this.vida=10;
    this.hambre=0;
    this.x=x;
    this.y=y;
    this.grafico="<digi>A</digi>";
    this.opCi=function(){
        const rango=[[0,1],[0,-1],[1,0],[-1,0]]
        let opciones=[];
        for (let i = 0; i < rango.length; i++) {
            opciones.push([mundo[this.x+rango[i][0]][this.y+rango[i][1]].clase, 
                this.x+rango[i][0],this.y+rango[i][1]]);
        }
        return opciones;
    }
    this.moVe=function(x,y){
        this.x=x;
        this.y=y;
    }
    this.coMe=function(x,y){
        this.x=x;
        this.y=y;
    }
    
    this.elector=function(lista) {
        let comida=[];
        let mover=[];
        for (let i = 0; i < lista.length; i++) {
           if (lista[i][0]=="comida"){
               comida.push(lista[i])
           }
           else if(lista[i][0]=="suelo"){
            mover.push(lista[i])
        }
        }
        if (comida.length>0){
            let a =Math.round(Math.random()*(comida.length-1));
            console.log(comida[a]);
            this.coMe(comida[a][1],comida[a][2])
        }
        else if(mover.length>0){
            let b=Math.round(Math.random()*(mover.length-1));
            console.log(mover[b]);
            this.moVe(mover[b][1],mover[b][2])
        }
        console.log(comida);
        console.log(mover);
    }
}
//comer, moverse, atacar

console.log(cDigi)
