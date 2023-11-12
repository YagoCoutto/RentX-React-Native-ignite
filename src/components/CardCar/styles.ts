import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 126px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    margin-bottom: 16px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Datails = styled.View`
`;

export const Brand = styled.Text`
    font-family: ${({ theme }) => theme.fonts.ArchivoMedium};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.subTitle};
    text-transform: uppercase;
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.ArchivoMedium};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.title};
`;

export const About = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
`;

export const Rent = styled.View`
    margin-right: 25px;
`;

export const Period = styled.Text`
    font-family: ${({ theme }) => theme.fonts.ArchivoMedium};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.subTitle};
    text-transform: uppercase;
`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.ArchivoMedium};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Type = styled.View``;

export const CarImage = styled.Image`
    width: 186px;
    height: 95px;
`;
