import ExpressoTradicional from "../../assets/Expresso Tradicional.svg";
import ExpressoAmericano from "../../assets/Expresso Americano.svg";
import ExpressoCremoso from "../../assets/Expresso Cremoso.svg";
import ExpressoGelado from "../../assets/Expresso Gelado.svg";
import CafeComLeite from "../../assets/Cafe com Leite.svg";
import Latte from "../../assets/Latte.svg";
import Capuccino from "../../assets/Capuccino.svg";
import Macchiato from "../../assets/Macchiato.svg";
import Mocaccino from "../../assets/Mocaccino.svg";
import ChocolateQuente from "../../assets/Chocolate Quente.svg";
import Cubano from "../../assets/Cubano.svg";
import Havaiano from "../../assets/Havaiano.svg";
import Arabe from "../../assets/Arabe.svg";
import Irlandes from "../../assets/Irlandes.svg";





export interface InfoBase {
    id: number
    img: string
    especificidade1: string
    especificidade2?: string
    especificidade3?: string
    nome: string
    descricao: string
    preco: number
}

export const produtos: InfoBase[] = [
    {
        id: 1,
        img: ExpressoTradicional ,
        especificidade1: "TRADICIONAL",
        nome: "Expresso Tradicional",
        descricao: "O tradicional café feito com água quente e grãos moídos",
        preco: 9.90,

    },

    {
        id: 2,
        img: ExpressoAmericano,
        especificidade1: "TRADICIONAL",
        nome: "Expresso Americano",
        descricao: "Expresso diluído, menos intenso que o tradicional",
        preco: 9.90,

    },

    {
        id: 3,
        img: ExpressoCremoso,
        especificidade1: "TRADICIONAL",
        nome: "Expresso Cremoso",
        descricao: "Café expresso tradicional com espuma cremosa",
        preco: 9.90,

    },

    {
        id: 4,
        img: ExpressoGelado,
        especificidade1: "TRADICIONAL",
        especificidade2: "GELADO",
        nome: "Expresso Gelado",
        descricao: "Bebida preparada com café expresso e cubos de gelo",
        preco: 9.90,

    },

    {
        id: 5,
        img: CafeComLeite,
        especificidade1: "TRADICIONAL",
        especificidade2: "COM LEITE",
        nome: "Café com Leite",
        descricao: "Meio a meio de expresso tradicional com leite vaporizado",
        preco: 9.90,

    },

    {
        id: 6,
        img: Latte,
        especificidade1: "TRADICIONAL",
        especificidade2: "COM LEITE",
        nome: "Latte",
        descricao: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        preco: 9.90,

    },

    {
        id: 7,
        img: Capuccino,
        especificidade1: "TRADICIONAL",
        especificidade2: "COM LEITE",
        nome: "Capuccino",
        descricao: "Bebida com canela feita de doses iguais de café, leite e espuma",
        preco: 9.90,

    },

    {
        id: 8,
        img: Macchiato,
        especificidade1: "TRADICIONAL",
        especificidade2: "COM LEITE",
        nome: "Macchiato",
        descricao: "Café expresso misturado com um pouco de leite quente e espuma",
        preco: 9.90,

    },

    {
        id: 9,
        img: Mocaccino,
        especificidade1: "TRADICIONAL",
        especificidade2: "COM LEITE",
        nome: "Mocaccino",
        descricao: "Café expresso com calda de chocolate, pouco leite e espuma",
        preco: 9.90,

    },

    {
        id: 10,
        img: ChocolateQuente,
        especificidade1: "ESPECIAL",
        especificidade2: "COM LEITE",
        nome: "Chocolate Quente",
        descricao: "Bebida feita com chocolate dissolvido no leite quente e café",
        preco: 9.90,

    },

    {
        id: 11,
        img: Cubano,
        especificidade1: "ESPECIAL",
        especificidade2: "ALCOÓLICO",
        especificidade3: "GELADO",
        nome: "Cubano",
        descricao: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        preco: 9.90,

    },

    {
        id: 12,
        img: Havaiano ,
        especificidade1: "ESPECIAL",
        nome: "Havaiano",
        descricao: "Bebida adocicada preparada com café e leite de coco",
        preco: 9.90,

    },

    {
        id: 13,
        img: Arabe,
        especificidade1: "ESPECIAL",
        nome: "Árabe",
        descricao: "Bebida preparada com grãos de café árabe e especiarias",
        preco: 9.90,

    },

    {
        id: 14,
        img: Irlandes,
        especificidade1: "ESPECIAL",
        especificidade2: "ALCOÓLICO",
        nome: "Irlandês",
        descricao: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        preco: 9.90,

    },
]