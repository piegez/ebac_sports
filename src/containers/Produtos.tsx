import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetMercadoriaQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produto } = useGetMercadoriaQuery()

  return (
    <>
      <S.Produtos>
        {produto?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
