import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    banner: {
        flex: 1,
        position: 'absolute',
        backgroundColor: '#66B33B',
        height: 300,
        alignItems: 'center', 
        width: (Dimensions. get('window'). width),
        paddingTop: 100
    },
    container: {
      marginTop: 200,      
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',      
    },
    formContainer: {
        marginTop: 100                
      },
    inupt: {
        borderWidth: 2,
        borderColor: 'gray',
        paddingLeft: 10,
        height: 75,
        width: 300,
        marginBottom: 5
    },
    title: {
        fontWeight: '800',
        fontSize: 25
    },
    text: {
        fontSize: 15
    },
  });