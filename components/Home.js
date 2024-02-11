import react, {useEffect, useState} from 'react';


import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  FlatList,
  ScrollView,
} from 'react-native';

const Home = ({navigation}) => {
  const [data, setData] = useState('');
  const [todo, setTodo] = useState([]);
  const Todo = ({item}) => {
    return (
      <View style={styles.flat}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            paddingVertical: 10,
            fontSize: 24,
            marginStart: 10,
            flex: 1,
          }}>
          {item.title}
        </Text>
      </View>
    );
  };
  const Addition = () => {
    if(data){
     setTodo([...todo, {id: Date.now().toString(), title: data}]);
    setData('') ;}else{
      console.warn("please enter the work");
      null;
    }
   
  };

  return (
    <View style={styles.container}>
      <View style={styles.sec}>
        <Text
          style={{
            fontSize: 40,
            color: 'black',
            marginStart: 100,
            fontWeight: 'bold',
          }}>
          Discription 🎉
        </Text>
        <TextInput
          placeholder="Enter work"
          value={data}
          onChangeText={text => setData(text)}
          style={styles.inputtext}
        />
        <TouchableHighlight style={styles.touch} onPress={Addition}>
          <Text style={styles.text}>Add</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touch}
          onPress={() => navigation.navigate('new')}>
          <Text style={styles.text}>Next</Text>
        </TouchableHighlight>
        <FlatList data={todo} renderItem={Todo} />
        <Text>hello</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  flat: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',
    margin: 5,
    borderRadius: 10,
  },
  inputtext: {
   
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    paddingStart: 10,
    fontSize: 20,
    marginStart: 10,
    marginRight: 10,
  },
  touch: {
    fontSize: 24,
    borderColor: 'green',
    backgroundColor: 'black',
    margin: 10,
    alignItems: 'center',
    borderwidth: 2,
    borderRadius: 10,
    height: 40,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    paddingTop: 4,
  },
});
export default Home;
