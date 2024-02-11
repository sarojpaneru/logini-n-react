import react, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  
} from 'react-native';
const countries = [
  {id: 1, name: 'Afaghaanistan'},
  {id: 2, name: 'Albania'},
  {id: 3, name: 'Algeria'},
  {id: 4, name: 'Andorra'},
  {id: 5, name: 'Angola'},
  {id: 6, name: 'Nepal'},
  {id: 7, name: 'India'},
  {id: 8, name: 'China'},
  {id: 9, name: 'America'},
  {id: 10,name: 'Brazil'},
  {id: 11,name: 'Canada'},
  {id: 12,name: 'Australia'},
];

const Verify = () => {
  const [toggle, setToggle] = useState(false);
  const [display, setDisplay] = useState('Press Show');
  const [data, setData] = useState(countries);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(Name);

  const Name = [
    {id: 1, marks: 50, name: 'Amir'},
    {id: 2, marks: 5, name: 'Amit'},
    {id: 3, marks: 20, name: 'Alok'},
    {id: 4, marks: 30, name: 'Amitab'},
    {id: 5, marks: 40, name: 'Bimal'},
    {id: 6, marks: 80, name: 'Sital'},
    {id: 7, marks: 90, name: 'sita'},
    {id: 8, marks: 50, name: 'Hari'},
    {id: 9, marks: 20, name: 'Harish'},
    {id: 10, marks: 10, name: 'Ram'},
    {id: 11, marks: 34, name: 'Ramkashi'},
    {id: 12, marks: 89, name: 'shyam'},
    {id: 13, marks: 90, name: 'Mugembo'},
    {id: 14, marks: 100, name: 'Android'},
    {id: 15, marks: 1, name: 'iphone'},
  ];

  const arr = [1, 2, 3];
  const arr1 = [4, 5, 6];
  const copp = [...arr1, arr];

  const HandleSerch = text => {
    setSearch(text);

    const newName = Name.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilter(newName);
  };
  //new Double to map the
  const Double = Name.map(item => {
    return item.marks * 2;
  });

  const Nameto = Name.filter(item => {
    return item.id <= 5;
  });
  const newname = Name.filter(item => {
    return item.marks > 50;
  });
  const Onsearch = txt => {
    if (txt !== '') {
      const newData = data.filter(item => {
        return item.name.toLowerCase().indexOf(txt.toLowerCase()) > -1;
      });
      setData(newData);
    } else {
      setData(countries);
    }
  };
  return (
    <View>
      <View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.touch}>
            <Text style={{fontSize: 24, color: 'black'}}>{display}</Text>
          </TouchableOpacity>
          {toggle ? (
            <TouchableOpacity onPress={() => setToggle(!toggle)}>
              <Text style={{fontSize: 20, color: 'black'}}>Hide</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setToggle(!toggle)}>
              <Text style={{fontSize: 20, color: 'black'}}>Show</Text>
            </TouchableOpacity>
          )}
        </View>
        {toggle ? (
          <View style={styles.show}>
            <View style={styles.search}>
              <TextInput
                placeholder="Search Here"
                onChangeText={txt => Onsearch(txt)}
                style={{
                  fontSize: 20,
                  marginStart: 10,
                  color: 'black',
                  fontWeight: 'bold',
                }}
              />
            </View>
            <FlatList
              data={data}
              renderItem={({item}) => (
                <View
                  style={{
                    width: 250,
                    borderBottomColor: 'black',
                    borderBottomWidth: 2,
                    margin: 20,
                  }}>
                  <TouchableOpacity onPress={() => setDisplay(item.name)}>
                    <Text
                      style={{
                        fontSize: 24,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        ) : null}
      </View>
      <TextInput
        placeholder="Search Here"
        style={styles.place}
        value={search}
        onChangeText={HandleSerch}
      />
      <FlatList
        data={filter}
        renderItem={({item}) => (
          <View style={{ backgroundColor:'green', marginBottom:10, borderRadius:20}}>
            <TextInput style={{paddingStart:20, color:'white', fontSize:20, fontWeight:'bold'}} value={item.name}/>
          </View>
        )}
      />
      

    </View>
  );
};
const styles = StyleSheet.create({
  map: {
    flexDirection: 'column',
  },
  place: {
    padding: 10,
    height: 50,
    width: 350,
    margin: 20,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'black',
    fontSize: 24,
  },
  container: {
    margin: 20,
    height: 50,
    width: 350,
    borderColor: 'balck',
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  touch: {
    marginStart: 10,
  },
  show: {
    height: 400,
    width: 350,
    margin: 20,
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 2,
  },
  search: {
    height: 50,
    width: 300,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 20,
  },
});
export default Verify;
