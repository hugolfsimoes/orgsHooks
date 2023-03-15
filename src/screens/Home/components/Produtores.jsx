import React, { useEffect, useState } from 'react';
import { carregarProdutores } from '../../../service/carregaDados';

import { FlatList, StyleSheet, Text } from 'react-native';
import Produtor from './Produtor';

export default function Produtores({ topo: Topo }) {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);
  useEffect(() => {
    const { titulo, lista } = carregarProdutores();
    setTitulo(titulo);
    setLista(lista);
  }, []);

  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={styles.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      renderItem={({ item }) => <Produtor {...item} />}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={TopoLista}
    />
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});