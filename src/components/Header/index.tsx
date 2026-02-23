import { ButtonCartContainer, ButtonLocalContainer, CountNumber, HeaderContent, ImgContainer, NavContainer } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react';
import Logo from "../../assets/Logo.svg"
import { useNavigate } from "react-router-dom";
import { useCarrinho } from "../../contexts/useCarrinho";

export function Header() {
    const navigate = useNavigate();
    const { carrinho, esvaziarEndereco } = useCarrinho()

    function esvaziarInformacoesToHome() {
        esvaziarEndereco()
        navigate("/")
    }

    function esvaziarInformacoesToCart() {
        esvaziarEndereco()
        navigate("/cart")
    }
    
    return (

        <HeaderContent>
            

            <ImgContainer onClick={esvaziarInformacoesToHome}>
                <img src={Logo} alt="Logo do Coffee Delivery" />
            </ImgContainer>


            <NavContainer>

                <ButtonLocalContainer><MapPin size={22} color="#8047F8" weight="fill" />São Paulo, SP</ButtonLocalContainer>

                <ButtonCartContainer onClick={esvaziarInformacoesToCart}> 
                    <ShoppingCart size={22} weight="fill" /> 
                </ButtonCartContainer>

                {carrinho.length > 0 ? <CountNumber>{carrinho.length}</CountNumber> : <div></div>}
                
            </NavContainer>

        </HeaderContent>


    )
}