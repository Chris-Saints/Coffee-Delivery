import { Trash } from "phosphor-react"
import { ControleQuantidade } from "../../../../components/Produto/components/ControleQuantidade/index"
import { PriceItem, ProductContainer, ProductInfoContainer, RemoveButton } from "./styles"
import { useCarrinho } from "../../../../contexts/useCarrinho"
import type { ProdutoCarrinho } from "../../../../contexts/CarrinhoContext"

interface ItemProductProps {
    produto: ProdutoCarrinho
}

export function ItemProduct({produto}: ItemProductProps) {

    const { dispatch } = useCarrinho()

    function excluirItem() {
        dispatch({type: "REMOVER" , payload: produto})
    }

    function addQuantidade() {
        dispatch({type: "AUMENTAR", payload: produto}) 
    }

    function subQuantidade() {
        dispatch({type: "DIMINUIR", payload: produto})
    }


    
    return (
        <ProductContainer>

        
            <img src={produto.img} alt={produto.nome} />

            <ProductInfoContainer>
        
                <p>{produto.nome}</p>
        
                <section>
        
                    <ControleQuantidade
                        quantidade={produto.quantidade}
                        Aumentar={addQuantidade}
                        Diminuir={subQuantidade}
                    />
        
                    <RemoveButton onClick={excluirItem}>
                        <Trash size={16} color="#8047F8" />
                        REMOVER
                    </RemoveButton>
        
                </section>
        
            </ProductInfoContainer>
        
            <PriceItem><p>R$ 9,90</p></PriceItem>
        </ProductContainer>
    )
}