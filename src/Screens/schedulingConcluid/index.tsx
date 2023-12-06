import React from 'react';
import { useWindowDimensions } from 'react-native';
import {
    Container,
    Title,
    Content,
    Description
} from './styles';

import UnionSVG from '../../assets/Union.svg';
import DoneSVG from '../../assets/Done.svg';
import ButtonConfirm from '../../components/ButtonConfirm';


export default function SchedulingConcluid({navigation}) {
    const { width } = useWindowDimensions();
    return (
        <Container>
            <UnionSVG width={width} />
            <Content>
                <DoneSVG
                    width={80}
                    height={80}
                />
                <Title>Carro alugado!</Title>
                <Description>
                    Agora você só precisa ir {'\n'}
                    até a concessionária da RENTX
                </Description>
                <ButtonConfirm 
                    onPress={() => navigation.navigate('Home')}
                />
            </Content>
        </Container>
    )
}