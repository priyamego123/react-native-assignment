import React,{ useState, useEffect, useContext} from 'react';
import { View, FlatList, Text, Dimensions, StyleSheet } from 'react-native';
import NavHeader from '../components/header';
import FAB from '../components/fab';
import Colors from '../constants/Colors';
import { useSelector } from 'react-redux';
import { selectIsStateUpdate } from '../slice/stateSlice';

export default function ScHomeScreen(props){

    const [ stResponse, setStResponse ] = useState([]);
    const [ stIsLoading, setStIsLoading ] = useState(false)
    const postUpdate = useSelector(selectIsStateUpdate)

    console.log("selectIsStateUpdate-------",postUpdate)
 
    useEffect(()=>{
       
        getData()
        
    },[postUpdate])

    function getData (){
        setStIsLoading(true)
        fetch("http://192.168.1.109:4000/api/v1/posts?_sort=createdAt&_order=desc")
            .then((response)=> response.json())
            .then((result)=> 

             {   
                setStResponse(result.body)
                setStIsLoading(false)
            
             }
            )
            .catch(error => console.log('error ----',error))
        }


    const onFabClick = ()=>{
        props.navigation.navigate('ScCreateChirpzScreen')

    }


    const renderItem = ( {item} ) => (
        <View style={Styles.renderStyle}>
         
          
            <Text style={Styles.txtUserName}>{item.userName}</Text>

            <Text style={Styles.txtCaption}>{item.caption}</Text>

            <View style={Styles.tagView}>

                {item.tags && item.tags.map((item,index)=>{
                    console.log(item)
                    return(
                        <View style={{marginRight:12,}}>
                        <View style={Styles.tags}>
                            <Text style={{color:'#CFD7E7'}}>{item}</Text>
                        </View>

                        </View> 
                    
                    )
                })
                    }
                </View> 
            
        </View>
      );

      const separatorItem =(()=>(
            <View style={{  
                    marginTop: 20,
                    width : Dimensions.get('window').width, 
                    borderBottomColor: Colors.UNDERLINE,
                borderBottomWidth: 1
            }}></View>   
      ))

      const onRefresh =()=>{
            setStIsLoading(true)

            getData()
      }

    return(
        <View style={{flex:1}}>


            {stIsLoading ?
                <View style={Styles.stLoader}>
                    <Text style={{color:Colors.TEXT_HEADER}}>Loading...</Text>
                </View>
                :
            
            <View style={{flex:1}}>

                <FlatList
                    onRefresh={onRefresh}
                    refreshing={stIsLoading}
                    data={stResponse}
                    renderItem={renderItem}
                    ItemSeparatorComponent={separatorItem}
                    keyExtractor={item => item.id.toString()}
                    extraData={postUpdate}

                />
            </View>}

            <View style={Styles.FAB}>
                    <FAB onFabClick={onFabClick}/>
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    stLoader:{
        flex:1, justifyContent:'center',alignItems:'center'
    },
    txtUserName:{
        color:'#fff', fontSize:16, fontWeight:'700'
    },
    FAB:{
        width: 50,  
        height: 50,   
        borderRadius: 25,            
        backgroundColor: '#ee6e73',                                    
        position: 'absolute',                                          
        bottom: 30,                                                    
        right: 20
    },
    txtCaption : {
        color:'#A6B6D6', fontSize:14, marginTop: 20
    },
    tagView:{
        flex:1,flexDirection:'row',width : Dimensions.get('window').width - 40,
    },
    tags:{
        paddingHorizontal:10,
        marginTop: 20, 
        paddingVertical:5,
        borderRadius: 5,backgroundColor:'#28395A'
    },
    renderStyle:{
        marginTop: 30,
        width : Dimensions.get('window').width - 40,
        marginHorizontal : Dimensions.get('window').width - 390 
    }

})