import React from 'react'
import { Container, Text } from './styles'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


export default function ButtonConfirm() {
    return (
        <GestureHandlerRootView>
            <Container>
                <Text>OK</Text>
            </Container>
        </GestureHandlerRootView>
    )
}