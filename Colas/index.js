class Colas{
    constructor(){
        this.cola = [];
    }

    encolar(valor){
        this.cola.push(valor);
    }

    desencolar(){
        if(this.cola.length == 0){
            return null;
        }
        return this.cola.shift();
    }

    mostrarFrente(){
        if(this.cola.length == 0){
            return null;
        }
        return this.cola[0];
    }

    mostrarFinal(){
        if(this.cola.length == 0){
            return null;
        }
        return this.cola[this.cola.length-1];
    }
}

/*//Ejercicio Nº01 - Colas
const original = new Colas();
original.encolar('amarillo');
original.encolar('rosa');
original.encolar('rojo');
original.encolar('verde');
original.encolar('azul');
original.encolar('negro');
original.encolar('morado');
original.encolar('blanco');

function alternarCola(colas) {
    console.log(colas.cola);
    const cola1 = new Colas();
    const cola2 = new Colas();
    let cantidad = colas.cola.length;
    let temp;
    for (let i = 0; i < cantidad; i++) {
        if(i % 2 == 0){
            temp = colas.desencolar();
            console.log(temp);
            cola1.encolar(temp);
        }else{
            temp = colas.desencolar();
            cola2.encolar(temp);
        }
    }
    console.log(cola1.cola);
    console.log(cola2.cola);
}
alternarCola(original);*/

//Ejercicio Nº02 - Colas
const colados = new Colas();
colados.encolar({ user: 'User1', ticket: true });
colados.encolar({ user: 'User2', ticket: true });
colados.encolar({ user: 'User3', ticket: false });
colados.encolar({ user: 'User4', ticket: true });
colados.encolar({ user: 'User5', ticket: false });
colados.encolar({ user: 'User6', ticket: false });
colados.encolar({ user: 'User7', ticket: true });
colados.encolar({ user: 'User8', ticket: true });
colados.encolar({ user: 'User9', ticket: true });
colados.encolar({ user: 'User10', ticket: false });
colados.encolar({ user: 'User11', ticket: true });

// console.log(colados.cola);
// const elemento = colados.desencolar();
// console.log(elemento.user, elemento.ticket);

function sacarColados(colas){
    console.log(colas.cola);
    let cantidad = colas.cola.length;
    let i = 0;
    while(i < cantidad){
        const temp = colas.desencolar();
        if(temp.ticket == true){
            colas.encolar(temp);
        }else{
            console.log(temp);
        }
        i++;
    }
    console.log(colas.cola);
}
sacarColados(colados);
