import React from 'react'
import {urlFor} from '../lib/client'
import fretemini from '../img/fretemini.png'
import heartmini from '../img/heartmini.png'
import promomini from '../img/promomini.png'

const Produtos = ({produtos}) => {
  return (
    <div className ='produtos'>
      <div className= 'position'>
        <div className = 'produtosBox'>
          <div className ='produtosItem'>
            <img className = 'produtosImg' src={urlFor(produtos[0].imagem?.[0])} alt="" />
            <h3>{produtos[0].nome}</h3>
            <h4>{produtos[0].detalhes}</h4>
            <div className ='multi'>
              <div className = 'multiItem'> <div id='multiImg1' className ='multiImg' alt="" /> <p> Frete Grátis </p></div>
              <div className = 'multiItem'> <div id='multiImg2' className ='multiImg' alt="" /> <p> Pagamento em até 24x  </p></div>
              <div className = 'multiItem'> <div id='multiImg3' className ='multiImg' alt="" /> <p> Garantia de 1 ano </p></div>
            </div>
            <h5>R${produtos[0].preco}</h5>
            <div className = 'comprarButton'>Comprar</div>
          </div>
          <div className ='produtosItem'>
            <img className = 'produtosImg' src={urlFor(produtos[0].imagem?.[0])} alt="" />
            <h3>{produtos[0].nome}</h3>
            <h4>{produtos[0].detalhes}</h4>
            <div className ='multi'>
              <div className = 'multiItem'> <div id='multiImg1' className ='multiImg' alt="" /> <p>  Frete Grátis</p></div>
              <div className = 'multiItem'> <div id='multiImg2' className ='multiImg' alt="" /> <p> Pagamento em até 24x </p></div>
              <div className = 'multiItem'> <div id='multiImg3' className ='multiImg' alt="" /> <p> Garantia de 1 ano</p></div>
            </div>
            <h5>R${produtos[0].preco}</h5>
            <div className = 'comprarButton'>Comprar</div>
          </div>
          <div className ='produtosItem'>
            <img className = 'produtosImg' src={urlFor(produtos[0].imagem?.[0])} alt="" />
            <h3>{produtos[0].nome}</h3>
            <h4>{produtos[0].detalhes}</h4>
            <div className ='multi'>
              <div className = 'multiItem'> <div id='multiImg1' className ='multiImg' alt="" /> <p>  Frete Grátis </p></div>
              <div className = 'multiItem'> <div id='multiImg2' className ='multiImg' alt="" /> <p> Pagamento em até 24x </p></div>
              <div className = 'multiItem'> <div id='multiImg3' className ='multiImg' alt="" /> <p>  Garantia de 1 ano </p></div>
            </div>
            <h5>R${produtos[0].preco}</h5>
            <div className = 'comprarButton'>Comprar</div>
          </div>
          <div className ='produtosItem'>
            <img className = 'produtosImg' src={urlFor(produtos[0].imagem?.[0])} alt="" />
            <h3>{produtos[0].nome}</h3>
            <h4>{produtos[0].detalhes}</h4>
            <div className ='multi'>
              <div className = 'multiItem'> <div id='multiImg1' className ='multiImg' alt="" /> <p>  Frete Grátis</p></div>
              <div className = 'multiItem'> <div id='multiImg2' className ='multiImg' alt="" /> <p> Pagamento em até 24x</p></div>
              <div className = 'multiItem'> <div id='multiImg3' className ='multiImg' alt="" /> <p>  Garantia de 1 ano</p></div>
            </div>
            <h5>R${produtos[0].preco}</h5>
            <div className = 'comprarButton'>Comprar</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Produtos