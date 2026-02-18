import { Trash } from "phosphor-react"
import { ControleQuantidade } from "../../../../components/Produto/components/ControleQuantidade/index"
import { ProductContainer, ProductInfoContainer, RemoveButton } from "./styles"
import { useCarrinho } from "../../../../contexts/useCarrinho"

export function ItemProduct() {

    const {carrinho, addQuantidade, subQuantidade} = useCarrinho()

    
    return (
        <ProductContainer>
            {carrinho && carrinho.map((produto) => {
                    return(
                        <div key={produto.id}>
                    
                            <img src={produto.img} alt={produto.nome} />
            
                            <ProductInfoContainer>
                        
                                <p>{produto.nome}</p>
                        
                                <section>
                        
                                    <ControleQuantidade
                                        quantidade={produto.quantidade!}
                                        Aumentar={() => addQuantidade(produto.id)}
                                        Diminuir={() => subQuantidade(produto.id)}
                                    />
                        
                                    <RemoveButton>
                                        <Trash size={16} color="#8047F8" />
                                        REMOVER
                                    </RemoveButton>
                        
                                </section>
                        
                            </ProductInfoContainer>
                        
                            <p><strong>R$ 9,90</strong></p>
                        </div>
                    )
                })
            }
        
        </ProductContainer>
    )
}