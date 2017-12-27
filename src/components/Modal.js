import  React  from 'react';
import {Text, View, Modal }  from 'react-native';
import {Button} from 'react-native-elements';
const ModalBox = ({ visible, onClick }) =>{
    const {textSectionStyle,TextStyle,containerStyle}= styles;
    return (
        <Modal animationType="slide"
        onRequestClose={()=>{}}
        transparent
        visible={visible}
        >
        <View style={containerStyle}>
        <View style={{backgroundColor: '#484949', height:'45%'}}>
        <View style={textSectionStyle}>
        <Text style={TextStyle}>An email Has been sent to you with a link to reset your password</Text>
        </View>
        <View style={{justifyContent:'center', alignItems:'center'}}>
        <Button onPress={onClick} title="OK" 
        buttonStyle={{width:100, backgroundColor: 'transparent',borderColor:'#fff',borderWidth:1, padding:5}} borderRadius={20} 
        />
        </View>
        </View>
        </View>
        </Modal>
    );
};
const styles={
    containerStyle:{
        
        position:'relative',
        flex:1,
        justifyContent:'center'
    },
    textSectionStyle:{
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems:'center'
        
    },
    TextStyle:{
        fontSize:18,
        textAlign: 'center',
        lineHeight: 40,
        width:270,
        color:'#fff',
        marginTop:'15%',
        marginBottom:'15%',
    }
}
export default ModalBox;