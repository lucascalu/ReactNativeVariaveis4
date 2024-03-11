import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleGreet = () => {
    if (name.trim() == '20') {
      setGreeting(`Olá, ${name}!`);
    } 
    
    if(name.trim() == 'Lucas'){
    setGreeting(`isso e um teste`);
    }
    
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exemplo de Variável em React Native</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Button title="Saudar" onPress={handleGreet} />
      <Text style={styles.greeting}>{greeting}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  greeting: {
    marginTop: 20,
    fontSize: 18,
  },
});
