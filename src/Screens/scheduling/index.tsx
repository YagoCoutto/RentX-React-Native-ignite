import React from 'react'
import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue

} from './styles'
import BackButton from '../../components/BackButton';
import ArrowSVG from '../../assets/Arrow.svg';
import Acessory from '../../components/Acessory';

export default function Scheduling() {
    return (
        <Container>
            <Header>
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
                        <DateValue selected={false}>18/07/17</DateValue>
                    </DateInfo>

                    <ArrowSVG />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={false}>18/07/17</DateValue>
                    </DateInfo>
                </RentalPeriod>


            </Header>
        </Container>
    )
}