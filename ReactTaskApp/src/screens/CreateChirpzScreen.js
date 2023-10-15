import React,{ useState, useContext, createContext} from 'react';
import { View, Dimensions, Text, TextInput, StyleSheet } from 'react-native';
import NavHeader from '../components/header';
import Colors from '../constants/Colors';
import NavPost from '../components/NavPost';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { setStIsStateUpdate } from '../slice/stateSlice';
import { useDispatch } from 'react-redux';

export default function ScCreateChirpzScreen(props){

    const dispatch = useDispatch();


    const [ stResponseStatus, setStResponseStatus] = useState(false)
    const [ stCaption, setStCaption ] = useState('')
    const [ stTags, setStTags ] = useState('')
    const [ stTagsArr, setStTagsArr ] = useState([])
    const tagsArr = []
    // const stUpdate = useContext()


    const onBackClick =()=>{
        props.navigation.pop()
    }
   

    const onClickPost = ()=>{

        if(stCaption !== null && stCaption !== ""){

            var rawBody = JSON.stringify({
                "userName": "priya",
                "caption": stCaption,
                "tags": stTagsArr
            })

            var headerOption = new Headers();
            headerOption.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'POST',
                headers: headerOption,
                body: rawBody,
                redirect : 'follow'
            };

            fetch("http://192.168.1.109:4000/api/v1/posts",requestOptions)
            .then((response)=> response.json())
            .then((result)=>{

                    {result.status=== true &&
                        dispatch(setStIsStateUpdate(true))   
                    }

                    { result.status === true &&
                        props.navigation.pop()                     
                    }}
            )
                    
            .catch(error=>console.log(error))

        }
    }

    const onAddClick =()=>{

        tagsArr.push(stTags)
        setStTagsArr(tagsArr)
    }


    return(
        <View style={Styles.container}>
            <NavPost onClickPost={onClickPost} backClick={onBackClick}/>
            
            <View style={{marginTop: 40}}>
                <Text style={Styles.styText}>Create</Text>
                <TextInput
                    style={Styles.styTextInput}
                    placeholder="What's on your mind?"
                    placeholderTextColor={Colors.PLACE_HOLDER}
                    onChangeText={value => setStCaption(value)}
                />
            </View>

            <View style={{marginTop: 40}}>

                <Text style={Styles.styText}>Add Tags</Text>
                
                <View style={Styles.styViewAdd}>
                    <TextInput
                        style={Styles.styTextInput}
                        placeholder="Write tags"
                        placeholderTextColor={Colors.PLACE_HOLDER}
                        onChangeText={value => setStTags("#"+value)}
                    />

                    <TouchableOpacity onPress={()=> onAddClick()}>
                        <Text style={Styles.styAdd}>Add</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={{   
                    borderBottomColor: Colors.UNDERLINE,
                 borderBottomWidth: 1
            }}></View>
           

        </View>
    );
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        margin : 20
    },
    styText:{
        fontSize: 20,
        fontWeight : '800',
        color : Colors.TEXT_HEADER
    },
    styTextInput:{
        fontSize : 20,
        marginTop : 5,
        width : Dimensions.get('window').width -100,
        color: Colors.TEXT_HEADER
    },
    styAdd :{marginTop: 5,fontSize:18,fontWeight: '700', 
    color: Colors.TEXT_HEADER},
    styViewAdd :{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}
})