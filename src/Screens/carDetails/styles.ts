import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
    flex:1;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    margin-top: ${getStatusBarHeight() + 18}px;
    margin-left: 24px;
`
export const CarImages = styled.View`
    margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle:{
        padding: 24,
        alignItems:'center',
    }
})``;

export const Details = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;

export const Description = styled.View``;

export const Brand = styled.Text`
    font-family: ${({theme}) => theme.fonts.ArchivoMedium};
    color: ${({theme}) => theme.colors.subTitle};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
`;

export const Name = styled.Text`
    font-family: ${({theme}) => theme.fonts.ArchivoMedium};
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(25)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
    font-family: ${({theme}) => theme.fonts.ArchivoMedium};
    color: ${({theme}) => theme.colors.subTitle};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
`;

export const Price = styled.Text`
    font-family: ${({theme}) => theme.fonts.ArchivoMedium};
    color: ${({theme}) => theme.colors.primary};
    font-size: ${RFValue(25)}px;
`;

export const About = styled.Text`
    font-family: ${({theme}) => theme.fonts.ArchivoMedium};
    color: ${({theme}) => theme.colors.subTitle};
    font-size: ${RFValue(15)}px;
    text-align: justify;

    margin-top: 24px;
`