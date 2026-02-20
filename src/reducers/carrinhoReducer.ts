import type { ProdutoCarrinho } from "../contexts/CarrinhoContext"

export const initialState = []

export type CarrinhoState = ProdutoCarrinho[]

export type CarrinhoAction = 
    | {type: "ADICIONAR"; payload: ProdutoCarrinho}
    | {type: "REMOVER"; payload: ProdutoCarrinho}
    | {type: "AUMENTAR"; payload: ProdutoCarrinho}
    | {type: "DIMINUIR"; payload: ProdutoCarrinho}

export function carrinhoReducer(state: CarrinhoState, action: CarrinhoAction): CarrinhoState {
    switch(action.type) {
        case "ADICIONAR":{
            const produtoExiste = state.find(item => item.id === action.payload.id)

            if(produtoExiste) {
                return state.map(item => 
                    item.id === action.payload.id
                    ? {... item, quantidade: item.quantidade! + action.payload.quantidade!}
                    : item
                )
            } else {
                return [...state, action.payload]
            }
        }

        case "REMOVER": {
            return state.filter(item => item.id !== action.payload.id)
        }

        case "AUMENTAR": {
            return state.map(item =>
                item.id === action.payload.id
                    ? item.quantidade === 99
                        ? item
                        : {...item, quantidade: item.quantidade + 1}
                    : item
            )
        }

        case "DIMINUIR": {
            return state.map(item =>
                item.id === action.payload.id
                    ? item.quantidade === 1
                        ? item
                        : {...item, quantidade: item.quantidade - 1}
                    : item
            )
        }

        default:
            return state
    
    }
}