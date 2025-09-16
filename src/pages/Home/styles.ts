import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 5.7rem;

`
export const MainContent = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Titles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const FirstTitle = styled.h1`
    font-size: 48px;
    color: ${props => props.theme['base-title']};
    line-height: 1.6;
    font-family: ${props => props.theme['font-baloo']};
    max-width: 600px;
`

export const SecondTitle = styled.h2`
    font-size: 20px;
    color: ${props => props.theme['base-subtitle']};
    font-weight: 400;

    margin-top: 1rem;
    max-width: 600px;
`

export const ContainerTopic = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 2.5rem;

    margin-top: 4.25rem;
    max-width: 37.4rem;
`

export const Topic = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
`


export const ColumnIconOne = styled.div`
    display: flex;
    flex-direction: column;

    align-items: start;
    justify-content: start;

    gap: 1.25rem;
`

export const ColumnIconTwo = styled.div`
    display: flex;
    flex-direction: column;

    align-items: start;
    justify-content: start;

    gap: 1.25rem;
`


export const FundoIconCoffee = styled.div`
    background: ${props => props.theme['base-purple']};
    max-width: 2rem;
    padding: 0.5rem;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const FundoIconBox = styled.div`
    background: ${props => props.theme['base-text']};
    max-width: 2rem;
    padding: 0.5rem;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const FundoIconCart = styled.div`
    background: ${props => props.theme['yellow-dark']};
    max-width: 2rem;
    padding: 0.5rem;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const FundoIconTime = styled.div`
    background: ${props => props.theme['base-yellow']};
    max-width: 2rem;
    padding: 0.5rem;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
`


export const ImgContainer = styled.img`
    height: 22.5rem;
`

export const TitleProdutos = styled.h2`
    font-size: 32px;
    font-family: ${props => props.theme['font-baloo']};
    color: ${props => props.theme['base-subtitle']};

    text-align: left;

    max-width: 1400px;
    width: 100%;
    padding: 0 1.5rem;
    margin: 0 auto;
    margin-top: 9.25rem;
    margin-bottom: 3.375rem;
`

export const ContainerProduto = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    column-gap: 1.25rem;
    row-gap: 2.5rem;

    padding: 0 1.5rem;
    margin: 0 auto;
    max-width: 1400px;
    width: 100%;
`