import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { AmountInput, ButtonAmount, ContainerAmount } from "./styles";

interface NumberInputProps {
    id?: string;
    min?: number;
    max?: number;
    initialValue?: number;
}


export function BuyAmount({min = 1, max = 99, initialValue = 1}: NumberInputProps){

    const [value, setValue] = useState<number>(initialValue);

    const decrease = () => {
        setValue((prev) => Math.max(prev -1, min))
    };

    const increase = () => {
        setValue((prev) => Math.min(prev +1, max))
    };

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        const num = Number(e.target.value);
        if (!isNaN(num)) {
            if(num < min) setValue(min);
            else if ( num > max) setValue(max);
            else setValue(num);
        }
    };




    return (
        <ContainerAmount>
            <ButtonAmount type="button" onClick={decrease}><Minus size={14} weight="bold" /></ButtonAmount>
            <AmountInput
                type="number"
                value={value}
                onChange={handleChange}
                min={min}
                max={max}
            />
            <ButtonAmount type="button" onClick={increase}><Plus size={14} weight="bold" /></ButtonAmount>
        </ContainerAmount>
    );
}