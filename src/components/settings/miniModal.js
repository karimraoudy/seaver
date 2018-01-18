import React from 'react';
import { Text, View, Modal } from 'react-native';
import { Button } from 'react-native-elements';
const MiniModalBox = ({ children, visible, onClick }) => {
    const { textSectionStyle, TextStyle, containerStyle } = styles;
    return (
        <Modal animationType="slide"
            onRequestClose={() => { }}
            transparent
            visible={visible}
        >
            <View style={containerStyle}>
                <View style={{ backgroundColor: '#484949', height: 150, width:260 , borderRadius:25}}>
                    <View style={textSectionStyle}>
                        {children}
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Button onPress={onClick} title="OK"
                            buttonStyle={{ width: 70, backgroundColor: 'transparent',
                             borderColor: '#fff', borderWidth: 1, padding: 5 }} borderRadius={20}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};
const styles = {
    containerStyle: {

        position: 'relative',
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    },
    textSectionStyle: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        marginBottom:20

    }
}
export default MiniModalBox;