import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';


import  {useState} from 'react'

const Display = ((props ) =>{


  const [name, setName] = useState("Lotus")
  return (<View>

  <Text> {name} </Text>

  <View>
  
  {props.list.map((item)=>(
    <View style={styles.bomb}>
    <Text>{item.shoopingItem} </Text>
    <TouchableOpacity>
    DELETE
    </TouchableOpacity>
    </View>
  ))}
  
  </View>
  
  </View>)
})

const styles = StyleSheet.create({
  bomb: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});




export default Display