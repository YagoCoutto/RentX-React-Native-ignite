import React from 'react'
import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Footer,
    Content

} from './styles'
import BackButton from '../../components/BackButton';
import ArrowSVG from '../../assets/Arrow.svg';
import Acessory from '../../components/Acessory';
import { StatusBar } from 'react-native';
import Button from '../../components/Button';
import Calendar from '../../components/Calendar';
import { LocaleConfig } from 'react-native-calendars';

export default function Scheduling() {

    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor={'transparent'}
                    translucent
                />
                <BackButton
                    onPress={() => { }

                    }
                />
                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel {'\n'}
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={true}>18/07/17</DateValue>
                    </DateInfo>

                    <ArrowSVG />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={false}>18/07/17</DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar />
            </Content>

            <Footer>
                <Button
                    title='Confirmar'
                />
            </Footer>
        </Container>
    )
}