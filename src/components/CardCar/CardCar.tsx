import React from 'react';
import GasolineIcon from '../../assets/Energia.svg';
import EnergyIcon from '../../assets/Energia.svg';
import {
    About,
    Brand,
    CarImage,
    Container,
    Datails,
    Name,
    Period,
    Price,
    Rent,
    Type
} from './styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


interface CarData {
    brand: string,
    name: string,
    rent: {
        period: string,
        price: number,
        // type: 'gasoline' | 'energy'
    },
    thumbnail: string,
}

interface Props {
    data: CarData,
    onPress: () => void
}

const icon = {
    gasoline: 'GasolineIcon',
    energy: 'EnergyIcon'
}


export default function CardCars(
    { data,
        onPress
    }: Props
) {

    return (
        <GestureHandlerRootView>
            <Container onPress={onPress}>
                <Datails>
                    <Brand>{data.brand}</Brand>
                    <Name>{data.name}</Name>
                    <About>
                        <Rent>
                            <Period>AO DIA</Period>
                            <Price>R$ {data.rent.price}</Price>
                        </Rent>
                        <Type>
                            <GasolineIcon />
                        </Type>
                    </About>
                </Datails>
                <CarImage
                    source={{ uri: data.thumbnail }}
                    resizeMode='contain'
                />
            </Container>
        </GestureHandlerRootView>
    )
}