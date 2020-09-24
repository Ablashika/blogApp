import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Blog from './src/screens/Blog';
import Read from './src/screens/Read';
import { EvilIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



const Stack = createStackNavigator()


class App extends Component {
 


  render() {
    return (
      <NavigationContainer>

      <Stack.Navigator>

         <Stack.Screen  
            options={{
              title:"Discover",
              headerStyle:{
                backgroundColor:"white"
              },
              headerTintColor:"black",
              headerTitleAlign:"center",
    
              headerRight:()=>(
                <View style={styles.icons} ><EvilIcons name="search" size={24} color="black" /></View>
              ),
    
              headerLeft:()=>(
                <View style={styles.iconsTwo} ><Fontisto name="nav-icon-grid-a" size={24} color="black" /></View>
              )  
              
            }}
         name="Blog" component={Blog}/>

         <Stack.Screen
         
         options={ {
           header:()=>null,
          title:"Beauty",
          headerStyle:{
            backgroundColor:"white"
          },
          headerTintColor:"black",
          headerTitleAlign:"left",
          
          headerRight:()=>(
            <View style={styles.iconRead} >
              <View style={styles.iconsthree}><Feather name="headphones" size={24} color="black" /></View>
              <View style={styles.iconsthree}><Ionicons name="md-heart-empty" size={24} color="black" /></View>
             <View style={styles.iconsthree}><Feather name="share-2" size={24} color="black" /></View>
            </View>
          ),

          // headerLeft:()=>(
          //   <View style={styles.iconsTwo} ></View>
          // ) 
          
        }
          
         }
         name="Read" component={Read}/>
         
         
      
  
  </Stack.Navigator>

    </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor:"#f5f9fa",
      height:600,
      width:350,
      marginTop:-15    
  },

  icons:{
   marginRight:10
  },

  iconsTwo:{
    marginHorizontal:10
  },

  iconRead:{
    flexDirection:"row",
    
  },

  iconsthree:{
    margin:10
  }
})


export default App