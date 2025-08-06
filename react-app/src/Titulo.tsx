function App() {
  const nombre = "";
  if (nombre) {
    return <h1>hola {nombre}</h1>;
  }
  return <h1> Hola mundo </h1>; //no es codigo html, es jsx
  //es un lenguaje de plantillas que se parece a html
  //el cual se convertira en codigo react.element
  //jsx es un azucar sintactico para crear elementos de react
  //es una extension de javascript que permite escribir codigo html dentro de javascript
  //es una forma de crear componentes de react de manera mas sencilla
}
export default App;
