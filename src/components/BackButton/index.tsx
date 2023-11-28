import React from 'react'
import { Container } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { GestureHandlerRootView, BorderlessButtonProps } from 'react-native-gesture-handler'


interface Props extends BorderlessButtonProps {
    color?: string
}

export default function BackButton(
    { color, ...rest }: Props
) {
    const theme = useTheme()
    return (
        <GestureHandlerRootView>
            <Container {...rest}>
                <MaterialIcons
                    name='chevron-left'
                    size={24}
                    color={color ? color : theme.colors.background}
                />
            </Container>
        </GestureHandlerRootView>

    )
}