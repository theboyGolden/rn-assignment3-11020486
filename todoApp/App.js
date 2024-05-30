import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <View style={styles.columnContainer}>
            <View style={styles.column1}>
              <Text style={styles.HelloDevs}>Hello, Devs </Text>
              <Text style={styles.nooftasks}>14 tasks today</Text> 
            </View>

            <View style={styles.column2}>
              <Text>  </Text>
            </View>

            <View style={styles.column3}>
              <Text> <Image source={require('./assets/person.png')} style={styles.user} /> </Text>
            </View>

        </View>

        <View style={styles.Searchlane}>
          <View style={styles.SearchField}>
          
              <TextInput 
                style={styles.searchInput}
                placeholder="Search"
                value={searchQuery}
                onChangeText={text => setSearchQuery(text)}
              />
          </View>

          <View style={styles.VectorView}>
              <Image source={require('./assets/Vector.png')} style={styles.Vector} />
          </View>
        </View>
        
        <View style={styles.CategoriesText}>
          <Text style={styles.categories}> Categories </Text>
        </View>
       
       <View style={styles.Categorieslayout}> 
          <View style={styles.CategoryView}>
              
              <Text> Exercise </Text>
              <Text> 12 Tasks </Text>
              <View>
              <Image source={require('./assets/young_woman_working_online.png')} style={styles.Vector} />
              </View>

            </View>
            
            <View style={styles.CategoryView}>
              <Text> Study </Text>
              <Text> 12 Tasks </Text>
              <View>
              <Image source={require('./assets/young_woman_working_at_desk.png')} style={styles.Vector} />
              </View>

            </View>
        </View> 

        <View style={styles.CategoriesText}>
          <Text style={styles.categories}> Ongoing Task </Text>
        </View>
        
        <View>
          <View style={styles.OngoingTaskView}>
            <Text> Mobile App Development</Text>
          </View>

          <View style={styles.OngoingTaskView}>
          <Text> Web Development </Text>
          </View>
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
  },

  Searchlane: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 5,
    marginBottom: 5,
  },

  

  searchInput: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    width: '100%',
  },


  SearchField: {
    flex: 1,
    marginLeft: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
  },

  VectorView: {
    borderRadius: 15,
    backgroundColor: '#F0522F',
    padding: 10,
    marginLeft: 22,
    marginRight: 19,
  },

  categories: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'right',
  },

  CategoriesText: {
    alignSelf: 'right',
    marginLeft: 15,
    marginTop: 30,
  },

  CategoryView: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    margin: 10,
  },

  Categorieslayout: {
    flexDirection: 'row',
  },
 

  OngoingTaskView: {
    backgroundColor: '#fff',
    padding: 55,
    paddingRight: 100,
    borderRadius: 15,
    margin: 10,
    marginLeft: -10,
    borderColor: '#E8D1BA',
    borderWidth: 1,
  }
});
