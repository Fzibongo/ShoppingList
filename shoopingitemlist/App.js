


import  {useState} from 'react'

import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

import AddItem from './components/Add'
import Display from './components/display'

export default function App() {

const [items, setItems] = useState([
  {id: 1,
  shoopingItem:"Milk"} ,
  {
    id:2,
    shoopingItem:"BREAD"
    

  }
])


const addShoppingItem = ((text)=>{
  setItems((prevItems)=>{
    return[{id:3, shoopingItem:text}, ...prevItems]
  })
  

})

  return (
    <SafeAreaView style={styles.container}>

    <AddItem  add= {addShoppingItem}   />
    <Display list={items} />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
