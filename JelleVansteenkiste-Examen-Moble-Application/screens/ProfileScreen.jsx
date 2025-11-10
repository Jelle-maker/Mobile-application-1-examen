import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  useEffect(() => {
    console.log('Profile mounted');
    return () => console.log('Profile unmounted');
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/avatar.png')} style={styles.avatar} />
      <Text style={styles.name}>Jelle Vansteenkiste</Text>
      <Text style={styles.role}>Student / Graduaat programmeren</Text>
      <Text style={styles.bio}>Korte bio: Ik bouw een kleine Expo-app met tabs, stack, FlashList en API-integratie voor school.</Text>
      <Text style={styles.contact}>Contact: </Text>
      <Text>jelle.vansteenkiste@student.vives.be</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', padding:20 },
  avatar: { width:120, height:120, borderRadius:60, marginBottom:10 },
  name: { fontSize:20, fontWeight:'700' },
  role: { marginBottom:8, color:'#555' },
  bio: { textAlign:'center', marginVertical:8 },
  contact: { marginTop:12, color:'#333' }
});