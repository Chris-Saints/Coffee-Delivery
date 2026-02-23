import styled from "styled-components";

export const ContainerAmount = styled.div`
    display: flex;

    background: ${props => props.theme['base-button']};
    padding: 0.45rem;
    border-radius: 8px;
    max-width: 4.5rem;


    && span{
        padding: 0 0.2rem;
        margin: 0 0.3rem;
    }
`

export const AmountInput = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 0;

    background: transparent;

    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &:focus {
        outline: none
    }
`

export const ButtonAmount = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: 0;
    cursor: pointer;

    svg {
        color: ${props => props.theme['base-purple']}; /* cor inicial */
        transition: color 0.2s;
    }

    &:hover svg {
        color: ${props => props.theme['purple-dark']}; /* cor no hover */
    }

    &:active svg {
        color: ${props => props.theme['purple-dark']}; /* cor no clique */
    }
`

