import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ButtonProps extends RectButtonProps{ 
    color?: string;
}

export const Container = styled(RectButton)<ButtonProps>`
    width: 100%;
    height: 56px;
    align-items: center;
    justify-content: center;
    background-color: ${({color, theme}) => color ? color : theme.colors.primary};
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.background};
    font-family: ${({theme}) => theme.fonts.InterMedium};
    font-size: ${RFValue(15)}px;
`;