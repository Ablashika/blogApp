import React from 'react'
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, FlatList,
} from 'react-native';
import gold from '../../assets/gold.jpg'
import wall from '../../assets/wall.jpg'
import water from '../../assets/water.jpg'
import palm from  '../../assets/palm.jpg'
import hair from '../../assets/hair.jpg'


export default function Blog({navigation}) {

    
    const blogs = [
        { image:palm,title:"palm RED HGFF GEWF ye gjhjh jhg uy wyfg",name:"bashiru", time:". 2 seconds read", imagetwo:hair},
        { image: water,title:"mond iwjf uefyg",name:"bashiru", time:"* 2 seconds read", imagetwo:hair   },
        { image:gold,title:"ngsf duf ef eiwig ywq yew ewufh",name:"bashiru", time:"* 2 seconds read", imagetwo:hair  },
        { image:wall,title:" wghjwg jkw jwhqf ulqwhft",name:"bashiru", time:"* 2 seconds read", imagetwo:hair },
    ] 

    return (



 <View style={styles.container}>



         <View style={styles.icons}>
        </View>
    

        

        
      
        <View style={styles.imageBox}>
          
<FlatList
           data = {blogs}
           renderItem={({item})=> {
               return (
                <View style={styles.description}>
                <Image source={item.image} style={styles.image}/>
         <TouchableOpacity 
          onPress={()=>{
            navigation.navigate("Read")
        }} 
        style={styles.text}
         style={styles.boxOne}>
         <Text style={styles.descriptionText}>{item.title} </Text>
                <View style={styles.profile}><Image source={item.imagetwo} style={styles.imagetwo}/>
                    <Text style={styles.nameText}> {item.name}</Text>
                   <Text style={styles.timeText}>{item.time}</Text>
                <Text man hfgi fygqtwgiu et euwt iurt uyaf yfwy iuetfg isey gf iegf uyfzvbvbbbvvbg></Text>
               </View>
         </TouchableOpacity>
            </View>
               )
           }}
           keyExtractor = {(item)=>item.title}
           />  
       
    </View> 
             
</View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:"#f5f9fa",
        height:600,
        width:350,
        marginTop:-15 ,
        marginHorizontal:10
           
    },

    image:{
        height:130,
        width:100,
        marginTop:15
    },

    description:{
        flexDirection:"row",
        alignContent:"center",
       
       
    },

    descriptionText:{
        fontWeight:"bold",
        marginLeft:10,
        marginTop:10,
      
    },

    imagetwo:{
        height:20,
        width:20,
        borderRadius:15,
       marginTop:2
    },

    profile:{
        flexDirection:"row",
        marginRight:10,
        marginTop:70,
        
     
    },

    boxOne:{
       
        marginHorizontal:10,
        width:210,
       

    },


nameText:{
    marginLeft:10,
    marginTop:2,
    color:'grey',
    marginRight:20
},

timeText:{
    marginTop:4,
    fontSize:10
}



    })
  