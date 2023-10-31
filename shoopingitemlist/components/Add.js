import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { useState } from 'react';

const AddItem = (props) => {
  const [text, setText] = useState();

  const addToShoppingList = () => {
    props.add(text);
  };

  const onChangehandleChange = (textValue) => {
    setText(textValue);
  };

  return (
    <View>
      <TextInput stplaceholder="Enter add" onChangeText={onChangehandleChange} />

      <TouchableOpacity style={styles.btn} onPress={addToShoppingList}>
        <Text>Add </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'white',
    width: 100,
    height: 30,
    padding: 9,
    color: 'white',
    fontWeight: 20,
    fontsize: 50,
    paddingHorizontal:30
  },
  text: {
    color: 'blue',
  }
  
});

export default AddItem;
