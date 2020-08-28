import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class CalculoImc extends Component {
  state = {
    altura: 0,
    peso: 0,
    nivel: '',
    resultado: 0
  }

  constructor(props) {
    super(props)
    this.state = this.state
    this.calcular = this.calcular.bind(this)
  }

  calcular() {
    let peso = this.state.peso
    let altura = this.state.altura
    let imc = peso / Math.pow(altura, 2)
    let estado = this.state
    estado.resultado = imc

    if (estado.resultado < 16) {
      estado.nivel = 'Muito abaixo do peso'
    }
    else if (estado.resultado < 17) {
      estado.nivel = 'Moderadamente abaixo do peso'
    }
    else if (estado.resultado < 18.5) {
      estado.nivel = 'Abaixo do peso'
    }
    else if (estado.resultado < 25) {
      estado.nivel = 'Saudável'
    }
    else if (estado.resultado < 30) {
      estado.nivel = 'Sobrepeso'
    }
    else if (estado.resultado < 35) {
      estado.nivel = 'Obesidade Grau 1°'
    }
    else if (estado.resultado < 40) {
      estado.nivel = 'Obesidade Grau 2°'
    }
    else {
      estado.nivel = 'Obesidade Grau 3°'
    }


    this.setState(estado)
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Calculadora de IMC</Text>
        <View style={styles.entradas}>
          <TextInput placeholder="Altura (m)" keyboardType="numeric" style={styles.input} onChangeText={(altura) => { this.setState({ altura }) }} />
          <TextInput placeholder="Peso (kg)" keyboardType="numeric" style={[styles.input, {marginBottom: 30}]} onChangeText={(peso) => { this.setState({ peso }) }} />
          
          <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
          <Text style={[styles.resultado, { fontSize: 18 }]}>{this.state.nivel}</Text>

          <TouchableOpacity onPress={this.calcular} style={styles.button}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>


        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontStyle: 'italic',
    color: '#b34ec7',
    marginTop: 60,
    width: '50%',
    textAlign: 'center',
    marginBottom: 20
  },

  entradas: {
    width: '100%',
    alignItems: 'center'
  },

  input: {
    height: 60,
    textAlign: 'center',
    width: '90%',
    fontSize: 18,
    marginTop: 20,
    color: '#b34ec7',
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: '#ededed'
  },

  button: {
    height: 60,
    backgroundColor: '#b34ec7',
    borderRadius: 20,
    marginTop: 20,
    width: 320,
  },

  buttonText: {
    alignSelf: 'center',
    padding: 15,
    fontSize: 20,
    color: 'white'
  },

  resultado: {
    color: '#f2adff',
    fontSize: 34,
    fontStyle: 'italic'


  }


});
