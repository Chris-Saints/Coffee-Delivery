import { Trash } from "phosphor-react"
import { ControleQuantidade } from "../../../../components/Produto/components/ControleQuantidade/index"
import { ProductContainer, ProductInfoContainer, RemoveButton } from "./styles"
import { useCarrinho } from "../../../../contexts/useCarrinho"

export function ItemProduct() {

    const {carrinho, dispatch} = useCarrinho()



    
    return (
        <ProductContainer>
            {carrinho && carrinho.map((produto) => {

                function excluirItem() {
                    dispatch({type: "REMOVER" , payload: produto})
                }

                function addQuantidade() {
                    dispatch({type: "AUMENTAR", payload: produto}) 
                }

                function subQuantidade() {
                    dispatch({type: "DIMINUIR", payload: produto})
                }

                return(
                    <div key={produto.id}>
                
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
                    
                        <p><strong>R$ 9,90</strong></p>
                    </div>
                )
                })
            }
        
        </ProductContainer>
    )
}