import { ShoppingCart } from "phosphor-react";
import { ButtonBuy, ContainerBuy, ContainerCoffee, ContainerCoffeeDescrition, ContainerLiCoffee, Price, PriceStrong, TypeCoffee } from "./styles";
import { ControleQuantidade } from "./components/ControleQuantidade";
import { useCarrinho } from "../../contexts/useCarrinho";
import { useState } from "react";
import type { InfoBase } from "./Produtos";

interface ProdutosProps{
    produto: InfoBase
}

export function Produto({produto}: ProdutosProps) {

    const { dispatch } = useCarrinho()
    const [quantidade, setQuantidade] = useState(1)

    function adicionarAOCarrinho() {
        dispatch({type: "ADICIONAR", payload: {...produto, quantidade}})
    }

    

    return (
        <ContainerCoffee>

            <ContainerLiCoffee key={produto.id}>
                <img src={produto.img} />

                <TypeCoffee>
                    <span>{produto.especificidade1}</span>

                    {produto.especificidade2 && <span>{produto.especificidade2}</span>}
                    {produto.especificidade3 && <span>{produto.especificidade3}</span>}     
                </TypeCoffee>

                <ContainerCoffeeDescrition>
                    <h2>{produto.nome}</h2>

                    <p>{produto.descricao}</p>  
                </ContainerCoffeeDescrition>

                <ContainerBuy>
                    <Price>R$<PriceStrong>{produto.preco.toFixed(2)}</PriceStrong></Price>

                    <ControleQuantidade 
                        quantidade={quantidade}
                        Aumentar={() => {
                            if(quantidade === 99) return 
                            setQuantidade(prev => prev + 1)
                        }}
                        Diminuir={() => {
                            if(quantidade === 1) return
                            setQuantidade(prev => prev - 1)
                        }}
                    />

                    <ButtonBuy onClick={adicionarAOCarrinho}>
                        <ShoppingCart size={22} weight="fill"/>
                    </ButtonBuy>
                </ContainerBuy>
            </ContainerLiCoffee>
        </ContainerCoffee>
    )
} 