import React from 'react'
import ContentView from '../../components/content-view/content-view'
import CustomText from '../../components/custom-text/custom-text';
import { Text, TextInput, View } from 'react-native';
import CustomButton from '../../components/custom-button/custom-button';
import styles from './sing-up.styles';
import { useNavigation, CommonActions } from '@react-navigation/native';

const SignUpScreen = () => {

  //hook de useNavigation

  //const navigation=useNavigation();
  //const [text, onChangeText] = React.useState('Useless Text');
  
  const [number, onChangeNumber] = React.useState('');

  return (


    <ContentView styleContainer={{ justifyContent: 'space-between' }}>

      <CustomText styleContainer={styles.textTitle}>SignUpScreen</CustomText>

      <View style={{justifyContent: 'space-between' }}>
        <Text style={styles.subTitle}>Nombres:</Text>
        <TextInput
          style={styles.input}
          //onChangeText={onChangeText}
          //value={text}
          placeholder="Nombres completos"
        />
        <Text style={styles.subTitle}>Apellidos:</Text>
        <TextInput
          style={styles.input}
          //onChangeText={onChangeText}
          //value={text}
          placeholder="Apellidos completos"
        />
        <Text style={styles.subTitle}>Correo electronico:</Text>
        <TextInput
          style={styles.input}
          //onChangeText={onChangeText}
          //value={text}
          placeholder="correo@domain.com"
        />
        <Text style={styles.subTitle}>Número de teléfono:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="+593-9XX-XXX-XXX"
          keyboardType="numeric"
        />


      </View>





      <View style={{ gap: 20, marginBottom: 30 }}>
        <View style={{ gap: 20 }}>
          <CustomButton
            title='Registrarse'
            onPress={() => console.log('hola')}
          />
          <CustomButton
            title='Regresar'
            onPress={() => console.log('hola')}
            //onPress={() => navigation.dispatch(CommonActions.navigate({name:''}))}
            isSecondary
          />
        </View>
        <View>
          <CustomText styleContainer={{ textAlign: 'center' }}>reservas de peliculas gratis</CustomText>
        </View>
      </View>
    </ContentView>

  )
}




export default SignUpScreen;
