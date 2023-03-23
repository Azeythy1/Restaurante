
import React from "react";
import Cliente from'./Cliente';

const Clientes = ({ clientes, handleClienteCLick, handleClienteDelete,comanda}) => {
    return ( 
        <>
         {clientes.map((cliente) => (
             
                 <Cliente
                    key={cliente.id}
                    cliente={cliente}
                    comanda={comanda}
                    handleClienteCLick={handleClienteCLick}
                    handleClienteDelete={handleClienteDelete}
                    
                    />
                 

                

         ))}
        </>
       
     ); 
};
 
export default Clientes;