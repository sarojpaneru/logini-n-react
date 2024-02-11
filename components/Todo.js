import react, {useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  Modal,
} from 'react-native';
const Sodo = ({navigation, item}) => {
  const [data, setData] = useState('');
  const [seta, setSeta] = useState('');
  const [newData, setnewData] = useState([]);

  const [ok, setOk] = useState(false);
  const [help, setHelp] = useState(null);

  const Add = () => {
    if (!data) {
      console.warn('please eneter the work');
    } else {
      setnewData([...newData, {id: Date.now().toString(), title: data}]);
      setSeta(data);
      setData('');
    }
  };
  const Delete = id => {
    const del = newData.filter(item => item.id !== id);
    setnewData(del);
  };

  const UPdate = item => {
    setOk(true);
    setHelp(item);
    setData(item.title);
  };

  const UUpdate = () => {
    const updatedData = newData.map(item =>
      item.id === help.id ? {...item, title: data} : item,
    );
    setnewData(updatedData);
    setOk(false);
    setHelp(null);
    setData('');
  };

  return (
    <View style={{flex: 1}}>
      <Modal visible={ok} transparent={true}>
        <View style={styles.modal}>
          <Text style={{fontSize: 30, marginStart: 100, fontWeight: 'bold'}}>
            Update Here
          </Text>
          <TextInput
            placeholder="Update here"
            onChangeText={text => setData(text)}
            value={data}
            style={styles.modelinputfield}
          />
          <Button title="Updateee" color="green" onPress={UUpdate} />
          <Button title="close" onPress={() => setOk(false)} color="red" />
        </View>
      </Modal>
      <TextInput
        style={styles.putt}
        placeholder="Enter work"
        onChangeText={text => setData(text)}
        value={data}
      />
      <Button title="add" onPress={Add} />
      <FlatList
        data={newData}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Text
              style={{
                fontSize: 24,
                color: 'white',
                fontWeight: 'bold',
                padding: 5,
              }}>
              {item.title}
            </Text>
            <View style={{flexDirection: 'row', paddingStart: 3}}>
              <Button
                title="delete"
                color="red"
                onPress={() => Delete(item.id)}
              />
              <Button title="update" onPress={() => UPdate(item)} />
            </View>
          </View>
        )}
      />
      
      <Button
        title="registration"
        onPress={() => navigation.navigate('registration')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    backgroundColor: 'green',
    margin: 4,
    height: 40,
  },
  modal: {
    marginTop: 150,
    height: 200,
    width: 350,
    backgroundColor: 'white',
    marginStart: 30,
  },
  modelinputfield: {
    height: 60,
    width: 300,
    borderColor: 'green',
    borderWidth: 3,
    borderRadius: 20,
    margin: 20,
    fontSize: 20,
    paddingStart: 10,
  },
  putt: {
    fontSize: 20,
    margin: 10,
    fontWeight: '500',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
  },
});
export default Sodo;
