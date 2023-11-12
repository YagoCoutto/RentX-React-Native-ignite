import React from 'react'
import { CarImages, Container, Header } from './styles'
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
        </Container>
    )
}