//snipt rnfc
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/Logotipo.svg';
import { StatusBar } from 'react-native'
import {
    Container,
    Header,
    HeaderContent,
    Title
} from './styles'

export default function Home() {
    return (
        <Container>
            <StatusBar
                barStyle='light-content'
                backgroundColor={'transparent'}
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    <Title>Total de 12 carros</Title>
                </HeaderContent>
            </Header>
        </Container>
    )
}