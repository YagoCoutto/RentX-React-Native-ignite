import React from 'react'
import { Container, Title } from './styles'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

interface Props {
    title: string,
    color?: string,
    onPress: () => void
}

export default function Button(
    { title, color, onPress }: Props
) {
    return (
        <GestureHandlerRootView>
            <Container onPress={onPress} color={color}>
                <Title>{title}</Title>
            </Container>
        </GestureHandlerRootView>
    )
}