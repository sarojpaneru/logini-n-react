import React, {useState, useEffect}from 'react';
import {View, Text, Button} from 'react-native';
import {Icon} from 'react-native-paper';

const NewHome = () => {
  const [value, setValue] = useState(4);

  useEffect(() => {
    setValue(value - 1);
  }, [value]);

  return (
    <View style={{flex: 1}}>
      <Button title="pressbutton" onPress={useEffect} />
      
      {value=== 1?
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            borderColor: 'black',
            borderWidth: 2,
          }}></View>: null
      }
     
      {value===2?
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            borderColor: 'green',
            borderWidth: 2,
          }}></View>: null
      }
      
      {value ===3?
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            borderColor: 'blue',
            borderWidth: 2,
          }}></View>:null
      }
      
      {value===4?
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            borderColor: 'red',
            borderWidth: 2,
          }}></View>:null
      }
    </View>
  );
};

export default NewHome;
