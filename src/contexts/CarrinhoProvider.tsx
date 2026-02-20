import { useEffect, useReducer, useState, type ReactNode } from "react";
import { CarrinhoContext } from "./CarrinhoContext";
import { carrinhoReducer, initialState } from "../reducers/carrinhoReducer";

export type InformacoesDePagamento = {
    cep: string,
    rua: string,
    numero: string,
    complemento?: string,  //Converter para string
    bairro: string,
    cidade: string,
    uf: string,
    pagamento: string
}

export function CarrinhoProvider({ children }: {children: ReactNode }) {


    const [carrinho, dispatch] = useReducer(
        carrinhoReducer,
        initialState,
        (initial) => {
            const dados = localStorage.getItem("carrinho")
            return dados ? JSON.parse(dados) : initial
        }
    );

    const [endereco, setEndereco] = useState<InformacoesDePagamento>({
        cep: "",
        rua: "",
        numero: "",
        complemento: "",  //Converter para string
        bairro: "",
        cidade: "",
        uf: "",
        pagamento: ""
    });




    function confirmarCompra(endereco: InformacoesDePagamento) {
        setEndereco(endereco)
    }

    function handleChangeEndereco(e: React.ChangeEvent<HTMLInputElement | HTMLButtonElement>) {
        const {name, value } = e.target;

        setEndereco(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function selecionarPagamento(pagamento: string) {
        setEndereco(prev => ({
            ...prev,
            pagamento
        }))
        
    }




    const totalCarrinho = carrinho.reduce((acc, item) => {
        return acc + item.preco * item.quantidade
    }, 0)

    useEffect(() => {
        localStorage.setItem("carrinho",JSON.stringify(carrinho))
    },[carrinho])


    return(
        <CarrinhoContext.Provider value={{carrinho, totalCarrinho, dispatch, endereco, confirmarCompra, handleChangeEndereco, selecionarPagamento}}>
            { children }
        </CarrinhoContext.Provider>
    )
}

