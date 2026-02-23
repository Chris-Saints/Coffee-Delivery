import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money} from "phosphor-react";
import { ButtonBuy, CEPContainer, ChoicePayButton, ContainerInput, FormContainer, InfoContainer, ListAndConfirmed, ListProductContainer, PayButton, PayContainer, PriceContainer, ProductList, TitleInfoContainer, WithoutItemContainer } from "./styles";
import { ItemProduct } from "./components/Item";
import { useNavigate } from "react-router-dom";
import { useCarrinho } from "../../contexts/useCarrinho";
import { useState } from "react";

export function Cart() {

    const navigate = useNavigate();
    const {carrinho, totalCarrinho, endereco, handleChangeEndereco, dispatch, selecionarPagamento} = useCarrinho();
    const [formaPagamento, setFormaPagamento] = useState<string>('')

    const semItens = carrinho.length === 0

    const valorTotal = () => {
        const valorEntrega = 3.50
        if(carrinho.length === 0) return 0
        const total = totalCarrinho + valorEntrega
        return total
    }

    function validacao() {
        const enderecoValido =
            endereco.rua.trim() !== "" &&
            endereco.numero.trim() !== "" &&
            endereco.cidade.trim() !== "" &&
            endereco.bairro.trim() !== "" &&
            endereco.cep.trim() !== "" &&
            endereco.uf.trim() !== "" &&
            endereco.pagamento !== "";

        const temProdutos = carrinho.length > 0;

        const resultado = temProdutos && enderecoValido

        return resultado
    }

    function EsvaziarCarrinhoPago() {
        dispatch({type: 'ESVAZIAR', payload: carrinho})
        navigate("/confirmed")
    }

    function formaDePagamento(forma: string) {
        if(formaPagamento === forma) {
            setFormaPagamento('');
            selecionarPagamento('');
        } else {
            setFormaPagamento(forma);
            selecionarPagamento(forma);
        }
    }

    
    return (
        <FormContainer>
            <InfoContainer>
                <h2>Complete seu pedido</h2>

                <CEPContainer>
                    
                    <TitleInfoContainer>
                        <MapPinLine size={22} color="#C47F17" />

                        <div>
                            <h3>Endereço de Entrega</h3>

                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </TitleInfoContainer>
                    

                    <ContainerInput>
                        <input name="cep" onChange={handleChangeEndereco} id="cep" type="text"  placeholder="CEP" required/>
                        <input name="rua" onChange={handleChangeEndereco} id="rua" type="text"  placeholder="Rua" required/> 
                        <input name="numero" onChange={handleChangeEndereco} id="numero" type="text"  placeholder="Número" required/> 
                        <input name="complemento" onChange={handleChangeEndereco} id="complemento" type="text"  placeholder="Complemento" required/> 
                        <input name="bairro" onChange={handleChangeEndereco} id="bairro" type="text"  placeholder="Bairro" required/>
                        <input name="cidade" onChange={handleChangeEndereco} id="cidade" type="text"  placeholder="Cidade" required/>
                        <input name="uf" onChange={handleChangeEndereco} id="uf" type="text"  placeholder="UF" required/>
                    </ContainerInput>
 
                </CEPContainer>

                <PayContainer>
                    <TitleInfoContainer>
                        <CurrencyDollar size={22} color="#8047F8" />
                        
                        <div>
                            <h3>Pagamento</h3>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </TitleInfoContainer>


                    <PayButton>
                        <ChoicePayButton 
                            $active={formaPagamento === "Cartão de Crédito"} 
                            onClick={() => formaDePagamento("Cartão de Crédito")} 
                            type="button"
                        >
                            <CreditCard size={16} color={formaPagamento === "Cartão de Crédito" ? "white" : "#8047F8"} />
                            CARTÃO DE CRÉDITO
                        </ChoicePayButton>

                        <ChoicePayButton 
                            $active={formaPagamento === "Cartão de Débito"} 
                            onClick={() => formaDePagamento("Cartão de Débito")} 
                            type="button"
                        >
                            <Bank size={16} color={formaPagamento === "Cartão de Débito" ? "white" : "#8047F8"} /> 
                            CARTÃO DE DÉBITO
                        </ChoicePayButton>

                        <ChoicePayButton 
                            $active={formaPagamento === "Dinheiro"} 
                            onClick={() => formaDePagamento("Dinheiro")}
                            type="button"
                        >
                            <Money size={16} color={formaPagamento === "Dinheiro" ? "white" : "#8047F8"} />
                            DINHEIRO
                        </ChoicePayButton>

                    </PayButton>
                </PayContainer>
            </InfoContainer>

            <ListProductContainer>

                <h2>Cafés selecionados</h2>
                
                <ListAndConfirmed>

                    <ProductList>
                        {semItens 
                        ? <WithoutItemContainer><p>Sem produtos no carrinho.</p></WithoutItemContainer> 
                        : carrinho.map((produto) => {
                            return <ItemProduct key={produto.id} produto={produto} />}
                            )
                        }
                    </ProductList>


                    <PriceContainer>
                        <p>Total de itens</p>
                        <span>R$ {carrinho.length === 0 ? "0.00" : totalCarrinho.toFixed(2)}</span>
                    </PriceContainer>

                    <PriceContainer>
                        <p>Entrega</p>
                        <span>R$ 3.50</span>
                    </PriceContainer>

                    <PriceContainer>
                        <p><strong>Total</strong></p>
                        <span><strong>R$ {carrinho.length === 0 ? "0.00" : valorTotal().toFixed(2)}</strong></span>
                    </PriceContainer>

                    <ButtonBuy disabled={!validacao()} onClick={EsvaziarCarrinhoPago} >CONFIRMAR PEDIDO</ButtonBuy>
                </ListAndConfirmed>
                
            </ListProductContainer>
        </FormContainer>
    )
}