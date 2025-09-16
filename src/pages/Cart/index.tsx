import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money} from "phosphor-react";
import { ButtonBuy, CEPContainer, ContainerInput, FormContainer, InfoContainer, ListAndConfirmed, ListProductContainer, PayButton, PayContainer, PriceContainer, TitleInfoContainer } from "./styles";
import { ItemProduct } from "./components/Item";
import { useNavigate } from "react-router-dom";




export function Cart() {

    const navigate = useNavigate();
    
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
                        <input id="cep" type="text"  placeholder="CEP"></input> 
                        <input id="rua" type="text"  placeholder="Rua"></input> 
                        <input id="numero" type="text"  placeholder="Número"></input> 
                        <input id="complemento" type="text"  placeholder="Complemento"></input> 
                        <input id="bairro" type="text"  placeholder="Bairro"></input> 
                        <input id="cidade" type="text"  placeholder="Cidade"></input> 
                        <input id="uf" type="text"  placeholder="UF"></input> 
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
                        <button type="button"><CreditCard size={16} color="#8047F8" />CARTÃO DE CRÉDITO</button>
                        <button type="button"><Bank size={16} color="#8047F8" /> CARTÃO DE DÉBITO</button>
                        <button type="button"><Money size={16} color="#8047F8" /> DINHEIRO</button>
                    </PayButton>
                </PayContainer>
            </InfoContainer>

            <ListProductContainer>

                <h2>Cafés selecionados</h2>
                
                <ListAndConfirmed>

                    <section>
                        <ItemProduct />
                        <ItemProduct />
                    </section>


                    <PriceContainer>
                        <p>Total de itens</p>
                        <span>R$ 00,00</span>
                    </PriceContainer>

                    <PriceContainer>
                        <p>Entrega</p>
                        <span>R$ 3,50</span>
                    </PriceContainer>

                    <PriceContainer>
                        <p><strong>Total</strong></p>
                        <span><strong>R$ 00,00</strong></span>
                    </PriceContainer>

                    <ButtonBuy onClick={() => navigate("/confirmed")} >CONFIRMAR PEDIDO</ButtonBuy>
                </ListAndConfirmed>
                
            </ListProductContainer>
        </FormContainer>
    )
}