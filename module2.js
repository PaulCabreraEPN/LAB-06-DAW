module.exports.login = (num_seccion)=>{
    switch (num_seccion) {
        case 1:
            console.log("Hogar");
            break;
        case 2:
            console.log("Ropa");
            break;
        case 3:
            console.log("Comida");
            break;
        case 4:
            console.log("Juguetes");
            break;
        case 5:
            console.log("Tecnologia");
            break;
        default:
            console.log("Seccion Inexistente");
            
            break;
    }
}

module.exports.status = "Disponible"