import React from "react";

function useLocalStorage(itemName,initialValue){


  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));
  const{item, loading, error} = state;



  //ACTION CREATORS
  const onError = (error)=> {dispatch({type: 'ERROR', payload:error})};
  const onLoading = ()=> {dispatch({type: 'LOADING'})}
  const onSuccess = (parsedItem) => {dispatch({type: 'SUCCESS', payload:parsedItem})}
  const onSave = (newItem) => {dispatch({type: 'SAVE', payload:newItem})}



    //utilizado para partes "pesadas" de codigo, para encapsularlas y que no atrasen el resto de codigo, se inicializa a lo ultimo
    React.useEffect(()=>{
      setTimeout(()=>{

        try{
          
          //TODOS_V1:{...}
          const localStorageItem=localStorage.getItem(itemName); 
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
            // setItem(parsedItem)
          }
          //cambiamos el estado inicial de item a lo que hay en parsed item. si ya cargo, modificamos el estado de loading a false
          onSuccess(parsedItem);
        }catch(error){
          onLoading();
          onError(error);
        }
      }, 1000)
    },[])
  
    
    //creamos funcion para actualizar LS y estado
    const saveItem=(newItem)=>{
      localStorage.setItem(itemName,JSON.stringify(newItem));
      onSave(newItem);
    };

    //retornamos item y set item(todos, y set todos) para usarlos en otras funciones
    return{item,saveItem, loading, error};
  }

const initialState = ({initialValue}) =>({
  item: initialValue,
  loading: true, 
  error: false,
});

const reducerObject = (state, payload) =>({
  'ERROR': {
    ...state,
    error: true,
  },
  'LOADING': {
    ...state,
    loading: false,
  },
  'SUCCESS': {
    ...state,
    loading: false,
    error: false,
    item: payload,
  },
  'SAVE': {
    ...state,
    item: payload,
  }
})

const reducer = (state, action) =>{
  return reducerObject(state, action.payload)[action.type] || state;
}

export {useLocalStorage}