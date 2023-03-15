import React, { useState, useEffect } from 'react';
import { carregarProdutores } from '../service/carregaDados';

export default function useProdutores() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const { titulo, lista } = carregarProdutores();
    setTitulo(titulo);
    setLista(lista);
  }, []);

  return [titulo, lista];
}
