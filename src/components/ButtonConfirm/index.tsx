import React from 'react'
import { Container, Text } from './styles'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

interface Props {
    onPress: () => void
}

export default function ButtonConfirm({onPress}:Props) {
    return (
        <GestureHandlerRootView>
            <Container onPress={onPress}>
                <Text>OK</Text>
            </Container>
        </GestureHandlerRootView>
    )
}