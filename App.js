import react, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/IsLogin';
import NotLogin from './components/NotLogin';
import Otp from './components/Opt';
import NewHome from './components/Newhome';

const App = () => {
  const Stack = createNativeStackNavigator();
  const [islogin, setIsLogin] = useState(true);
  const [data, setData] = useState([]);

  // Api call code
  /*
  const CallApi= async()=>{
    try{
    const url= "https://reactnavigation.org/docs/auth-flow";
    let result=  await fetch (url);
    result= await result.text();
    console.warn(result);
    setData(result);
    }catch(error){
      console.warn('Error while fetching the data form api: ', error);
    }}
  useEffect(()=>{
    CallApi();
  },[])
  */
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {islogin ? (
          <>
            <Stack.Screen
              name="login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="signup"
              component={NotLogin}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
        <Stack.Screen
          name="otp"
          component={Otp}
          options={{headerShown: false}}
        />
        <Stack.Screen name="home" component={NewHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
