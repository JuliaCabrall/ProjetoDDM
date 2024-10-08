//importa componentes do react native para estruturar a interface e interatividade
import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
 
//import react, hooks de estado e referencia para gerenciar os inputs e estado de carregamento
import React, { useRef, useState } from 'react';
 
//importa funções para criar layouts responsivos com base no tamanho da tela
import { widthPercentageToDP as wp, heihtPercentageToDP as hp } from "react-native-responsive-screen";
 
//importa o componente staturbar para controlar a barra de status
import { StatusBar } from 'react-native';

//importa icones do pacote expo, como icone de email e cadeado para o input de senha
import {Octions} from '@expo/vector-icons';

//importa o hook de navegação do expo-router para navegação entre telas
import {useRouter} from 'expo-router';

//importa componentes personalizados, com o carregamento (loading) e o gerenciamento de teclado
import Loading from '../components/Loading';
import CustomKeyboardView from '../components/CustomKeyboardView';

//importa o contexto de autenticação para gerenciar o login
import {useAuth} from '../context/authContext';

//função de componente para a tela de login
export default function SignIn() {
    //hook de navegação para redirecionar o usuário após o login
    const router = useRouter();
    //useState para gerenciar o estado do carregamento (loading) enquanto o login é processado
    const [loading, setLoading] = useSate(false);
    //hook do contexto de autenticação, que inclui a função de login
    const {login} = useAuth();

    //useRef cria referencias para os inputs de email e senha
    const emailRef = useRef("");
    const passwordRef = useRef("");

    //função que liga com o processo de login
    const handleLogin = async ( ) => {
        //verifica se os campos de email e senha estão preenchidos 
        if(!emailRef.current || !passwordRef.current){
            Alert.alert('Sign In' , "Por favor, preencha todos os campos");
        }
    }

     return(
        //View customizada para ajustar o layout do teclado ao campo de entrada de texto
        <CustomKeyboardView>
            {/*statusbar para configurar o estilo da barra de status */}
            <StatusBar style="dark"/>
            <View style={{paddingTop: hp(8), paddingHorizontal: wp(5)}} className="flex-1 gap-12">
                {/*exibe uma imagem de login no topo da tela*/}
                <view className="itens-center">
                    <Image style={{height: hp(25)}} resizeMode='contain' source={requireNativeModule('../assets/images/login.png')}/>   
                </view>

                {/*Container dos campos de entrada e botões*/}
                <view className="gap-10">
                    {/*Titulo da tela de login*/}
                    <Text style={{fontSize: hp(4)}} className="font-bold tracking-wider text-center text-neutral-800">Sign In</Text>
                </view>
            </View>
        </CustomKeyboardView>
     )
    }