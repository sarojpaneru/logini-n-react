import react, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Registration = ({navigation}) => {
  const [condition, setCondition] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passowrdError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [invalidError, setInvalidError] = useState(false);
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = valid.test(email);
  const [togglePasswrod, setTogglePassword] = useState(true);

  const ShowHide = () => {
    setTogglePassword(!togglePasswrod);
  };

  const Checked = () => {
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!age) {
      setAgeError(true);
    } else {
      setAgeError(false);
    }
    if (!email) {
      setEmailError(true);
    } else if (isValid) {
      setInvalidError(false);
    } else {
      setEmailError(false);
      setInvalidError(true);
    }
    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (!name || !age || !email || !isValid || !password) {
      return false;
    } else {
      navigation.navigate('verify', {name, email, age, password});
    }
  };
  return (
    <View>
      <View style={{marginStart: 100, marginTop: 10}}>
        <Text style={{fontSize: 24, color: 'balck', fontWeight: 'bold'}}>
          Registration Page
        </Text>
      </View>
      <View style={styles.inputwraper}>
        <TextInput
          placeholder="Enter name"
          autoCapitalize="words" 
          style={styles.textinput}
          value={name}
          onChangeText={text => setName(text)}
        />
        {nameError ? (
          <View style={{marginStart: 20}}>
            <Text style={{fontSize:16, color:"red"}}>please Enter the name</Text>
          </View>
        ) : null}
        <TextInput
          placeholder="Enter age"
          style={styles.textinput}
          value={age}
          maxLength={3}
          keyboardType={'number-pad'}
          onChangeText={text => setAge(text)}
        />
        {ageError ? (
          <View style={{marginStart: 20}}>
            <Text style={{fontSize:16, color:"red"}}>please Enter the age</Text>
          </View>
        ) : null}
        <TextInput
          placeholder="Enter email"
          style={styles.textinput}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        {emailError ? (
          <View style={{marginStart: 20}}>
            <Text style={{fontSize:16, color:"red"}}>please Enter the email</Text>
          </View>
        ) : null}
        {invalidError ? (
          <View>
            <Text style={{color: 'red', marginStart: 20}}>Invalid Email</Text>
          </View>
        ) : null}
        <View style={styles.makeup}>
          <TextInput
            placeholder="Enter password"
            style={styles.textinput123}
            secureTextEntry={togglePasswrod}
            maxLength={20}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity onPress={ShowHide}>
            <View>
              <Text style={{color:'black', fontSize:17}}>{ togglePasswrod? "Show": "Hide"}</Text>
            </View>
          </TouchableOpacity>
        </View>
        {passowrdError ? (
          <View>
            <Text style={{color: 'red', marginStart: 20, fontSize:16}}>
              Please enter the password
            </Text>
          </View>
        ) : null}

        <View style={{flexDirection: 'column', marginStart: 20}}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.gender}
                onPress={() => setCondition(true)}>
                {condition === true ? (
                  <View style={styles.gender1}></View>
                ) : null}
              </TouchableOpacity>
              <Text style={{margin: 5, fontWeight: 'bold', color: 'black'}}>
                Female
              </Text>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.gender}
                onPress={() => setCondition(false)}>
                {condition === false ? (
                  <View style={styles.gender1}></View>
                ) : null}
              </TouchableOpacity>
              <Text style={{margin: 5, fontWeight: 'bold', color: 'black'}}>
                Male
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}></View>
          </View>
        </View>
        <View>
          <Text
            style={{
              marginStart: 25,
              marginTop: 5,
              color: 'black',
              fontWeight: 'bold',
              fontSize:15
            }}>
            Select Gender
          </Text>
        </View>
      </View>
      <View style={{margin: 20}}>
        <TouchableOpacity style={styles.touch} onPress={Checked}>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                padding: 3,
                paddingStart: 13,
                elevation:20,

              }}>
              submit
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputwraper: {
    margin: 10,
  },
  makeup:{
    flexDirection:'row',
    height:55,
    borderColor:'black',
    borderRadius:10,
    borderWidth:2,
    marginStart:10,
    margin:10,
    alignItems:'center',
    

  },
  textinput123:{
    fontSize: 24,
    color: 'black',
    marginStart: 10,
    margin: 10,
    padding:1,
    width:300,
  },
  textinput: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    fontSize: 24,
    color: 'black',
    marginStart: 10,
    margin: 10,
    padding: 10,
    flexDirection:'row',
  },
  touch: {
    borderWidth: 2,
    borderColor: 'pink',
    borderRadius: 20,
    backgroundColor: 'green',
    width: 100,
    height: 40,
  },
  gender: {
    height: 30,
    width: 30,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
    margin: 4,
  },

  gender1: {
    height: 22,
    width: 22,
    borderRadius: 11,
    marderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'green',
    margin: 2,
  },
});
export default Registration;
