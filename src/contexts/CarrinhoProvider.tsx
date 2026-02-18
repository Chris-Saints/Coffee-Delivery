import { useState, type ReactNode } from "react";
import { CarrinhoContext, type ProdutoCarrinho } from "./CarrinhoContext";



export function CarrinhoProvider({ children }: {children: ReactNode }) {


    const [carrinho, setCarrinho] = useState<ProdutoCarrinho[]>([]);

    function adicionarAoCarrinho(produto: ProdutoCarrinho) {
        setCarrinho((prev) => {
            const produtoExiste = prev.find(item => item.id === produto.id);

            //validação se há produto já no carrinho. PAra aumentar apenas a quantidadew

            if(produtoExiste) {
                return prev.map(item =>
                    item.id === produto.id
                    ? {...item, quantidade: item.quantidade! + produto.quantidade!}
                    : item
                )
            }
            return [...prev, produto]
        });
    }

    function addQuantidade(id: number) {
        setCarrinho(prev => 
            prev.map(produto => 
                produto.id === id
                ? produto.quantidade! === 5
                ? produto
                : {...produto, quantidade: produto.quantidade! + 1}
                : produto
            )
        )
    }

    function subQuantidade(id: number) {
        setCarrinho(prev => 
            prev.map(produto => 
                produto.id === id
                ? produto.quantidade! === 1
                ? produto
                : {...produto, quantidade: produto.quantidade! - 1}
                : produto
            )
        )
    }


    return(
        <CarrinhoContext.Provider value={{carrinho, adicionarAoCarrinho, addQuantidade, subQuantidade}}>
            { children }
        </CarrinhoContext.Provider>
    )
}

