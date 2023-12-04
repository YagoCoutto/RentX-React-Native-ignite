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
    contentContainerStyle: {
        padding: 24,
        alignItems: 'center',
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
    font-family: ${({ theme }) => theme.fonts.ArchivoMedium};
    color: ${({ theme }) => theme.colors.grayLight};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.ArchivoMedium};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(25)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
    font-family: ${({ theme }) => theme.fonts.ArchivoMedium};
    color: ${({ theme }) => theme.colors.grayLight};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.ArchivoMedium};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(25)}px;
`;

export const Acessories = styled.View`
    flex-direction: row;

    flex-wrap: wrap;    
`;

export const PeriodContainer = styled.View`
    width: 309px;
    margin: 15px 42px 0 24px;
    flex-direction: row;
    `;

export const SchedulingWrapper = styled.View`
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primary};
    `;

export const PeriodWrapper = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    `;
export const DateInfo = styled.View`
    margin: 0 42px 0 29px;
    flex-direction: column;

`;
export const DateTitle = styled.Text``;

export const DateValue = styled.Text``;

export const Divisor = styled.View`
    width: 100%;
    border-bottom-width: 1px;
`;

export const ValueInformation = styled.View`
    width: 309px;
    margin: 15px 42px 0 24px;
`;

export const Title = styled.Text``;

export const ValueInfo = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`;

export const Installments = styled.Text``;

export const ValueTotal = styled.Text``;

export const Footer = styled.View`
    width: 100%;
    padding: 24px;

`;