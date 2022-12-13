const state = {

    data: {
        list: []
    },

    listeners: [],

    getState() {
        return this.data;
    },

    setState(newState: Object) {
        console.log("Recibí datos ==> ", newState);
        this.data = newState;

        for(const cb of this.listeners) {                   // Recorre las funciones de listeners y las ejecuta.
            cb();                           
        }
    },

    subscribe(callback: (any: any) => any) {                // SUBSCRIPCION AL STATE PARA ACTUALIZAR LOS COMPONENTES ASOCIADOS.
                                                            // Recibe una función llamada "callback" por convención.
        this.listeners.push(callback);                      // Genero un array de funciones.
        console.log(`NEW CALLBACK -->| ${callback} |<---`);
    },

    addItem(item: any) {
        console.log(`ITEM ADDED -->| ${item} |<--`);

        const currentState = this.getState();
        currentState.list.push(item);
        this.setState(currentState);
    }
};

export { state };