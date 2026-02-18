import { MapPin, Money, Timer } from "phosphor-react"
import { InfoContainer, InfoDeliveryContainer, MainContainer, SectionContainer, TitleContainer, TopicContainer } from "./styles"
import Ilustracao from "../../assets/Illustration.svg"
import { Header } from "../../components/Header"

export function Confirmed() {
    
    return(
        <MainContainer>
            <Header />

            <TitleContainer>
                <h2>Uhu! Pedido confirmado</h2>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </TitleContainer>

            <InfoDeliveryContainer>

                <InfoContainer>
                    <TopicContainer>
                        <div id="icon-pin" ><MapPin size={16} color="#fafafa" weight="fill"/></div>

                        <SectionContainer>
                            <span>Entrega em <strong>Rua Cabo João Teruel Fregoni, 124</strong></span>
                            <p>Guarulhos - São Paulo, SP</p>
                        </SectionContainer>
                    </TopicContainer>

                    <TopicContainer>
                        <div id="icon-timer" ><Timer size={16} color="#fafafa" weight="fill"/></div>

                        <SectionContainer>
                            <span>Previsão de entrega</span>
                            <p><strong>20 min - 30 min</strong></p>
                        </SectionContainer>
                    </TopicContainer>

                    <TopicContainer>
                        <div id="icon-money" ><Money size={16} color="#fafafa"  weight="fill" /></div>

                        <SectionContainer>
                            <span>Pagamento na entrega</span>
                            <p><strong>Cartão de Crédito</strong></p>
                        </SectionContainer>
                    </TopicContainer>

                </InfoContainer>
                
                <img src={Ilustracao} />
            </InfoDeliveryContainer>

        </MainContainer>
    )
}