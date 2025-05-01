export function getImageUrl(person, size = 's') {
    return (
      'https://www.worldhistory.org/img/r/p/500x600/6479.jpg?v=1724943607' +
      person.imageId +
      size +
      '.jpg'
    );
  }
  

  export const sayHello = (nombre, funcion) => {

    const saludo =  `hola ${nombre}`
  
    // funcion(saludo)


    return saludo
  
  }