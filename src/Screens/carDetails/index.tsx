import React from 'react';
import {
    CarImages,
    Container,
    Header,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Acessories,
    Footer
} from './styles';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';
import Acessory from '../../components/Acessory';
import SpeedSVG from '../../assets/Speed.svg';
import UpSVG from '../../assets/Up.svg';
import GasolineSVG from '../../assets/Gasolina.svg';
import PeopleSVG from '../../assets/Pessoas.svg';
import ChangeSVG from '../../assets/Câmbio.svg';
import ForceSVG from '../../assets/Força.svg';
import Button from '../../components/Button';

export default function CarDetails() {
    return (
        <Container>
            <Header>
                <BackButton
                    color='#47474D'
                    onPress={() => { }}
                />
            </Header>
            <CarImages>
                <ImageSlider
                    imageUrl={['https://static.wikia.nocookie.net/forzamotorsport/images/0/0f/Mot_mit_lancer_08.png/revision/latest?cb=20190531190611']}
                />
            </CarImages>
            <Content>
                <Details>
                    <Description>
                        <Brand>
                            mitsubishi
                        </Brand>
                        <Name>
                            Lancer EVO X
                        </Name>
                    </Description>
                    <Rent>
                        <Period>
                            ao dia
                        </Period>
                        <Price>
                            R$ 340
                        </Price>
                    </Rent>
                </Details>
                <Acessories>
                    <Acessory
                        icon={SpeedSVG}
                        name='380km/h'
                    />
                    <Acessory
                        icon={UpSVG}
                        name='3.2s'
                    />
                    <Acessory
                        icon={ForceSVG}
                        name='800 HP'
                    />
                    <Acessory
                        icon={GasolineSVG}
                        name='Gasolina'
                    />
                    <Acessory
                        icon={ChangeSVG}
                        name='Auto'
                    />
                    <Acessory
                        icon={PeopleSVG}
                        name='2 Pessoas'
                    />
                </Acessories>
                <About>
                    Este ícone esportivo combina potência e desempenho em um design
                    aerodinâmico e agressivo. Com um motor turboalimentado, tração
                    integral e um interior projetado para entusiastas, o EVO X oferece
                    uma experiência de condução única. Descubra o equilíbrio perfeito
                    entre estilo e velocidade neste carro lendário.
                </About>
            </Content>
            <Footer>
                <Button title='Escolher período do aluguel'/>
            </Footer>
        </Container>
    )
}