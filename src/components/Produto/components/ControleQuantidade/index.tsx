import { Minus, Plus } from "phosphor-react";

import { ButtonAmount, ContainerAmount } from "./styles";

interface ControleQuantidadeProps {
    quantidade: number;
    Aumentar: () => void;
    Diminuir: () => void;
}

export function ControleQuantidade({quantidade, Aumentar, Diminuir}: ControleQuantidadeProps){

    return (
        <ContainerAmount>
            <ButtonAmount type="button" onClick={Diminuir} ><Minus size={14} weight="bold" /></ButtonAmount>
            <span>{quantidade}</span>
            <ButtonAmount type="button" onClick={Aumentar}><Plus size={14} weight="bold" /></ButtonAmount>
        </ContainerAmount>
    );
}