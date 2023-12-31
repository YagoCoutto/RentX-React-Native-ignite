import React from 'react'
import {
    Container,
    ImageIndexes,
    ImageIndex,
    CarImageWrapper,
    CarImage,

} from './styles'

interface Props {
    imageUrl: string[];
}

export default function ImageSlider(
    { imageUrl }: Props 
) {
    return (
        <Container>
            <ImageIndexes>
                <ImageIndex active={true} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
            </ImageIndexes>

            <CarImageWrapper>
                <CarImage
                    source={{ uri:imageUrl[0] }}
                    resizeMode='contain'
                />
            </CarImageWrapper>
        </Container>
    )
}