import styled from "styled-components";

export const MainContainer = styled.main`
    width: 70%;
    margin: 2rem auto 0;
    padding: 0 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`

export const TitleContainer = styled.div`
    display: flex; 
    flex-direction: column;

    align-items: start;

    line-height: 1.6;

    h2 {
        color: ${props => props.theme['yellow-dark']};
        font-size: 32px;
        font-family: ${props => props.theme['font-baloo']};;
    }

    p {
        font-size: 20px;
        color: ${props => props.theme['base-subtitle']};
    }
`

export const InfoDeliveryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;


    width: 100%;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    gap: 2rem;

    padding: 2.5rem;

    border: solid 1px transparent;

    border-top-right-radius: 44px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 44px;
    border-top-left-radius: 6px;

    background: 
        linear-gradient(white,white) padding-box,
        linear-gradient(to right, ${props => props.theme['base-yellow']}, ${props => props.theme['base-purple']}) border-box;
`

export const TopicContainer = styled.div`
    display: flex;
    align-items: center;

    gap: 0.75rem;

    #icon-pin {
        background: ${props => props.theme['base-purple']};

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.5rem;

        border-radius: 50%;
    }

    #icon-timer {
        background: ${props => props.theme['base-yellow']};

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.5rem;

        border-radius: 50%;
    }

    #icon-money {
        background: ${props => props.theme['yellow-dark']};

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0.5rem;

        border-radius: 50%;
    }
`

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: start;

    color: ${props => props.theme['base-text']};

    strong {

    }
`