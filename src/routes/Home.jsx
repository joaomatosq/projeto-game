import React from 'react'
import Produtos from './Produtos'

const Home = (Dados) => {
  return (
    <div>
      {Dados.map((produtos) => {

        <Produtos
          key = {produto.id}
          imagem = {produto.imagem}
          titulo = {produto.titulo}
          descricao = {produto.descricao}
          preco = {produto.prco}


        />

      })}
    </div>
  )
}

export default Home
