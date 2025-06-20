import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

const Task = forwardRef(({ text, onDelete, onModify }, ref) => {
  const swipeableRef = useRef(null);

  useImperativeHandle(ref, () => ({
    close: () => swipeableRef.current?.close(),
  }));

  const renderRightActions = () => (
    <View style={styles.rightActions}>
      <TouchableOpacity style={[styles.actionButton, styles.modify]} onPress={onModify}>
        <Text style={styles.actionText}>Modify</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.actionButton, styles.delete]} onPress={onDelete}>
        <Text style={styles.actionText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Swipeable ref={swipeableRef} renderRightActions={renderRightActions}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}></View>
          <Text style={styles.itemText}>{text}</Text>
        </View>
        <View style={styles.circular}></View>
      </View>
    </Swipeable>
  );
});

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderColor: '#55BCF6',
    borderWidth: 2,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -10,
  },
  actionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: '100%',
  },
  modify: {
    backgroundColor: '#55BCF6',
    borderRadius: 20,
    height: 55,
  },
  delete: {
    backgroundColor: '#F44336',
    borderRadius: 20,
    height: 55,
  },
  actionText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Task;
