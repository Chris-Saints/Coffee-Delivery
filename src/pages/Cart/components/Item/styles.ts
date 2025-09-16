import styled from "styled-components"

export const ProductContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;

    gap: 1.25rem;

    padding-bottom: 1.5rem;

    border-bottom: solid 1px ${props => props.theme['base-button']};

    margin-bottom: 1.5rem;


    img {
        height: 64px;
    }

    strong {
        color: ${props => props.theme['base-text']};
        display: flex;
    }
`

export const ProductInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start ;
    justify-content: start;

    gap: 0.5rem;


    p {
        color: ${props => props.theme['base-subtitle']};
    }

    section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        margin-right: 1.87rem;
    }
`

export const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5px;

    background: ${props => props.theme['base-button']};
    color: ${props => props.theme['base-text']};
    font-size: 12px;
    font-weight: 500;

    border-radius: 6px;
    border: 0;

    padding: 0.5rem 0.5rem;
`