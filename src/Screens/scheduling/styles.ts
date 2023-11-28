import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled, { css } from 'styled-components/native';

interface DateValueProps {
    selected: boolean
}

export const Container = styled.View`
    flex:1;
`;

export const Header = styled.View`
    width: 100%;
    height: 325px;
    background-color: ${({ theme }) => theme.colors.header};

    justify-content: center;
    padding: 25px;

`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.ArchivoMedium};
    font-size: ${RFValue(30)}px;
    padding-top:24px;
`;

export const RentalPeriod = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const DateInfo = styled.View`
    width: 30%;
`

export const DateTitle = styled.Text`
    color: ${({ theme }) => theme.colors.grayText};
    font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text<DateValueProps>`
    color: ${({ theme }) => theme.colors.background};

    ${({ selected, theme }) => !selected && css`
        border-bottom-width: 1px;
        border-bottom-color: ${({ theme }) => theme.colors.grayText};
    `}
`;
