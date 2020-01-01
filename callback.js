/**
 * Ejemplo básico
 */
// setTimeout(() => {
//   console.log("Hola Mundo");
// }, 3000);

/**
 * Contrucción de Callback
 */
let getUsuarioById = (id, callback) => {
  let usuario = {
    nombre: "Fernando",
    id
  };
  if (id === 20) {
    callback(`El usuario con id ${id}, no existe en la BD`); // error se envia a la variable err
  } else {
    callback(null, usuario); // ejecución correcta
  }
};

getUsuarioById(10, (err, usuario) => {
  if (err) {
    // cuando existe un error en la función asincrona
    return console.log(err);
  } else {
  }
  console.log("Usuario de base de datos", usuario);
});
