import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    banner: {
        flex: 1,
        position: 'absolute',
        backgroundColor: '#66B33B',
        height: 100,
        alignItems: 'center', 
        width: (Dimensions. get('window'). width),
        paddingTop: 55
    },
    container: {
      marginTop: 150,      
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',      
    },
    searchItemContent: {
      borderWidth: 2,
      borderColor: 'gray',
      paddingLeft: 10,
      width: 400,
      marginBottom: 5              
    },
    title: {
        fontWeight: '800',
        fontSize: 20
    },
    text: {
        margin: 10,
        fontSize: 15
    },
  });