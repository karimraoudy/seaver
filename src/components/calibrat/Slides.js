import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';

const  SCREEN_WIDTH = Dimensions.get('window').width;
class Slides extends Component {
    renderLastSlide(index){
        if( index === this.props.data.length -1){
            return (
                <Button 
                title="OnWards !"
                raised
                buttonStyle={styles.buttonStyles}
                onPress={this.props.onComplete}
                />
            );
        }
    }
    renderSlides(){
        return this.props.data.map((slide, index)=>{
           return ( 
               <View key={slide.text} 
               style={[styles.slide,{backgroundColor: slide.color}]}>
                <Text style={styles.textStyle}>{slide.text}</Text>
                {this.renderLastSlide(index)}
                </View>);
        });
    }
    render(){
        return (
            <ScrollView
            horizontal
            pagingEnabled
            style={{ flex:1 }}
            >
            {this.renderSlides()}
            </ScrollView>
        );
    }
}
const styles ={
    textStyle:{
        fontSize: 30,
        color: '#fff',
        textAlign:'center',
        marginBottom: 15
    },
    slide:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        width: SCREEN_WIDTH
    },
    buttonStyles:{
        backgroundColor:'#0288d1',
        
    }
}
export default Slides;