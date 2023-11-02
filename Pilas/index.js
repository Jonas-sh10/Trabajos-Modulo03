class Pilas{
    constructor(){
        this.pila = [];
    }

    agregar(valor){
        this.pila.push(valor);
    }

    eliminar(){
        if(this.pila.length == 0){
            return null;
        }
        return this.pila.pop();
    }

    mostarTope(){
        if(this.pila.length == 0){
            return null;
        }
        return this.pila[this.pila.length-1];
    }
}

/*// Ejercicio Nº01 - Pilas
const pila1 = new Pilas();
pila1.agregar('Manzana');
pila1.agregar('Cebolla');
pila1.agregar('Apio');
pila1.agregar('Naranja');
pila1.agregar('Papaya');
pila1.agregar('Sandía');
pila1.agregar('Melón');


function miPila(pilas, numero){
    let i=0;
    while(i < numero){
        pilas.eliminar();
        i++;
    }

    // for(let ind = 0;ind < pilas.pila.length;ind++){
    //     console.log(pilas.pila[ind]);
    // }
    console.log(pilas.pila);
}
miPila(pila1, 4);*/

/*// Ejercicio Nº02 - Pilas
const pila2 = new Pilas();
pila2.agregar(3);
pila2.agregar(2);
pila2.agregar(3);
pila2.agregar(4);
pila2.agregar(6);
pila2.agregar(8);
pila2.agregar(1);
pila2.agregar(2);
pila2.agregar(5);
pila2.agregar(5);

function reemplazar(pilas, nuevo, viejo){
    let i = pilas.pila.length-1;
    while(pilas.pila[i] != viejo){
        pilas.eliminar();
        i--;
    }
    pilas.pila[pilas.pila.length-1] = nuevo;
    console.log(pilas.pila);
}
reemplazar(pila2,7,2);*/

/*// Ejercicio Nº03 - Pilas
const pila3 = new Pilas();
pila3.agregar('Pueblo Origen');
pila3.agregar('Pueblo 1');
pila3.agregar('Pueblo 2');
pila3.agregar('destino');

function recorrido(pilas){
    console.log(pilas.pila);
    let cantidad = pilas.pila.length;
    let i=0;
    while(i < cantidad){
        console.log(pilas.eliminar());
        i++;
    }
}
recorrido(pila3);*/

//Ejercicio Nº04 - Pilas
const pila4 = new Pilas();
pila4.agregar(3);
pila4.agregar(2);
pila4.agregar(3);
pila4.agregar(4);
pila4.agregar(6);
pila4.agregar(8);
pila4.agregar(1);
pila4.agregar(2);
pila4.agregar(5);
pila4.agregar(5);

function retirarContenedor(pilas){
    console.log(pilas.pila);
    const almacen = new Pilas();
    let cantidad = pilas.pila.length;
    let i = 0;
    while(i < cantidad){
        let tem = pilas.eliminar();
        almacen.agregar(tem);
        i++;
    }
    console.log(almacen.pila);
}
retirarContenedor(pila4);
