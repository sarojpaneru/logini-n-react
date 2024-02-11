import react, {useEffect, useRef, useState} from 'react';
import styles from './Styles';
import {
  View,
  Text,
  BackHandler,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
const Otp = ({navigation, route}) => {
  const {phoneNumber} = route.params || {};
  const otpInput1Ref = useRef();
  const otpInput2Ref = useRef();
  const otpInput3Ref = useRef();
  const otpInput4Ref = useRef();
  const [seconds, setSeconds] = useState(20);
  const [first, setFirst] = useState('');
  const [two, setTwo] = useState('');
  const [third, setThird] = useState('');
  const [four, setFour] = useState('');
  const [digits, setDigits] = useState(null);
  const [number, setNumber] = useState('1111');

  const GenerateOtp = () => {
    const digits = Math.floor(Math.random() * 9000) + 1000;
    setNumber(digits.toString());
    setFirst('');
    setTwo('');
    setThird('');
    setFour('');
    setSeconds(10);
  };
  useEffect(() => {
    console.warn(' The number is updated', number);
  }, [number]);

  //for otp verification
  const userEnteredOtp = first + two + third + four;
  const Verify = () => {
    console.log(number);
    console.log(userEnteredOtp);
    if (userEnteredOtp === number && seconds > 0) {
      navigation.navigate('home');
      Alert.alert('Login Sucessful');
    } else if (userEnteredOtp === number && seconds <= 0) {
      Alert.alert('Session Expire try again');
    } else {
      Alert.alert('Wrong OTP Entered');
    }
  };

  // prevent navigation to previous screen code

  const navi = useNavigation();
  useEffect(() => {
    const back = navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      Alert.alert('Back clicked');
    });
    return back;
  }, [navi]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  // handle Verification

  return (
    <View>
      <ImageBackground
        source={require('./src/sigup.jpg')}
        style={{height: '100%', width: '100%'}}
      />
      <View style={{position: 'absolute'}}>
        <View style={{marginTop: 30, marginStart: 160}}>
          <Text style={{color: 'white', fontSize: 50, fontWeight: 'bold'}}>
            OTP
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            marginTop: 30,
            height: 700,
            width: 412,
            borderTopLeftRadius: 150,
          }}>
          <View style={{marginStart: 130, marginTop: 20}}>
            <Text
              style={{fontSize: 40, fontWeight: 'bold', color: 'darkgreen'}}>
              Welcome
            </Text>
          </View>
          <View style={styles.top}>
            <Text
              style={{
                fontSize: 16,
                marginStart: 60,
                color: '#8b4513',
                fontWeight: 'bold',
              }}>
              OTP is Sent to:{' '}
            </Text>
            <Text style={{fontSize: 16, color: '#9acd32', fontWeight: 'bold'}}>
              {phoneNumber}
            </Text>
          </View>
          <View style={styles.head}>
            <View>
              <Text style={styles.text}>Enter OTP before </Text>
            </View>
            <View>
              {seconds === 0 ? null : (
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'darkgreen',
                  }}>
                  {seconds}
                </Text>
              )}
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              marginLeft: 60,
              marign: 20,
              flexDirection: 'row',
              alignContent: 'center',
            }}>
            <TextInput
              ref={otpInput1Ref}
              style={[
                styles.tinput,
                {borderColor: first.length >= 1 ? 'blue' : 'black'},
              ]}
              maxLength={1}
              keyboardType="number-pad"
              value={first}
              onChangeText={text => {
                setFirst(text);
                if (text.length === 1) {
                  otpInput2Ref.current.focus();
                } else if (text <= 1) {
                  otpInput1Ref.current.focus();
                }
              }}
            />
            <TextInput
              ref={otpInput2Ref}
              style={[
                styles.tinput,
                {borderColor: two.length >= 1 ? 'blue' : 'black'},
              ]}
              maxLength={1}
              keyboardType="number-pad"
              value={two}
              onChangeText={text => {
                setTwo(text);
                if (text.length === 1) {
                  otpInput3Ref.current.focus();
                } else if (text <= 1) {
                  otpInput1Ref.current.focus();
                }
              }}
            />
            <TextInput
              ref={otpInput3Ref}
              style={[
                styles.tinput,
                {borderColor: third.length >= 1 ? 'blue' : 'black'},
              ]}
              maxLength={1}
              keyboardType="number-pad"
              value={third}
              onChangeText={text => {
                setThird(text);
                if (text.length === 1) {
                  otpInput4Ref.current.focus();
                } else if (text <= 1) {
                  otpInput2Ref.current.focus();
                }
              }}
            />
            <TextInput
              ref={otpInput4Ref}
              style={[
                styles.tinput,
                {borderColor: four.length >= 1 ? 'blue' : 'black'},
              ]}
              maxLength={1}
              keyboardType="number-pad"
              value={four}
              onChangeText={text => {
                setFour(text);
                if (text.length === 1) {
                  otpInput4Ref.current.focus();
                } else if (text <= 1) {
                  otpInput3Ref.current.focus();
                }
              }}
            />
          </View>
          <View>
            <TouchableOpacity
              disabled={
                first.length === 1 &&
                two.length === 1 &&
                third.length === 1 &&
                four.length === 1
                  ? false
                  : true
              }
              style={[
                styles.touch,
                {
                  backgroundColor:
                    first.length === 1 &&
                    two.length === 1 &&
                    third.length === 1 &&
                    four.length === 1
                      ? 'green'
                      : 'gray',
                },
              ]}
              onPress={Verify}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text
                  style={{
                    color: 'whitesmoke',
                    fontWeight: 'bold',
                    paddingTop: 5,
                    fontSize: 24,
                  }}>
                  verify
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            {seconds === 0 ? (
              <TouchableOpacity style={styles.touch1} onPress={GenerateOtp}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      paddingTop: 5,
                      fontSize: 24,
                    }}>
                    resend
                  </Text>
                </View>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>
    </View>
  );
};
export default Otp;
