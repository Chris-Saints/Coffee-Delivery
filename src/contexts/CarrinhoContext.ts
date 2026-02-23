import { createContext, type Dispatch } from "react";
import type { InformacoesDePagamento } from "./CarrinhoProvider";
import type { CarrinhoAction } from "../reducers/carrinhoReducer";

export type ProdutoCarrinho = {
    id: number
    img: string
    especificidade1: string
    especificidade2?: string
    especificidade3?: string
    nome: string
    descricao: string
    preco: number
    quantidade: number
};

export type CarrinhoContextType = {
    carrinho: ProdutoCarrinho[];
    totalCarrinho: number
    dispatch: Dispatch<CarrinhoAction>

    pago: boolean
    taPago: () => void
    
    endereco: InformacoesDePagamento;
    confirmarCompra:(endereco: InformacoesDePagamento) => void
    handleChangeEndereco: (e: React.ChangeEvent<HTMLInputElement | HTMLButtonElement>) => void
    selecionarPagamento: (pagamento: string) => void
    esvaziarEndereco: () => void
}

export const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined)