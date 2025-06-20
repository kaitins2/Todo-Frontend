import React, { useState, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  ScrollView,
} from 'react-native';
import Task from '../Components/Task';
import ModifyTask from '../Components/ModifyTask'; // Import the modify modal

export default function TasksScreen() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [modifyModalVisible, setModifyModalVisible] = useState(false);
  const [taskToModifyIndex, setTaskToModifyIndex] = useState(null);

  // 🔁 Array of swipeable refs
  const swipeableRefs = useRef([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleModifyTask = (updatedTask) => {
    if (taskToModifyIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[taskToModifyIndex] = updatedTask;
      setTasks(updatedTasks);

      // ✅ Close the swipe
      swipeableRefs.current[taskToModifyIndex]?.close();

      setTaskToModifyIndex(null);
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {tasks.map((taskText, index) => (
            <Task
              key={index}
              ref={(ref) => (swipeableRefs.current[index] = ref)}
              text={taskText}
              onDelete={() => handleDeleteTask(index)}
              onModify={() => {
                setTaskToModifyIndex(index);
                setModifyModalVisible(true);
              }}
            />
          ))}
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <ModifyTask
        visible={modifyModalVisible}
        onClose={() => setModifyModalVisible(false)}
        initialValue={taskToModifyIndex !== null ? tasks[taskToModifyIndex] : ''}
        onSubmit={handleModifyTask}
      />
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
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#55BCF6',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#55BCF6',
    borderWidth: 1,
  },
  addText: {
    color: 'white',
    fontSize: 24,
  },
});
