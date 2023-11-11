//snipt rnfc
import React, { useState, useEffect } from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/Logotipo.svg';
import { FlatList, StatusBar } from 'react-native'
import {
    Container,
    Header,
    HeaderContent,
    Title,
    MainList
} from './styles'
import CardCars from '../../components/CardCar/CardCar';

export default function Home() {
    const  [totCars, setTotCars ] = useState(0);

    useEffect(() => {
        setTotCars(Object.keys(DataCars).length);
        console.log(totCars)
    })

    const DataCars = {
        CarDataOne: {
            brand: 'audi',
            name: 'RS 5 Coupé',
            rent: {
                period: 'Ao dia',
                price: 120,
            },
            thumbnail: 'https://inv.assets.ansira.net/ChromeColorMatch/us/TRANSPARENT_cc_2023AUC290023_01_1280_R5R5.png'
        },

        CarDataTwo: {
            brand: 'porsche',
            name: 'Panamera',
            rent: {
                period: 'Ao dia',
                price: 340,
            },
            thumbnail: 'https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/model-years/14274-2022-porsche-panamera'
        },

        CarDataThree: {
            brand: 'chevrolet',
            name: 'Corvette Z06',
            rent: {
                period: 'Ao dia',
                price: 620,
            },
            thumbnail: 'https://media.chromedata.com/MediaGallery/media/MzE2NzQwXk1lZGlhIEdhbGxlcnk/27T0zB-jQ1AR4g7FwO-fCFvVB4ttEu2BI23VoSptqx74aOK9bXmQfK-cL4R-PGs1M8F-fZGwBou-2dmyehZ4YZ-xiC1hVxR25v64YEPt0uDV81p2r_OqqwzUDXXQKA_QZrhMflSETxxPObXZbahfhRU5cTzZd--D/2019CHC060121_1280_01.png'
        },

        CarDataFour: {
            brand: 'lamborghini',
            name: 'huracan',
            rent: {
                period: 'Ao dia',
                price: 120,
            },
            thumbnail: 'https://www.gt-luxury.ae/wp-content/uploads/2021/04/2020-lamborghini-huracan-ev-495x350.png'
        },

        CarDataFive: {
            brand: 'volvo',
            name: 'xc40',
            rent: {
                period: 'Ao dia',
                price: 120,
            },
            thumbnail: 'https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb25f4058021e3d8e88cb/stills_0640_png/MY2022/15199/15199_st0640_116.png'
        },
        CarDataSix: {
            brand: 'mitsubishi',
            name: 'Lancer EVO X',
            rent: {
                period: 'Ao dia',
                price: 340,
            },
            thumbnail: 'https://static.wikia.nocookie.net/forzamotorsport/images/0/0f/Mot_mit_lancer_08.png/revision/latest?cb=20190531190611'
        },

    };

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
                    <Title>Total de {totCars} carros</Title>
                </HeaderContent>
            </Header>
            <MainList>
                <CardCars data={DataCars.CarDataOne} key={1} />
                <CardCars data={DataCars.CarDataTwo} key={2} />
                <CardCars data={DataCars.CarDataThree} key={3} />
                <CardCars data={DataCars.CarDataFour} key={4} />
                <CardCars data={DataCars.CarDataFive} key={5} />
                <CardCars data={DataCars.CarDataSix} key={6} />
            </MainList>
        </Container>
    )
}