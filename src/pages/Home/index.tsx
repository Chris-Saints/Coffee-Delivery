import { ColumnIconOne, ColumnIconTwo, ContainerProduto, ContainerTopic, FirstTitle, FundoIconBox, FundoIconCart, FundoIconCoffee, FundoIconTime, MainContainer, MainContent, SecondTitle, TitleProdutos, Titles, Topic } from "./styles";
import Banner from "../../assets/Banner.svg"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Produto } from "../../components/Produto";
import { produtos } from "../../components/Produto/Produtos";

export function Home() {



 
    return (
        <MainContainer>            
            <MainContent>

                <Titles>

                    <FirstTitle>Encontre o café perfeito para qualquer hora do dia</FirstTitle>

                    <SecondTitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SecondTitle>

                    <ContainerTopic>

                        <ColumnIconOne>

                            <Topic>
                                <FundoIconCart>
                                    <ShoppingCart size={16} weight="fill"  color="#FAFAFA"/>
                                </FundoIconCart>
                                Compra simples e segura
                            </Topic>

                            <Topic>
                                <FundoIconTime>
                                    <Timer size={16} weight="fill"  color="#FAFAFA" />
                                </FundoIconTime>
                                Entrega rápida e rastreada
                            </Topic>

                        </ColumnIconOne>
                        
                        <ColumnIconTwo>

                            <Topic>
                                <FundoIconBox>
                                    <Package size={16} weight="fill"  color="#FAFAFA"/>
                                </FundoIconBox>
                                Embalagem mantém o café fresquinho
                            </Topic>

                            <Topic>
                                <FundoIconCoffee>
                                    <Coffee size={16} weight="fill"  color="#FAFAFA"/>
                                </FundoIconCoffee>
                                O café chega fresquinho até você
                            </Topic>

                        </ColumnIconTwo>

                    </ContainerTopic>

                </Titles>

                <img width={550} src= {Banner} />

            </MainContent>

            <TitleProdutos>Nossos cafés</TitleProdutos>

            <ContainerProduto>
                {produtos.map(produto => (
                    <Produto key={produto.id} produto={produto} />
                ))}
            </ContainerProduto>


        

        </MainContainer> 
    )
}