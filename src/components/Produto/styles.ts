import styled from "styled-components"

export const ContainerCoffee = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;

    column-gap: 2rem;
    row-gap: 2.5rem;

`

export const ContainerLiCoffee = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    position: relative;
    box-sizing: border-box;

    border-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;


    padding: 1.25rem 1.5rem;
    height: 19.3rem;


    background: ${props => props.theme['base-card']};

    img {
        position: absolute;
        top: -20px;
    }
    
`

export const TypeCoffee = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    margin-top: 0.75rem;
    margin-bottom: 1rem;
    overflow: visible;

    span {
        background: ${props => props.theme['yellow-light']};
        color: ${props => props.theme['yellow-dark']};

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 10px;
        font-weight: bold;

        padding: 0.25rem 0.5rem;
        border-radius: 10px;
    }

`

export const ContainerCoffeeDescrition = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    max-width: 13.5rem;

    h2 {
        color: ${props => props.theme['base-subtitle']};
        font-size: 20px;
        font-family: ${props => props.theme['font-baloo']};
    }

    p {
        color: ${props => props.theme['base-label']};
        font-size: 14px;
        text-align: center;
    }
`

export const ContainerBuy = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 2rem;
`


export const Price = styled.p`
    color: ${props => props.theme['base-text']};
    font-size: 14px;
`

export const PriceStrong = styled.strong`
    margin-left: 0.3rem;
    margin-right: 1.4rem;

    font-family: ${props => props.theme['font-baloo']};
    font-weight: 900;
    font-size: 24px;
`



export const ButtonBuy = styled.button`
    background: ${props => props.theme['base-purple']};
    color: ${props => props.theme['white']};

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 0.5rem;
    padding: 0.5rem;
    border: 0;
    border-radius: 8px;

    cursor: pointer;

    &:hover {
        background: ${props => props.theme['purple-dark']};
    }
`