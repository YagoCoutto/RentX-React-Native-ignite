import React from 'react';
import {
    CarImages,
    Container,
    Header,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    Acessories,
    Footer,
    PeriodContainer,
    SchedulingWrapper,
    PeriodWrapper,
    DateTitle,
    DateInfo,
    DateValue,
    Divisor,
    ValueInformation,
    Title,
    ValueInfo,
    Installments,
    ValueTotal
} from './styles';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';
import Acessory from '../../components/Acessory';
import SpeedSVG from '../../assets/Speed.svg';
import UpSVG from '../../assets/Up.svg';
import GasolineSVG from '../../assets/Gasolina.svg';
import PeopleSVG from '../../assets/Pessoas.svg';
import ChangeSVG from '../../assets/Câmbio.svg';
import ForceSVG from '../../assets/Força.svg';
import Button from '../../components/Button';
import SchedulingIcon from '../../assets/Agendamentos.svg'
import { MaterialIcons } from '@expo/vector-icons'



export default function SchedulingDetails({navigation}) {
    return (
        <Container>
            <Header>
                <BackButton
                    color='#47474D'
                    onPress={() => {navigation.goBack()}}
                />
            </Header>
            <CarImages>
                <ImageSlider
                    imageUrl={['https://static.wikia.nocookie.net/forzamotorsport/images/0/0f/Mot_mit_lancer_08.png/revision/latest?cb=20190531190611']}
                />
            </CarImages>
            <Content>
                <Details>
                    <Description>
                        <Brand>
                            mitsubishi
                        </Brand>
                        <Name>
                            Lancer EVO X
                        </Name>
                    </Description>
                    <Rent>
                        <Period>
                            ao dia
                        </Period>
                        <Price>
                            R$ 340
                        </Price>
                    </Rent>
                </Details>
                <Acessories>
                    <Acessory
                        icon={SpeedSVG}
                        name='380km/h'
                    />
                    <Acessory
                        icon={UpSVG}
                        name='3.2s'
                    />
                    <Acessory
                        icon={ForceSVG}
                        name='800 HP'
                    />
                    <Acessory
                        icon={GasolineSVG}
                        name='Gasolina'
                    />
                    <Acessory
                        icon={ChangeSVG}
                        name='Auto'
                    />
                    <Acessory
                        icon={PeopleSVG}
                        name='2 Pessoas'
                    />
                </Acessories>
                <PeriodContainer>
                    <SchedulingWrapper>
                        <SchedulingIcon
                            width={24}
                            height={24}
                        />
                    </SchedulingWrapper>
                    <PeriodWrapper>
                        <DateInfo>
                            <DateTitle>DE</DateTitle>
                            <DateValue>18/06/2021</DateValue>
                        </DateInfo>
                        <MaterialIcons
                            name='chevron-right'
                            size={24}
                        />
                        <DateInfo>
                            <DateTitle>DE</DateTitle>
                            <DateValue>20/06/2021</DateValue>
                        </DateInfo>
                    </PeriodWrapper>
                </PeriodContainer>
                <Divisor />
                <ValueInformation>
                    <Title>TOTAL</Title>
                    <ValueInfo>
                        <Installments>R$ 580 x3 diárias</Installments>
                        <ValueTotal>R$ 2.900</ValueTotal>
                    </ValueInfo>
                </ValueInformation>
            </Content>
            <Footer>
                <Button 
                title='Alugar agora' 
                color='#03B252'
                onPress={() => {navigation.navigate('SchedulingConcluid')}}
                />
            </Footer>
        </Container >
    )
}