function numeroMonedas(monto) {
    
    let cortes = [5, 2, 1, 0.5, 0.2]
    let lista = []
    let posicion = 0
    while(monto>0)
    {
        if(cortes[posicion]>monto)
        {
            lista.push(cortes[posicion])
            monto-=cortes[posicion]
        }
        else
        {
            posicion+=1
        }
    }
  }
  
  export default numeroMonedas
  