import { createContext, useContext, useState, type ReactNode } from "react";

type ProdutoCarrinho = {
    id: number;
    nome: string;
    preco: number;
};

type CarrinhoContextType = {
    carrinho: ProdutoCarrinho[];
    adicionarAoCarrinho: (produto: ProdutoCarrinho) => void;
}

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined)

export function CarrinhoProvider({ children }: {children: ReactNode }) {
    const [carrinho, setCarrinho] = useState<ProdutoCarrinho[]>([]);

    function adicionarAoCarrinho(produto: ProdutoCarrinho) {
        setCarrinho((prev) => [...prev, produto]);
    }

    return(
        <CarrinhoContext.Provider value={{carrinho, adicionarAoCarrinho}}>
            { children }
        </CarrinhoContext.Provider>
    )
}

export function useCarrinho() {
    const context = useContext(CarrinhoContext);
    if(!context) throw new Error("useCarrinho deve ser usado dentro do CarrinhoProvider");
    return context;
}