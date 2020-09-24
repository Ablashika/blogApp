import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import gold from '../../assets/gold.jpg'
import { EvilIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import hair from '../../assets/hair.jpg'


 
export default function Read({navigation}) {
    return (
<View style={styles.container}>

    <View  style={styles.pinkBox}>
        
       <View style={styles.iconRead} >
              
              
            <TouchableOpacity 
                onPress={()=>
                    navigation.navigate("Blog")
                }
              ><MaterialIcons name="keyboard-arrow-left" size={32} color="black" />
              <View style={styles.textBox}><Text style={styles.text}>Beauty</Text>
                </View>
            </TouchableOpacity>
              
              

           <View  style={styles.iconsfour} > 
              <View style={styles.iconsthree}><Feather name="headphones" size={20} color="black" /></View>
              <View style={styles.iconsthree}><Ionicons name="md-heart-empty" size={20} color="black" /></View>
             <View style={styles.iconsthree}><Feather name="share-2" size={20} color="black" /></View>
            </View>

          
        </View>

           
    </View>  
        <View style={styles.imageBox}> 
            <Image source={gold} style={styles.image}/></View>
            
        <View style={styles.textTwo}><Text style={styles.text}>the new way of becoming extra size in the news of jjwui hwf</Text>

        <View><Image source={hair} style={styles.imagetwo}/>
        <Text style={styles.nameText} >Bashiru *seconds ago</Text>
        <Text style={styles.textContent}> man hfgi fygqtwgiu et euwt iurt uyaf yfwy iuetfg isey gf iegf uyfzvbvbbbvvbg</Text>
          
        </View>

        

    </View>
 
</View>
  
  
  )
}

const styles = StyleSheet.create({
    container: {
         height:600,
        width:350,
        marginHorizontal:10,
        marginTop:30
    },

    image:{
        height:280,
        width:280,

        
    },
imageBox:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:-100,
    backgroundColor:"white",
    height:300,
    width:300,
    marginHorizontal:30

},
pinkBox:{
    backgroundColor:"#f587d2",
    height:200,
    width:240,
    marginTop:-40,
    marginHorizontal:-20
},

iconsTwo:{
   
  },

  iconRead:{
    flexDirection:"row",
    height:50,
    width:100,
    marginTop:25,
    marginLeft:15,
 

    
  },

  iconsthree:{
  marginLeft:15
  },
  iconsfour:{
       flexDirection:"row",
     marginLeft:160,
      width:180,

     },

     textBox:{
         marginTop:-25,
         marginLeft:28
     },

     text:{
         fontWeight:"bold",
         fontSize:17
     },
     textTwo:{
         height:100,
        width:300,
       marginLeft:40,
       marginTop:20
     },

     imagetwo:{
        height:20,
        width:20,
        borderRadius:15,
       marginTop:5
    },


    nameText:{
        marginLeft:30,
        marginTop:-18,
        color:'grey',
        marginRight:20
    },

textContent:{
    marginTop:20,
    fontWeight:"bold",
    color:"grey",
    fontSize:15
}
})