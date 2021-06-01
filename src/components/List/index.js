import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles'

export default function List({ searchConfirmedCallback }) {
    const handleBack = () => {
        searchConfirmedCallback(false);
    }

    return (
        <>    
            <View style={styles.banner}>
                <Text style={styles.title}>Resultados da busca</Text>            
            </View>
            <View style={styles.container}>          
                <View style={styles.searchItemContent}>
                    <Text style={styles.title}>Casaco de couro</Text>
                    <Text style={styles.text}>
                        Objeto encontrado em Dois Irmãos-RS, perto do parque do trabalhador.
                    </Text>
                    <Text style={styles.text}>
                        Contato: (51) 99643-3243 falar com Alex
                    </Text>                
                </View>
                <Button title="Voltar" onPress={handleBack} />
            </View>
        </>
    );
}
