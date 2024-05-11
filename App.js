import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.pic}source={require("./assets/img.png")}></Image>
      <Text style={styles.text}>John Doe</Text>
      <Text style={styles.text1}>@JhnDoe</Text>
      <Text style={styles.word}>
          WEB DEVELOPER / MOBILE APP DEVELOPER / CYCODE INC
        </Text>



      <StatusBar style="auto" />

    <TouchableOpacity style={styles.button}>
      <View style={styles.btn}>
        <Text style={styles.txt}>178 FOLLOWING</Text>
      </View>
      <View style={styles.btn1}>
        <Text style={styles.txt}>987K FOLLOWERS </Text>
      </View>

    </TouchableOpacity>

    <View style={styles.box}>
      <Text style={styles.txt}>Please Follow My Account</Text>
    </View>

    <View style={styles.images}>
      <Image style={styles.image} source={require('./assets/end.jpg')} />
      <Image style={styles.image} source={require('./assets/code.jpg')}/>

      </View> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#002',
  },
  pic:{
    height:150,
    width:150,
    marginTop:100,
    marginLeft:130,
    borderRadius: Math.round(Math.sqrt(300 * 300))
  },


  btn:{
    borderRadius:8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'orange',
    width:190,
    marginLeft:10,
    marginTop:20,
  },
  btn1:{
    borderRadius:8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'red',
    width:190,
    marginLeft:10,
    marginTop:20,
  },

  txt:{
    color:'#fff',
    textTransform:'uppercase',
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold',
  },
  button:{
    flexDirection:'row',
  },
  text:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:30,
    marginTop:10,
    color:'#fff'
  },
  text1:{
    textAlign:'center',
    fontSize:15,
    marginTop:10,
    color:'#fff'
  },
  word:{
    marginTop:10,
    marginLeft:8,
    color:'#fff',
    fontWeight:'bold',
  },

  box:{
    borderRadius:8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'orange',
    width:390,
    marginLeft:10,
    marginTop:20,
    
    
  },

  images:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:'space-between',
    marginLeft:25,
    marginTop:30,
    marginRight:30,
  },

  image:{
    width:170,
    height:350,
    borderRadius:20,
  }


});
