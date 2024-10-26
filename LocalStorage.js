//Consumo de API'S - Normal
//Rick & Morty 
const obtener_data = async (idPersonaje)=>{
    const peticion = await fetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`)
    const respuesta = await peticion.json()
    console.log(
        `Id: ${respuesta.id}\nName: ${respuesta.name}\nStatus: ${respuesta.status}\nSpecies: ${respuesta.species}`)
}

obtener_data(2);

//Consumo de API'S - Local-Storage

//Funcion para LocalStorage
const guardarLocalStorage = (data) => {
    if (data !== undefined && data !== null) {
        try {
            localStorage.setItem('personaje', JSON.stringify(data));
        } catch (error) {
            console.error('Error guardando en localStorage:', error);
        }
    } else {
        console.warn('No se puede guardar un valor undefined o null en localStorage');
    }
};

//Funcion para Guardar un personaje


const guardarPersonaje = async (idPersonaje) =>{
    const peticion = await fetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`);
    const respuesta = await peticion.json();
    let personaje = {
        id : respuesta.id,
        name : respuesta.name,
        status : respuesta.status,
        specie : respuesta.species
    }
    console.log("El personaje a guardar es: ");
    console.log(personaje);
    guardarLocalStorage(personaje)
    console.log('Personaje Guardado...');
    
}

guardarPersonaje(2)

//Funcion para obtener un personaje del LocalStorage


const obtenerLocalStorage = () => {
    const personaje = localStorage.getItem('personaje');
    const respuesta = personaje ? JSON.parse(personaje) : "No hay data";
    console.log(respuesta);
};

obtenerLocalStorage();


//Funcion para eliminar el personaje

const eliminarlocalStorage =()=>{
    !localStorage.key("user") ? console.log("No hay clave" ): localStorage.removeItem("user")
}

eliminarlocalStorage()