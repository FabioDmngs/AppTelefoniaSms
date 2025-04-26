import React, { usestate } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';

export default function PhoneScreen() {
    const [phoneNumber, setPhonenumber] = usestate('');

    const makePhoneCall = () => {
        if (!phoneNumber) {
            Alert.alert("Erro", "Por favor, insira um número de telefone");
            return;
        }
        // A URL tel: aciona o aplicativo de telefone do dispositivo
        Linking.openURL(`tel:${phoneNumber}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fazer uma ligação</Text>
            <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="Digite o número"
            value={phoneNumber}
            onChangeText={setPhonenumber}
            />
            <Button title="Ligar" onPress={makePhoneCall} />
        </View>
    );
}
    const styles = StyleSheet.create({
        container: { flex: 1, justifyContent: 'center', padding: 20 },
        title: { fontSize: 24, marginBottom: 20, textAlign: 'center'},
        input: {
            borderWidth: 1,
            borderBlockColor: '#ccc',
            padding: 12,
            marginBottom: 20,
            borderRadius: 6,
        },
    });
    
