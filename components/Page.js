import react, {useState} from 'react';
import {View, Text, Button, Modal, FlatList, ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';
const Page = ({navigation, route}) => {
  const {data, name, age} = route.params;
  const [condition, setCondition] = useState(false);
  const [newData, setNewData] = useState('');
  let [store, setStore] = useState([]);
  const users = [
    {
      id: "1",
      name: "John Green",
           
    },
    {
      id: "2",
      name: "Ranson Kons",
    },
    {
      id: "3",
      name: "Remity Sons",
    
    },
    {
      id: "4",
      name: "Randy Samsun",
            
    },
    {
      id: "5",
      name: "Rose Cane",
              
    },
    {
      id: "6",
      name: "Zimmy Jang",
              
    },
    {
      id: "7",
      name: "Jessieca Johnson",
              
    },
    {
      id: "8",
      name: "Julian Gulgowski",
             
    },
    {
      id: "9",
      name: "Ellen Veum",
             
    },
    {
      id: "10",
      name: "Lorena Rice",
              
    },
  ]
  

  const Open = () => {
    setCondition(true);
  };
  const Close = () => {
    setCondition(false);
  };

  return (
    
    <View style={{flex:1}}>
      <Button title='navigation' onPress={()=>navigation.navigate('todo')}/>
      <Modal visible={condition} transparent={true}>
        <View>
          <View
            style={{
              alignItems: 'center',
              marginTop: 100,
              backgroundColor: 'green',
              height: 200,
              width: 300,
              marginStart: 30,
            }}>
            <Text
              style={{backgroundColor: 'green', color: 'black', fontSize: 24}}>
              Modal
            </Text>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>
              The name is:{name}
            </Text>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>
              The age is:{age}
            </Text>
            <View style={{width: 300, marginTop: 50}}>
              <Button title="close" onPress={Close} />
            </View>
          </View>
        </View>
      </Modal>
    
      <Text>new page found.</Text>
      <Text>{name}</Text>
      <Text>{data}</Text>
      <Text>{age}</Text>
      <Text>{condition}</Text>
      <Button title="open" onPress={Open} />

      <TextInput placeholder="Enter"  onChangeText={text => setNewData(text)} />
      <FlatList data={users} renderItem={({item})=><View style={{justifyContent:'space-between',flexDirection:'row',margin:5,backgroundColor:'green', height:50}}><Text style={{paddingStart:10, paddingTop:10, color:'white', fontSize:24,fontWeight:'bold'}}>{item.name} </Text>
      <Button title="delete" />
      </View>}
      keyExtractor={(item)=>item.id}
      />
      </View>
      
      
      
     
 
     
     
  );
};
export default Page;
