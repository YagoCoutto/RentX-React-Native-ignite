import styled from 'styled-components/native';

export const Container = styled.View`
    width: 109px;
    height: 92px;
    margin: 5px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.grayPrimary};
`;

export const Name = styled.Text`
    margin-top: 11px;
    color: ${({theme}) => theme.colors.grayText};
`;