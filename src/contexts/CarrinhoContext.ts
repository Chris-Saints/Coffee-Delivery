import { createContext } from "react";

export type ProdutoCarrinho = {
    id: number
    img: string
    especificidade1: string
    especificidade2?: string
    especificidade3?: string
    nome: string
    descricao: string
    preco: number
    quantidade?: number
};

export type CarrinhoContextType = {
    carrinho: ProdutoCarrinho[];
    adicionarAoCarrinho: (produto: ProdutoCarrinho) => void;
    addQuantidade:(id: number) => void;
    subQuantidade:(id: number) => void;
}

export const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined)