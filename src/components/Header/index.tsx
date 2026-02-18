import { ButtonCartContainer, ButtonLocalContainer, HeaderContent, ImgContainer, NavContainer } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react';
import Logo from "../../assets/Logo.svg"
import { useNavigate } from "react-router-dom";

export function Header() {
    const navigate = useNavigate();
    
    return (

        <HeaderContent>
            

            <ImgContainer onClick={() => navigate("/")}>
                <img src={Logo} alt="Logo do Coffee Delivery" />
            </ImgContainer>


            <NavContainer>

                <ButtonLocalContainer><MapPin size={22} color="#8047F8" weight="fill" />São Paulo, SP</ButtonLocalContainer>

                <ButtonCartContainer onClick={() => navigate("/cart")}> <ShoppingCart size={22} weight="fill" /> </ButtonCartContainer>
                
            </NavContainer>

        </HeaderContent>


    )
}