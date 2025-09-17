import { ShoppingCart } from "phosphor-react";
import { ButtonBuy, ContainerBuy, ContainerCoffee, ContainerCoffeeDescrition, ContainerLiCoffee, Price, PriceStrong, TypeCoffee } from "./styles";
import { BuyAmount } from "./components/BuyAmount";
import { produtos } from "./Produtos";
// import { useState } from "react";

    // type ProdutoCarrinho = {
    //     id: number;
    //     img: string
    //     nome: string;
    //     quantidade: number;
    //     total: number;
    // };

export function Produto() {

    // const quantidade = document.getElementById("buyAmount") as HTMLInputElement;




    // const [carrinho, setCarrinho] = useState<ProdutoCarrinho[]>([])

    // function adicionarAoCarrinho(item: ProdutoCarrinho) {
    //     setCarrinho(() => [...carrinho, item])
    // }

    // function handleAdd(id:number) {
    //     const itemNaLista = produtos.find((p) => p.id === id);
    //     if(itemNaLista) {
    //         adicionarAoCarrinho({
    //             id: itemNaLista.id,
    //             img: itemNaLista.img,
    //             nome: itemNaLista.nome,
    //             quantidade: Number(quantidade.value),
    //             total: Number(quantidade.value) * 9.90,
    //         })
    //     }
    // }



    return (
        <ContainerCoffee>
            {produtos.map(produto => (
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

                        <label htmlFor="buyAmount"></label>
                        <BuyAmount
                            id="buyAmount"
                            min={1}
                            max={99}
                            initialValue={1}
                        />

                        <ButtonBuy  >
                            <ShoppingCart size={22} weight="fill"/>
                        </ButtonBuy>
                    </ContainerBuy>
                </ContainerLiCoffee>

            ))}

        </ContainerCoffee>
    )
} 