// OngoingTask.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OngoingTask = () => {
  return (
    <>
      <View style={styles.CategoriesText}>
        <Text style={styles.categories}>Ongoing Task</Text>
      </View>
      <View>
        {['Mobile App Development', 'Web Development', 'Data Structures & Algo.', 'Machine Learning Ethics'].map((task, index) => (
          <View key={index} style={styles.OngoingTaskView}>
            <Text>{task}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  CategoriesText: {
    alignSelf: 'right',
    marginLeft: 15,
    marginTop: 30,
  },
  categories: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'right',
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
  },
});

export default OngoingTask;
