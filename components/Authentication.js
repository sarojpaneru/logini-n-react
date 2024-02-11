import react, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
const Authentication = () => {
  const [data, setData] = useState([]);
  const [isLogin, setIsLogin]=useState(false);
  const GetApiDAta = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    GetApiDAta();
  }, []);

  return (
    <View>
      {
        data.length?
        <View>
          <FlatList 
          data={data}
          renderItem={({item})=>
          <View>
            <Text>{item.id}</Text>
            <Text>{item.body}</Text>
          </View>}
          
          />
        </View>:null
      }
     
    </View>
  );
};
export default Authentication;
