import styled from "styled-components";

export const Container = styled.TouchableOpacity`
    padding: 14px;
`;

export const Banner = styled.Image`
    width: 100%;
    height: 140px;
    border-radius: 8px;
`;

export const Title = styled.Text`
    color:#FFF;
    font-size: 18px;
    font-weight: bold;
    padding-top: 8px;
`;

export const RateContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding-top: 4px;
`;

export const Rate = styled.Text`
    color:#FFF;
    padding-left: 4px;
    font-size: 12px;
`;