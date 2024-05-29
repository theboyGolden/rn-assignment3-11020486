import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <View style={styles.columnContainer}>
            <View style={styles.column1}>
              <Text style={styles.HelloDevs}>Hello Devs, </Text>
              <Text style={styles.nooftasks}>14 tasks today</Text> 
            </View>

            <View style={styles.column2}>
              <Text>  </Text>
            </View>

            <View style={styles.column3}>
              <Text> <Image source={require('./assets/person.png')} style={styles.user} /> </Text>
            </View>

        </View>
        
        <View style={styles.workspace}>
          <Text> Fuck this is the workpage </Text>
        </View>
        
      <StatusBar style="auto" />
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },

  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  HelloDevs: {
    fontSize: 30,
    fontFamily: 'Lato',
    fontWeight: '700',
    color: '#000',

  },

  column1: {
    flex: 3,
  },

  column2: {
    flex: 2,
  },

  column3: {
    flex: 1,
  },

  user: {
    backgroundColor: '#fff',
    borderRadius: 50,
  }
});
