import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
    width: ${RFValue(80)}px;
    height: ${RFValue(56)}px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.shapeBlack};
`;

export const Text = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.fonts.InterMedium};
    color: ${({theme}) => theme.colors.background};
`;