/* Made by following @MadeByMatt YouTube tutorial
 * Added my own minor functionality changes, such as: 
    * Background, square, and title colour/size
    * Enabling the task to be deleted only by clicking the square to complete it 
    * Changing the flex in the task component
    * Adding a plus sign to add a task 
  */

import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import Task from './components/Task';

export default function App() {

  {/* States */}

  const [task, setTask] = useState();
  //     Name of state, function we use to set the state

  const [taskItems, setTaskItems] = useState([]); // default value empty array 

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]); // Recall in JS that ... copies all the membesr
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1); // Remove 1 item from array 
    setTaskItems(itemsCopy);
  }

  
  {/* Main screen */}

  return (
    <View style={styles.container}>

      { /* Today's Tasks */ }
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}> 
          {/* This is where the tasks will go */}
          {
            taskItems.map((item, index) => {
              return (<Task key={index} text={item} onDelete={() => completeTask(index)} />)
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>

    </View>
  );
}

// Stylesheet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAC0FF',
  },

  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#952493',
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
    alignItems: 'center'
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },

  addText: {
    color: "#C0C0C0",
    fontSize: 20,
    textAlign: 'center'
  },
});
