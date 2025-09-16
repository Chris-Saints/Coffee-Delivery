import { Trash } from "phosphor-react"
import { BuyAmount } from "../../../../components/Produto/components/BuyAmount/index"
import Mocaccino from "../../../../assets/Mocaccino.svg"
import { ProductContainer, ProductInfoContainer, RemoveButton } from "./styles"

export function ItemProduct() {
    return (
        <ProductContainer>
            <img src={Mocaccino} alt="Mocaccino" />
        
            <ProductInfoContainer>
        
                <p>Mocaccino</p>
        
                <section>
        
                    <BuyAmount />
        
                    <RemoveButton>
                        <Trash size={16} color="#8047F8" />
                        REMOVER
                    </RemoveButton>
        
                </section>
        
            </ProductInfoContainer>
        
            <p><strong>R$ 9,90</strong></p>
        
        </ProductContainer>
    )
}