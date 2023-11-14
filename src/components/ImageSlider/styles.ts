import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

interface ImageIndexProps{
    active: boolean;
}

export const Container = styled.View`
    width: 100%;
`;

export const ImageIndexes = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 24px;

`;

export const ImageIndex = styled.View<ImageIndexProps>`
    width: 6px;
    height: 6px;
    margin-left: 8px;
    border-radius: 5px;
    background-color: ${({theme, active}) => active ? theme.colors.header : theme.colors.grayLight};
`;

export const CarImageWrapper = styled.View`
    width: ${Dimensions.get('window').width}px;
    height: 132px;

    align-items: center;
    justify-content: center;
`;

export const CarImage = styled.Image`
    width: 280px;
    height: 132px;
`;
