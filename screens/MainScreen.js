import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Task from '../Components/Task';

export default function MainScreen() {
  // Get current date
  const today = new Date();

  // Format date to something like: Wednesday 5th June
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July",
                      "August", "September", "October", "November", "December"];

  const getOrdinalSuffix = (n) => {
    if (n > 3 && n < 21) return 'th';
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const day = dayNames[today.getDay()];
  const date = today.getDate();
  const month = monthNames[today.getMonth()];
  const ordinal = getOrdinalSuffix(date);
  const formattedDate = `${day} ${date}${ordinal} ${month}`;

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        
        <Text style={styles.Title}>{formattedDate}</Text>

        <TouchableOpacity style={styles.sectionTitle} onPress={() => {}}>
          <Text style={styles.sectionTitle}>Tasks</Text>
        </TouchableOpacity>
        
        <View style={styles.items}>
          <ScrollView>
          <Task text={'Task 1'} />
          <Task text={'Task 2'}/>
          <Task text={'Task 3'}/>
          <Task text={'Task 4'}/>
          <Task text={'Task 5'}/>
          </ScrollView>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  Title: {
   fontSize: 30,
   fontWeight: 'bold',
   paddingBottom: 30,

  },
  sectionTitle: {
   fontSize: 25,
   fontWeight: 'bold',
   paddingBottom: 15,

  },
  items: {
  height: 250, // adjust height as needed
  borderWidth: 2,
  borderColor: '#ccc',
  borderRadius: 10,
  padding: 10,
  backgroundColor: '#fff',
  },
});
