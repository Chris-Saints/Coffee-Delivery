import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    align-items: start;
    justify-content: space-between;
    box-sizing: border-box;
    gap: 2rem;

    margin: 0 auto;
    padding: 0 1.5rem;

    
    
`

export const InfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.9rem;

    border-radius: 6px;


    h2 {
        font-size: 18px;
        font-family: ${props => props.theme['font-baloo']};
    }
`

export const CEPContainer = styled.div`
    background: ${props => props.theme['base-card']};
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    align-items: start;

    padding: 2.5rem;


`

export const TitleInfoContainer = styled.div`
    display: flex;
    align-items: start;
    gap: 0.5rem;

    margin-bottom: 2rem;

    div {
        display: flex;
        flex-direction: column;

        gap: 0.12rem;
    }

    div h3 {
        font-size: 1rem;
        color: ${props => props.theme['base-subtitle']} ;
    }

    div p {
        font-size: 0.87rem;
        color: ${props => props.theme['base-text']};
    }
`

export const ContainerInput = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: start;

    column-gap: 0.75rem;
    row-gap: 1rem;


    input {
        background: ${props => props.theme['base-input']};
        color: ${props => props.theme['base-label']};

        border: solid 1px ${props => props.theme['base-button']};
        border-radius: 4px;

        text-align: start;

        padding: 0.75rem;
    }

    #cep {
        flex: 0;
    }

    #rua {
        width: 35rem;
    }

    #numero {
        flex: 1;
    }

    #complemento {
        flex: 2;
    }

    #bairro {
        flex: 0;
    }

    #cidade {
        flex: 1;
    }

    #uf {
        flex: 0.3;
        min-width: 0;
    }
`







export const PayContainer = styled.div`
    background: ${props => props.theme['base-card']};
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    align-items: start;
    border-radius: 6px;

    padding: 2.5rem;
`

export const PayButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    button {
        background: ${props => props.theme['base-button']};
        color: ${props => props.theme['base-text']};

        font-size: 12px;

        display: flex;
        align-items: center;
        justify-content: start;
        gap: 0.75rem;
        border: 0;


        padding: 1rem;

        border-radius: 6px;
    }
`





export const ListProductContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.9rem;

    h2 {
        font-size: 18px;
        font-family: ${props => props.theme['font-baloo']};
    }
`

export const ListAndConfirmed = styled.div`
    background: ${props => props.theme['base-card']};
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;

    padding: 2.5rem;

    border-top-right-radius: 44px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 44px;
    border-top-left-radius: 6px;
`

export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 0.75rem;

    p {
        font-size: 14px;

        color: ${props => props.theme['base-text']};
    }

    span {
        color: ${props => props.theme['base-text']};
    }

    strong {
        color: ${props => props.theme['base-subtitle']};
        font-size: 20px;
    }
`

export const ButtonBuy = styled.button`
    background: ${props => props.theme['base-yellow']};
    color: ${props => props.theme['white']};
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.75rem 7.34rem;
    margin-top: 0.75rem;

    border: 0;
    border-radius: 6px;
`