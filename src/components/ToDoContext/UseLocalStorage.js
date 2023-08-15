import React from "react";

function useLocalStorage(itemName,initialValue){
      //actualizar estado y local storage

    //creamos con use state el item y set item para modificarlo(actualizar el estado), valor inicial initial value([])
    const[item,setItem]=React.useState(initialValue);
    //Creamos estado para cuando este cargando el use effect, le damos como valor inicial true porque cuando se abra la pagina estara cargando
    const[loading,setLoading]=React.useState(true);
    //y otro estado para un posible error, le damos como valor inicial false porque en principio no tendriamos error
    const[error,setError]=React.useState(false);

    //utilizado para partes "pesadas" de codigo, para encapsularlas y que no atrasen el resto de codigo, se aplica a lo ultimo
    React.useEffect(()=>{
      setTimeout(()=>{
        try{
        
          const localStorageItem=localStorage.getItem(itemName); 
          //TODOS_V1:{...}
          
          let parsedItem;
          
          if(!localStorageItem){
            //si no hay nada el LS vamos a crear la lista TODOS_V1(stringifiandola) pero dejandola vacia (con el initial value)
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            //en la variable parseditem tambien la dejamos vacia(con el initial value)
            parsedItem=initialValue;
          }else{
            //sino, parseamos lo que hay en LS y lo agregamos a la variable parsed item(parseandola)
            parsedItem=JSON.parse(localStorageItem);
            //cambiamos el estado inicial de item a lo que hay en parsed item
            setItem(parsedItem)
          }
  
          //si ya cargo, modificamos el estado de loading a false
          setLoading(false)
        }catch(error){
          setLoading(false)
          setError(true)
        }
      }, 1000)
    },[])
  
    
    //creamos funcion para actualizar LS y estado
    const saveItem=(newItem)=>{
      localStorage.setItem(itemName,JSON.stringify(newItem));
      setItem(newItem);
    };

    //retornamos item y set item(todos, y set todos) para usarlos en otras funciones
    return{item,saveItem, loading, error};
  }

  export {useLocalStorage}

  // export const defaultToDos = [
//   {text: 'Cortar Cebolla', completed: false},
//   {text: 'Comprar leche', completed: true},
//   {text: 'Llamar oculista', completed: false},
//   {text: 'Hacer tarea de ingles', completed: true},
// ];