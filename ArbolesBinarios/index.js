class Nodo{
    constructor(valor){
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

class ArbolBinario{
    constructor(){
        this.raiz = null;
    }

    insertar(valor){
        if(this.raiz == null){
            const nuevoNodo = new Nodo(valor);
            this.raiz = nuevoNodo;
        }else{
            let nodoActual = this.raiz;
            while(true){
                if(valor < nodoActual.valor){
                    if(nodoActual.izquierdo == null){
                        let nuevoNodo = new Nodo(valor);
                        nodoActual.izquierdo = nuevoNodo;
                        return;
                    }else{
                        nodoActual = nodoActual.izquierdo;
                    }
                }else{
                    if(nodoActual.derecho == null){
                        let nuevoNodo = new Nodo(valor);
                        nodoActual.derecho = nuevoNodo;
                        return;
                    }else{
                        nodoActual = nodoActual.derecho;
                    }
                }
            }
        }
    }

    buscar(valor){
        let nodoActual = this.raiz;
        if(nodoActual == null){
            return false;
        }

        while(nodoActual != null){
            if(nodoActual.valor == valor){
                return true;
            }

            if(valor< nodoActual.valor){
                nodoActual = nodoActual.izquierdo;
            }else{
                nodoActual = nodoActual.derecho;
            }
        }
        return false;
    }

    recorrer(){
        console.log("Recorrido Inorden");

        if(this.raiz == null){
            return;
        }

        let nodoActual = this.raiz;
        const pilaAuxiliar = [];
        while(nodoActual != null || pilaAuxiliar.length>0){
            while(nodoActual != null){
                pilaAuxiliar.push(nodoActual);
                nodoActual = nodoActual.izquierdo;
            }
            nodoActual = pilaAuxiliar.pop();
            console.log(`${nodoActual.valor}`);
            nodoActual = nodoActual.derecho;
        }
    }

    obtenerCopia() {
        const arbolCopia = new ArbolBinario();
    
        if (this.raiz == null) {
            return;
        }
    
        const pilaAuxiliar = [this.raiz];
        const copiaRaiz = new Nodo(this.raiz.valor);
        arbolCopia.raiz = copiaRaiz;
        const copiaPila = [copiaRaiz];
        while (pilaAuxiliar.length > 0) {
            const originalNodo = pilaAuxiliar.shift();
            const copiaNodo = copiaPila.shift();
            if (originalNodo.izquierdo) {
                pilaAuxiliar.push(originalNodo.izquierdo);
                copiaNodo.izquierdo = new Nodo(originalNodo.izquierdo.valor);
                copiaPila.push(copiaNodo.izquierdo);
            }
    
            if (originalNodo.derecho) {
                pilaAuxiliar.push(originalNodo.derecho);
                copiaNodo.derecho = new Nodo(originalNodo.derecho.valor);
                copiaPila.push(copiaNodo.derecho);
            }
        }
        return arbolCopia;
    }

    visualizarNivel(nivel) {
        console.log(`Nodos en el nivel ${nivel}:`);
        if (this.raiz == null) {
            return;
        }
    
        const pilaAuxiliar = [{ nodo: this.raiz, nivelActual: 0 }];
        while (pilaAuxiliar.length > 0) {
            const { nodo, nivelActual } = pilaAuxiliar.shift();
            if (nivelActual === nivel) {
                console.log(`${nodo.valor}`);
            }
            if (nodo.izquierdo) {
                pilaAuxiliar.push({ nodo: nodo.izquierdo, nivelActual: nivelActual + 1 });
            }
            if (nodo.derecho) {
                pilaAuxiliar.push({ nodo: nodo.derecho, nivelActual: nivelActual + 1 });
            }
        }
    }    

    obtenerNumeroHojas() {
        if (this.raiz == null) {
            return 0;
        }
    
        let hojas = 0;
        const pilaAuxiliar = [this.raiz];
        while (pilaAuxiliar.length > 0) {
            const nodoActual = pilaAuxiliar.shift();
            if (nodoActual.izquierdo == null && nodoActual.derecho == null){
                hojas++;
            }
            if(nodoActual.izquierdo != null){
                pilaAuxiliar.push(nodoActual.izquierdo);
            }
            if(nodoActual.derecho != null){
                pilaAuxiliar.push(nodoActual.derecho);
            }
        }
        return hojas;
    }
}

const arbol = new ArbolBinario();
arbol.insertar(20);
arbol.insertar(14);
arbol.insertar(44);
arbol.insertar(8);
arbol.insertar(18);
arbol.insertar(22);
arbol.insertar(50);
arbol.insertar(1);
arbol.insertar(16);
arbol.insertar(19);

// 2. Obtener copia del árbol
const copiaArbol = arbol.obtenerCopia();
console.log("Copia del árbol:");
copiaArbol.recorrer();

// 3. Visualizar nodos en el nivel n
const nivel = 2;
arbol.visualizarNivel(nivel);

// 4. Obtener número de hojas
const numHojas = arbol.obtenerNumeroHojas();
console.log(`Número de hojas: ${numHojas}`);