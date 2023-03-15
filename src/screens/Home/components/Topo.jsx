import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { carregarTopo } from '../../../service/carregaDados';

import logo from '../../../../assets/logo.png';

class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: '',
      legenda: '',
    },
  };
  atualizaTopo() {
    const { boasVindas, legenda } = carregarTopo();
    this.setState({
      topo: {
        boasVindas,
        legenda,
      },
    });
  }
  componentDidMount() {
    this.atualizaTopo();
  }
  render() {
    const {
      topo: { boasVindas, legenda },
    } = this.state;
    return (
      <View style={styles.topo}>
        <Image source={logo} style={styles.imagem} />
        <Text style={styles.boasVindas}>{boasVindas}</Text>
        <Text style={styles.legenda}>{legenda}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
});

export default Topo;
