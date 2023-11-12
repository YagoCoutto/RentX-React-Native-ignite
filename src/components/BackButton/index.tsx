import React from 'react'
import { Container } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


interface Props {
    color?: string
}

export default function BackButton(
    { color }: Props
) {
    const theme = useTheme()
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            <Container>
                <MaterialIcons
                    name='chevron-left'
                    size={24}
                    color={color ? color : theme.colors.title}
                />
            </Container>
        </GestureHandlerRootView>
    )
}