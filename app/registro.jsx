import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';


const Registro = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBackground}>
        <View style={styles.header}>
          <Image source={require('../assets/maritima.png')} style={styles.logo} />
          <View style={styles.textContainer}>
            <Text style={styles.titulo_B}>CREA UNA</Text>
            <Text style={styles.titulo_B}>CUENTA</Text>
          </View>
        </View>
      </View>
      <View style={styles.form}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Nombre" style={styles.input} />
        <TextInput placeholder="Código de Estudiante" style={styles.input} />
        <TextInput placeholder="Contraseña" style={styles.input} secureTextEntry={true} />
        <TextInput placeholder="Repetir Contraseña" style={styles.input} secureTextEntry={true} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Crear Cuenta</Text>
        </TouchableOpacity>

        <Text style={styles.nolsa}>¿No tienes cuenta?</Text>
        <Link href="/home" style={styles.siza}>Crea una cuenta</Link>
      </View>
    </SafeAreaView>
  );
}

export default Registro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBackground: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 180,
    backgroundColor: '#085FF5',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically
  },
  header: {
    top: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  textContainer: {
    flexDirection: 'column',
  },
  titulo_B: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 36,
    color: '#FFFFFF',
  },
  form: {
    borderRadius: 25,
    marginTop: 60,
    backgroundColor: 'white',
    elevation: 8,
    padding: 25,
    maxWidth: 550,
    maxHeight: 450,
    flex: 1,
    alignItems: 'center', // Center the form items
  },
  input: {
    backgroundColor: '#E4E4E4',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    margin: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    width: 250,
  },
  picker: {
    height: 50,
    width: 250,
    margin: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
  },
  button: {
    backgroundColor: '#085FF5',
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    margin: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
  },
});
