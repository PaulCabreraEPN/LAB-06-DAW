//Modulos
inicioSesion = (email,contrasenia)=>{
    if(!email && !contrasenia) return console.log("No estas registrado")
    console.log(`Bienvendio ${email}`)
}

const articulos_comprados = 100

module.exports = {
    inicioSesion,
    articulos_comprados
}