import react, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Icon, IconButton} from 'react-native-paper';

const NotLogin = ({navigation}) => {
  const [name, setName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [condition, setCondition] = useState(true);
  const [PhoneNumberError, setPhoneNumberError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [NameRegex, setNameRegex] = useState(false);
  const nameRegex = /^[a-zA-Z\s]+$/;
  const [lengthError, setLengthError] = useState(false);
  const [phonelengthError, setPhoneLentthError] = useState(false);
  const [passwordlengtherror, setPasswordlengtherror] = useState(false);
  const [passwordvalidation, setPasswordvalidation] = useState(false);
  const tpassword = password.trim();
  const tname = password.trim();
  const tphonenumber = PhoneNumber.trim();
  const regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  // post method in api
  const SaveInApi = async () => {
    try {
      const url = 'http://10.0.2.2:3000/userData';
      let result = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, PhoneNumber, password}),
      });
      result = await result.json();
      if (result) {
        console.warn('user added');
        navigation.navigate('login');
      } else {
        console.warn('error');
      }
    } catch (error) {
      console.warn('network type error', error);
    }
  };

  // function is here to Validate the user
  const Validation = () => {
    if (!name) {
      setNameError(true);
      return false;
    } else {
      setNameError(false);
    }
    if (!nameRegex.test(name)) {
      setNameRegex(true);
      return false;
    } else {
      setNameRegex(false);
    }

    if (name.length <= 2) {
      setLengthError(true);
      return false;
    } else {
      setLengthError(false);
    }
    if (!PhoneNumber) {
      setPhoneNumberError(true);
      return false;
    } else {
      setPhoneNumberError(false);
    }
    if (PhoneNumber.length === 10) {
      setPhoneLentthError(false);
    } else {
      setPhoneLentthError(true);
      return false;
    }
    if (!password) {
      setPasswordError(true);
      return false;
    } else {
      setPasswordError(false);
    }
    if (password.length < 5) {
      setPasswordlengtherror(true);
      return false;
    } else {
      setPasswordlengtherror(false);
    }
    if (regex.test(password)) {
      setPasswordvalidation(false);
    } else {
      setPasswordvalidation(true);
      return false;
    }

    if (
      !name ||
      !PhoneNumber ||
      !password ||
      !nameRegex.test(name) ||
      name.length <= 2 ||
      PhoneNumber.length === 10
    ) {
      console.warn('Cannot navigate. Please check the form.');
    } else {
      console.warn('added');
    }

    SaveInApi();
  };

  // function scope complete here
  return (
    <View>
      <ImageBackground
        source={require('./src/sigup.jpg')}
        style={{height: '100%', width: '100%'}}
      />
      <View style={{position: 'absolute'}}>
        <View style={{marginStart: 100, marginTop: 20}}>
          <Text style={{color: 'white', fontSize: 50, fontWeight: 'bold'}}>
            Registration
          </Text>
          <View style={{marginStart: 30}}>
            <Text
              style={{fontSize: 20, color: 'whitesmoke', fontWeight: 'bold'}}>
              Create new account
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            marginTop: 20,
            height: '100%',
            borderTopLeftRadius: 130,
          }}>
          <View>
            <View style={{marginTop: 20, marginStart: 100}}>
              <Text
                style={{fontSize: 50, fontWeight: 'bold', color: 'darkgreen'}}>
                {' '}
                Welcome
              </Text>
              <View style={{marginStart: 33}}>
                <Text
                  style={{fontSize: 18, color: '#8b4513', fontWeight: 'bold'}}>
                  Fill form for signup
                </Text>
              </View>
            </View>
            <View style={styles.sigup}>
              <TextInput
                placeholder="Enter your name"
                value={name}
                autoCapitalize="words"
                onChangeText={text => setName(text)}
                style={styles.input}
              />
              {nameError ? (
                <View>
                  <Text style={{fontSize: 20, color: 'red', marginStart: 30}}>
                    Please enter name
                  </Text>
                </View>
              ) : null}
              {lengthError ? (
                <View>
                  <Text style={{fontSize: 20, color: 'red', marginStart: 30}}>
                    Invalid name
                  </Text>
                </View>
              ) : null}
              {NameRegex ? (
                <View>
                  <Text style={{fontSize: 20, color: 'red', marginStart: 30}}>
                    Invalid name: Use only letters and spaces
                  </Text>
                </View>
              ) : null}
              <TextInput
                placeholder="Enter your Phone Number"
                maxLength={10}
                keyboardType={'number-pad'}
                value={PhoneNumber}
                onChangeText={text => setPhoneNumber(text)}
                style={styles.input}
              />
              {PhoneNumberError ? (
                <View>
                  <Text style={{fontSize: 20, color: 'red', marginStart: 30}}>
                    Please enter valid PhoneNumber
                  </Text>
                </View>
              ) : null}

              {phonelengthError ? (
                <View>
                  <Text style={{fontSize: 20, color: 'red', marginStart: 30}}>
                    Please enter valid PhoneNumber
                  </Text>
                </View>
              ) : null}

              <View style={styles.wraper}>
                <View>
                  <TextInput
                    placeholder="Enter Password"
                    secureTextEntry={condition}
                    maxLength={21}
                    style={styles.password}
                    value={password}
                    onChangeText={text => setPassword(text)}
                  />
                </View>
                <View style={{flexDirection: 'row'}}>
                  {condition ? (
                    <View>
                      <TouchableOpacity onPress={() => setCondition(false)}>
                        <View>
                          <Text
                            style={{
                              fontSize: 24,
                              marginRight: 10,
                            }}>
                            Show
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View>
                      <TouchableOpacity onPress={() => setCondition(true)}>
                        <View>
                          <Text
                            style={{
                              fontSize: 24,
                              marginRight: 10,
                            }}>
                            Hide
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
              {passwordError ? (
                <View>
                  <Text style={{fontSize: 20, color: 'red', marginStart: 30}}>
                    Please enter password
                  </Text>
                </View>
              ) : null}

              {passwordlengtherror ? (
                <View>
                  <Text style={{fontSize: 20, color: 'red', marginStart: 30}}>
                    password length is to short
                  </Text>
                </View>
              ) : null}

              {passwordvalidation ? (
                <View>
                  <Text style={{fontSize: 20, color: 'red', marginStart: 30}}>
                    Password must contain atlest one digit, lowecase, Uppercase
                    and special character.
                  </Text>
                </View>
              ) : null}
            </View>
            <View>
              <View style={{margin: 50, marginStart: 30, flex: 1}}>
                <TouchableOpacity style={styles.Touch} onPress={Validation}>
                  <View>
                    <Text
                      style={{
                        fontSize: 26,
                        paddingStart: 125,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      Register
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  password: {
    fontSize: 24,
    padding: 10,
  },
  wraper: {
    height: 50,
    width: 375,
    borderRadius: 30,
    backgroundColor: '#808080',
    margin: 10,
    marginStart: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    marginStart: 20,
    marginRight: 30,
    margin: 10,
    borderRadius: 30,
    fontSize: 24,
    paddingStart: 10,
    backgroundColor: '#808080',
  },
  sigup: {
    marginTop: 20,
  },
  Touch: {
    height: 40,
    width: 350,
    borderRadius: 30,
    borderColor: 'darkgreen',
    borderWidth: 2,
    backgroundColor: 'darkgreen',
  },
});
export default NotLogin;
