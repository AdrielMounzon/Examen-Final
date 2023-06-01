function numeroMonedas(monto) {
    
    let cortes = [5, 2, 1, 0.5, 0.2]
    let lista = []
    let posicion = 0
    while(monto>0)
    {
        let montoParcial = cortes[posicion]
        if(montoParcial<monto)
        {
            lista.push(montoParcial)
            monto-=montoParcial
        }
        else
        {
            posicion+=1
        }
    }
  }
  
  export default numeroMonedas
  