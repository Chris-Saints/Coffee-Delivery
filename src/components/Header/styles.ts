import styled from "styled-components";

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 0 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ImgContainer = styled.button`
    background: none;
    padding: none;
    border: 0;
    cursor: pointer;
`

export const ButtonLocalContainer = styled.button`
    border: 0;
    border-radius: 8px;
    background: ${props => props.theme['purple-light']};
    color: ${ props => props.theme['purple-dark']};

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    cursor: pointer;

    font-size: 18px;

`

export const ButtonCartContainer = styled.button`
    border: 0;
    border-radius: 8px;
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    cursor: pointer;

    font-size: 18px;
`

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: 0.5rem;    
`