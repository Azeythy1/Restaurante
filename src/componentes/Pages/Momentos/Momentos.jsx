import React from "react";

import "../../../componentes/components/index.css";
import { useState } from "react";
import Clientes from "../../components/Clientes";
import AddCliente from'..//..//components/AddCliente'
import {v4 as uuidv4} from'uuid';
import "./sistema.css";
import Header from'../../components/Header';






const Momentos=()=> {

  const [clientes, setClientes] = useState([]);
//  MARCA A TAG SELECIONADA UTILIZAR COMO COMPLETO TRUE OU FALSE
const handleClienteCLick = (clienteId) => {
  const newClientes= clientes.map((cliente) =>{
    if (cliente.id === clienteId) return { ...cliente, fechado: !cliente.fechado}
    return cliente ;
  });
  setClientes(newClientes)
};

// ADIÇÃO DE CLIENTES A LISTA DE COMANDAS
 const handleClienteAdition=(clienteNome)=>{

const newClientes=[...clientes,

{
  nome:clienteNome,
  id:uuidv4(),
  fechado:false,
  mesa:0,
  comanda:[]
},

];
    setClientes(newClientes);
 };

 //  FUÇÃO DELETA COMANDAS obs *adicionar função  fechar comanda*
 const handleClienteDelete= (clienteId) =>{
    const newClientes =clientes.filter(cliente => cliente.id !== clienteId)


  setClientes(newClientes);
 }


     return (
      <div className="Geral">
         <Header className="header"/>
          


        <div className="Container">
          <h1 className="comanda-header" >Abrir Comanda</h1>

          <AddCliente handleClienteAdition={handleClienteAdition} />

          <Clientes clientes={clientes} 
          handleClienteCLick={handleClienteCLick}
          handleClienteDelete={handleClienteDelete}
          
          />


        </div>
          
      </div>

);
  }
  
  export default Momentos;
  