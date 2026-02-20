import { MapPin, Money, Timer } from "phosphor-react"
import { InfoContainer, InfoDeliveryContainer, MainContainer, SectionContainer, TitleContainer, TopicContainer } from "./styles"
import Ilustracao from "../../assets/Illustration.svg"
import { Header } from "../../components/Header"
import { useCarrinho } from "../../contexts/useCarrinho"

export function Confirmed() {

    const {endereco} = useCarrinho()

    if(!endereco) {
        return (<div>Erro ao terminar o pagamento</div>)
    }

    const bairro = endereco.bairro
    const cidade = endereco.cidade
    const uf = endereco.uf
    const rua = endereco.rua
    const numero = endereco.numero
    const pagamento = endereco.pagamento
    const complemento = endereco.complemento
    
    return(
        <MainContainer>
            <Header />

            <TitleContainer>
                <h2>Uhul! Pedido confirmado</h2>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </TitleContainer>

            <InfoDeliveryContainer>

                <InfoContainer>
                    <TopicContainer>
                        <div id="icon-pin" ><MapPin size={16} color="#fafafa" weight="fill"/></div>

                        <SectionContainer>
                            <span>Entrega em <strong>{rua}, {numero} {complemento ? `- ${complemento}` : ''}</strong></span>
                            <p>{bairro} - {cidade}, {uf}</p>
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
                            <p><strong>{pagamento}</strong></p>
                        </SectionContainer>
                    </TopicContainer>

                </InfoContainer>
                
                <img src={Ilustracao} />
            </InfoDeliveryContainer>

        </MainContainer>
    )
}