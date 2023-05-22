let nombres: string[] = ["Juan", "Pedro", "Luis"];
nombres.push("Ana");

let confirmacion: [string[], boolean] = [['Si', 'no','vamos'], true]

type Persona = {
    nombre: string,
    edad: number
    direccion: direccion
}

type direccion = {
    calle: string,
    numero: number
}

const usuario: Persona = {
    nombre: 'Juan',
    edad: 25,
    direccion: {
        calle: 'Calle 1',
        numero: 123
    }
}

function add(a: number, b: number): number {
    return a + b;
}
    