import React from 'react'
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
    About
} from './styles'
import BackButton from '../../components/BackButton'
import ImageSlider from '../../components/ImageSlider'

export default function CarDetails() {
    return (
        <Container>
            <Header>
                <BackButton
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
                <About>
                    Experimente a emoção da estrada com o Mitsubishi Lancer Evolution X!
                    Este ícone esportivo combina potência e desempenho em um design
                    aerodinâmico e agressivo. Com um motor turboalimentado, tração
                    integral e um interior projetado para entusiastas, o EVO X oferece
                    uma experiência de condução única. Descubra o equilíbrio perfeito
                    entre estilo e velocidade neste carro lendário.
                </About>
            </Content>
        </Container>
    )
}