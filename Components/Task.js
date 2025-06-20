import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

const Task = ({ text, onDelete, onModify }) => {
  // Render animated right actions based on swipe progress
  const renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.rightActions}>
        <Animated.View style={[styles.actionButton, styles.modify, { transform: [{ scale }] }]}>
          <TouchableOpacity onPress={onModify}>
            <Text style={styles.actionText}>Modify</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.actionButton, styles.delete, { transform: [{ scale }] }]}>
          <TouchableOpacity onPress={onDelete}>
            <Text style={styles.actionText}>Delete</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}></View>
          <Text style={styles.itemText}>{text}</Text>
        </View>
        <View style={styles.circular}></View>
      </View>
    </Swipeable>
  );
};

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
    width: 80,
    height: 55,
    marginHorizontal: 4,
    borderRadius: 12,
  },
  modify: {
    backgroundColor: '#55BCF6',
  },
  delete: {
    backgroundColor: '#F44336',
  },
  actionText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Task;
