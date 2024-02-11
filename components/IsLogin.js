import react, {useEffect, useState} from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = ({navigation}) => {
  const [condition, setCondition] = useState(true);
  const [alldata, setAlldata] = useState([]);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navi = useNavigation();

  const GetApiData = async () => {
    
    try {
      const url = 'http://10.0.2.2:3000/userData';
      let result = await fetch(url);
      result = await result.json();
      setAlldata(result);

      const matchedUser = result.find(
        item => item.name === name && item.password === password,
      );
      if (matchedUser) {
        navigation.navigate('otp', {phoneNumber: matchedUser.PhoneNumber});
      } else {
        console.warn('Invalid credentials');
      }
    } catch (error) {
      console.error('Error fetching api data:', error);
    }
  };

  useEffect(() => {
    const back = navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      Alert.alert('Back clicked');
    });
    return back;
  }, [navi]);

  return (
    <View>
      <ImageBackground
        source={require('./src/sigup.jpg')}
        style={{height: '100%', width: '100%'}}
      />
      <View style={{position: 'absolute'}}>
        <View>
          <Text
            style={{
              fontSize: 50,
              color: 'white',
              fontWeight: 'bold',
              paddingStart: 100,
              margin: 20,
            }}>
            Login
          </Text>
        </View>
        <View
          style={{
            height: 700,
            width: 500,
            backgroundColor: 'white',
            borderTopLeftRadius: 150,
          }}>
          <View style={{marginVertical: 10}}>
            <View style={{marginStart: 50, marginTop: 40}}>
              <Text
                style={{fontSize: 50, color: 'darkgreen', fontWeight: 'bold'}}>
                Welcome Back 
              </Text>
              <View style={{marginStart: 50, marginBottom: 40}}>
                <Text style={{fontSize: 24, color: 'gray', fontWeight: 'bold'}}>
                  {' '}
                  Login to your account{' '}
                </Text>
              </View>
            </View>
            <View>
              <TextInput
                placeholder="Enter Username"
                value={name}
                onChangeText={text => setName(text)}
                style={styles.input}
              />
              <View style={styles.warper}>
                <View>
                  <TextInput
                    value={password}
                    onChangeText={text => setPassword(text)}
                    placeholder="Enter Password"
                    secureTextEntry={condition}
                    style={{fontSize: 24, paddingStart: 10, padding: 8}}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {condition ? (
                    <View>
                      <TouchableOpacity onPress={() => setCondition(false)}>
                        <Text
                          style={{
                            fontSize: 24,
                            paddingRight: 10,
                          }}>
                          Show
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View>
                      <TouchableOpacity onPress={() => setCondition(true)}>
                        <Text
                          style={{
                            fontSize: 24,
                            paddingRight: 10,
                          }}>
                          Hide
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <View style={{marginStart: 220}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'darkgreen',
                  }}>
                  Forgot Passsword?
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginStart: 40,
              marginTop: 100,
              display: 'flex',
              alignContent: 'center',
            }}>
            <TouchableOpacity style={styles.opacity} onPress={GetApiData}>
              <View>
                <Text
                  style={{
                    fontSize: 24,
                    color: 'white',
                    margin: 1,
                    paddingStart: 35,
                    fontWeight: 'bold',
                    paddingTop: 1,
                    paddingStart: 135,
                  }}>
                  Login
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginStart: 90, marginTop: 5}}>
            <Text style={{fontWeight: 'bold', color: 'darkgray'}}>
              {' '}
              Don't have an account?{' '}
            </Text>
            <View>
              <TouchableOpacity>
                <View>
                  <Text style={{fontWeight: 'bold', color: 'darkgreen'}}>
                    Signup
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  opacity: {
    height: 40,
    width: 335,
    borderRadius: 30,
    borderColor: 'black',
    backgroundColor: 'darkgreen',
  },
  input: {
    height: 50,
    width: '70%',
    margin: 10,
    borderRadius: 40,
    marginStart: 30,
    fontSize: 24,
    padding: 10,
    backgroundColor: '#808080',
  },
  warper: {
    height: 50,
    width: 350,
    borderRadius: 30,
    margin: 10,
    marginStart: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#808080',
  },
});
export default Login;
