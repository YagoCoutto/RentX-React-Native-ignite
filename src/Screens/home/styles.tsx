//snipt rnsc
import styled from 'styled-components/native';
import { RFValue,RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex:1;
`;

export const Header = styled.View`
    width: 100%;
    height: 113px;
    
    justify-content: flex-end;
    padding: 0 24px 32px;
    background-color: ${({theme}) => theme.colors.header};
`;

export const HeaderContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.title};
`;

export const MainList =  styled.ScrollView.attrs({
    horizontal:false
})`
    flex: 1;
    width: 100%;
    padding: 16px;
    background-color: ${({theme}) => theme.colors.backgroundSecondary};
`