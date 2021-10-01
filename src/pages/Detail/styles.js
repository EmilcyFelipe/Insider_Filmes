import styled from "styled-components";

export const Container = styled.View`
    flex:1;
    background-color:#191a30;
`;

export const Header = styled.View`
    z-index: 99;
    position: absolute;
    width: 100%;
    display:flex
    flex-direction: row;
    justify-content: space-between;
    padding: 0 14px;

`;

export const HeaderButton = styled.TouchableOpacity`
    width: 46px;
    height: 46px;
    background-color: rgba(25,26,48,.6);
    border-radius: 23px;
    justify-content: center;
    align-items: center;
`;

export const Banner = styled.Image`
    width:100%;
    height:350px;
    border-bottom-left-radius: 70px;
    border-bottom-right-radius: 70px;

`;

export const ButtonLink = styled.TouchableOpacit`

`;