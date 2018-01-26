import React from 'react';
import { Text, View, Modal, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';

const unitsModal = ({ familly,unitImage ,visible, onClick }) => {
    const { containerStyle } = styles;
    returnUnitsImage = (unitImage, familly)=>{
        switch(unitImage){
        case('1'):
        return require('../../../image/image_units/wither_height.png');
        case('2'):
        return require('../../../image/image_units/Horses_GirthHeight.png');
        case('3'):
        return  familly === 'HORSE'? require('../../../image/image_units/Horses_UmbilicalGirth.png'):
        require('../../../image/image_units/Horses_HeartGirth.png');
        case('4'):
        return familly === 'HORSE'? require('../../../image/image_units/Length_HORSES.png'): 
        require('../../../image/image_units/Length_HORSES.png');
        default:
        return require('../../../image/image_units/shoulder_Girth.png')
        }
    }
    return (
        <Modal animationType="slide"
            onRequestClose={() => { }}
            transparent
            visible={visible}
        >
            <View style={containerStyle}>
                <ImageBackground source={returnUnitsImage(unitImage, familly)} 
                style={{ backgroundColor: '#313133', height: 400,width:300 ,justifyContent:'flex-end',
                padding:20,
                flexDirection:'row',borderRadius:15 }}
                resizeMode={'stretch'}
                >
                    <TouchableWithoutFeedback onPress={onClick} >
                    <View style={{ justifyContent: 'center', alignItems: 'center', borderColor:'#fff',
                     borderWidth:1 ,height:30,width:30, borderRadius:15}}>
                        <Image source={require('../../../image/icon/Cross_Leave.png')} 
                        style={{height:16,width:16}}/>
                    </View>
                    </TouchableWithoutFeedback>
                </ImageBackground>
            </View>
        </Modal>
    );
};
const styles = {
    containerStyle: {

        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },

}
export default unitsModal;