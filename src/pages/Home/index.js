import React from 'react';
import {View,Text} from 'react-native';
import Header from '../../components/Header'
import {Feather} from '@expo/vector-icons'

import {Container,SearchContainer,Input,SearchButton} from './styles';

export default function Home(){
    return(
        <Container>
            <Header title="React Prime"/>
            <Text>Tela Home</Text>
            <SearchContainer>
                <Input 
                placeholder="Ex Vingadores"
                placeholderTextColor="#ddd"
                />
                <SearchButton>
                    <Feather name="search" size={30} color="#FFF" />
                </SearchButton>

            </SearchContainer>
        </Container>
    );
}