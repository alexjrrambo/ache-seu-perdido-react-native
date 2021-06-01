import React from 'react';
import { View, TextInput, Text, Button } from 'react-native';

import styles from './styles'

export default function Search({ searchConfirmedCallback }) {
  const handleSearch = () => {
    searchConfirmedCallback(true);
  }

  return (
    <>    
        <View style={styles.banner}>
            <Text style={styles.title}>Encontre seu perdido</Text>
            <Text style={styles.text}>Perdeu? Não sabe onde encontrar?</Text>
            <Text style={styles.text}>Nós te ajudamos</Text>
        </View>
        <View style={styles.container}>          
        <View style={styles.formContainer}>
            <TextInput style={styles.inupt} placeholder="Estado" />
            <TextInput style={styles.inupt} placeholder="Cidade" />
            <TextInput style={styles.inupt} placeholder="Nome do objeto" />
            <Button title="Buscar" onPress={handleSearch} />
        </View>
        </View>
    </>
  );
}
