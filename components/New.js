import react, {useState} from 'react';
import {View, Text, TextInput , Button, StyleSheet, TouchableOpacity} from 'react-native';


const New = ({navigation}) => {
  const [data, setData] = useState('something');
  let [name, setName] = useState('saroj');
  const [age, setAge] = useState(25);
  const [condition, setCondition] = useState('');
  const [userpassword, setUserpassword] = useState('');
  const [randomNumber, setRandomNumber]=useState('9098');

  const Go = () => {
    {
      randomNumber == userpassword
        ? navigation.navigate('page', {name, data, age, condition})
        : console.warn("error")
    }
  };

  const RandomNumberGenerator=()=>{
    const newRandomNumber = Math.floor(Math.random() * 9000) + 1000;
    setRandomNumber(newRandomNumber);


  }


  return (
    <View style={styles.container}>
         <Text
          style={{fontSize: 24, fontWeight: 'bold', color: 'blue', margin: 10}}>
          Enter Password to go next page
        </Text>

      <View style={styles.container1}>
     
        <TextInput
          style={{marginLeft: 20, marginRight: 20, fontSize: 20}}
          placeholder="Enter password"
          onChangeText={text => setUserpassword(text)}
        />
        <View>
        
        <TouchableOpacity onPress={Go} >
          <View style={{ borderColor:'green', borderWidth:2, borderRadius:10, height:50, width:70}}>
            <Text style={{fontSize:20, padding:10}}>
              Next
            </Text>
          </View>
        </TouchableOpacity>
        </View>
      
      </View>
      
      <View>
       
        <View>
          <Text style={{fontSize:30, color:'black'}}> OTP is: <Text style={{color:'red', fontWeight:'bold'}}>{randomNumber}</Text></Text>
        </View>

        <Button title="Press For Number" onPress={RandomNumberGenerator}/>
      </View>
     
     
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
   flexDirection:"row",
   borderRadius:10,
   borderWidth:2,
   borderColor:'black',
   alignItems:'center',
   justifyContent:'space-between',
  },
  but: {
    marginBottom: 2,
    color: 'green',
  },
});
export default New;
