function numeroMonedas(monto) {
    
    let lista = []
    if(monto>5)
    {
        lista.push(5);
        monto-=5;
    }
    lista.push(monto);
    
  }
  
  export default numeroMonedas
  