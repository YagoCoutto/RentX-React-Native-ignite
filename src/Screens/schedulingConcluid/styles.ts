import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.header};
`;

export const Content = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size:${RFValue(30)}px;
    font-family: ${({theme}) => theme.fonts.ArchivoSemiBold};
    color: white;
    margin-top: 40px;
`;

export const Description = styled.Text`
    color: ${({theme}) => theme.colors.grayText};
    text-align: center;
    margin: 16px 0 80px 0;
    line-height: 25px;
`;