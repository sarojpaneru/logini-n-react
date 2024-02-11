import react, {useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
} from 'react-native';

const App = ({navigation}) => {
  const [data, setData] = useState('');
  const [AllData, setAlldata] = useState([]);
  const [condition, setCondition] = useState(true);
  const [selected, setSelected] = useState(null);
  const [toggle, setToggle] = useState(true);

  const Add = () => {
    {
      !data
        ? console.warn('please enter work')
        : setAlldata([...AllData, {id: Date.now().toString(), title: data}]);
      setData('');
    }
  };
  const Delete = id => {
    const newAllData = AllData.filter(item => item.id !== id);
    setAlldata(newAllData);
    setData('');
  };
  const Update = item => {
    setCondition(true);
    setSelected(item);
    setData(item.title);
  };

  const UpdateNew = () => {
    const changeData = AllData.map(item =>
      item.id == selected.id ? {...item, title:data} : item,
    );
    setAlldata(changeData);
    setCondition(false);
    setData('');
  };

  return (
    <View>
      <View>
        <View>
          <Modal visible={condition} transparent={true}>
            <View style={styles.modal}>
              <TextInput
                value={data}
                onChangeText={text => setData(text)}
                placeholder="Change here to update"
                style={styles.input}
              />
              <View>
                <Button
                  title="close"
                  color="red"
                  onPress={() => setCondition(false)}
                />
                <Button title="update" onPress={UpdateNew} />
              </View>
            </View>
          </Modal>
        </View>

        <Button title="GoHOme" onPress={() => navigation.navigate('home')} />
        <View>
          <TextInput
            placeholder="Enter something"
            value={data}
            onChangeText={text => setData(text)}
          />
          <View>
            <Button title="add" onPress={Add} />
          </View>
          <View>
            <FlatList
              data={AllData}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: 'green',
                    margin: 10,
                    padding: 10,
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      {item.title}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Button
                      color="red"
                      title="delete"
                      onPress={() => Delete(item.id)}
                    />
                    <Button title="update" onPress={() => Update(item)} />
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
      <View style={styles.show}>
        <TextInput placeholder="Enter password" style={{fontSize:20, paddingStart:10}} secureTextEntry={toggle}/>
        <View>
          {toggle ? (
            <TouchableOpacity style={styles.touch} onPress={()=>setToggle(false)}>
                <Text style={{fontSize:20}}>show</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.touch} onPress={()=>setToggle(true)}>
                <Text style={{fontSize:20}}>hide</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  show: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'Black',
  },
  touch: {
    marginRight: 5,
  },
  modal: {
    backgroundColor: 'white',
    height: 200,
    width: 350,
    borderRadius: 20,
    marginTop: 200,
    marginStart: 30,
  },
  input: {
    height: 60,
    width: 300,
    marginTop: 20,
    margin: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
});
export default App;
