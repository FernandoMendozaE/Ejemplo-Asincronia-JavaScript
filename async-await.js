let getNombre = async () => {
  return "Fernando";
};

// Verificando que es una promesa que devuelve el async
// let getNombre = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Fernando");
//   });
// };

getNombre()
  .then(nombre => {
    console.log(nombre);
  })
  .catch(err => {
    console.log("Error de ASYNC", err);
  });
