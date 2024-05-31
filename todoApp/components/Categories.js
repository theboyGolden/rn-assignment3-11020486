// Categories.js
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const Categories = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
      <View style={styles.Searchlane}>
        <View style={styles.SearchIconDiv}>
          <Image source={require('../assets/search.png')} style={styles.SearchIcon}/>
        </View>
        <View style={styles.SearchField}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor={'black'}
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
          />
        </View>
        <View style={styles.VectorView}>
          <Image source={require('../assets/Vector.png')} style={styles.Vector} />
        </View>
      </View>
      <View style={styles.CategoriesText}>
        <Text style={styles.categories}>Categories</Text>
      </View>
      <View style={styles.Categorieslayout}>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <View style={styles.CategoryView}>
            <Text>Exercise</Text>
            <Text>12 Tasks</Text>
            <Image source={require('../assets/young_woman_working_online.png')} style={styles.Vector} />
          </View>
          <View style={styles.CategoryView}>
            <Text>Study</Text>
            <Text>12 Tasks</Text>
            <Image source={require('../assets/young_woman_working_at_desk.png')} style={styles.Vector} />
          </View>
          <View style={styles.CategoryView}>
            <Text>Sleep</Text>
            <Text>12 Tasks</Text>
            <Image source={require('../assets/sleeping.webp')} style={styles.Sleeping} />
          </View>
          <View style={styles.CategoryView}>
            <Text>Code</Text>
            <Text>12 Tasks</Text>
            <Image source={require('../assets/programmer.jpg')} style={styles.programmer} />
          </View>
          <View style={styles.CategoryView}>
            <Text>Cook</Text>
            <Text>12 Tasks</Text>
            <Image source={require('../assets/cooking.webp')} style={styles.programmer} />
          </View>
          <View style={styles.CategoryView}>
            <Text>Game</Text>
            <Text>12 Tasks</Text>
            <Image source={require('../assets/gamer.webp')} style={styles.programmer} />
          </View>
          <View style={styles.CategoryView}>
            <Text>Skate</Text>
            <Text>12 Tasks</Text>
            <Image source={require('../assets/skating.png')} style={styles.programmer} />
          </View>
          <View style={styles.CategoryView}>
            <Text>Shower</Text>
            <Text>12 Tasks</Text>
            <Image source={require('../assets/shower.jpg')} style={styles.programmer} />
          </View>
          
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
    marginLeft: -5,
    backgroundColor: '#fff',
    borderRadius: 8,
   
  },
  SearchIcon: {
    
  },
  SearchIconDiv: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopRadius: 8,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    paddingLeft: 10,
    paddingRight:8,
    marginLeft: 9,
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
  scrollView: {
    marginHorizontal: 0,
  },
  Vector: {
    
  },

  Sleeping: {
    height: 160,
    width: 150,
  },
  programmer: {
    height: 160,
    width: 150,
  }
});

export default Categories;
