
import React from "react";
import Cliente from'./Cliente';

const Clientes = ({ clientes, handleClienteCLick, handleClienteDelete}) => {
    return ( 
        <>
         {clientes.map((cliente) => (
             
                 <Cliente
                 key={cliente.id}
                    cliente={cliente}
                    handleClienteCLick={handleClienteCLick}
                    handleClienteDelete={handleClienteDelete}
                    
                    />
                 

                

         ))}
        </>
       
     ); 
};
 
export default Clientes;