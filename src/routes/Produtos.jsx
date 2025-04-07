import React from 'react'

const Produtos = ({imagem, titulo, descricao, preco}) => {
  return (
    <article className='produto'>
      <img src={imagem} alt={titulo}/>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <p>{preco}</p>
      <button>Comprar</button>
    </article>
  )
}

export default Produtos
