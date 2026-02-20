import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money} from "phosphor-react";
import { ButtonBuy, CEPContainer, ContainerInput, FormContainer, InfoContainer, ListAndConfirmed, ListProductContainer, PayButton, PayContainer, PriceContainer, TitleInfoContainer } from "./styles";
import { ItemProduct } from "./components/Item";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { useCarrinho } from "../../contexts/useCarrinho";

export function Cart() {

    const navigate = useNavigate();
    const {carrinho, totalCarrinho, endereco, handleChangeEndereco, selecionarPagamento} = useCarrinho();

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
    
    return (
        <FormContainer>
            <Header />
            
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
                        <button onClick={() => selecionarPagamento("Cartão de Crédito")} type="button"><CreditCard size={16} color="#8047F8" />CARTÃO DE CRÉDITO</button>
                        <button onClick={() => selecionarPagamento("Cartão de Débito")} type="button"><Bank size={16} color="#8047F8" /> CARTÃO DE DÉBITO</button>
                        <button onClick={() => selecionarPagamento("Dinheiro")} type="button"><Money size={16} color="#8047F8" /> DINHEIRO</button>
                    </PayButton>
                </PayContainer>
            </InfoContainer>

            <ListProductContainer>

                <h2>Cafés selecionados</h2>
                
                <ListAndConfirmed>

                    <section>
                        {semItens ? <div>Sem produtos no carrinho.</div> : <ItemProduct />}
                    </section>


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

                    <ButtonBuy disabled={!validacao()} onClick={() => navigate("/confirmed")} >CONFIRMAR PEDIDO</ButtonBuy>
                </ListAndConfirmed>
                
            </ListProductContainer>
        </FormContainer>
    )
}