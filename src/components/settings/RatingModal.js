import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import StarRating from 'react-native-star-rating';
class RatingModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 3.5
        };
    }

    onStarRatingPress = (rating) => {
        this.setState({
            starCount: rating
        });
    }
    render() {
        const { textSectionStyle, TextStyle, containerStyle } = styles;
        return (
            <Modal animationType="slide"
                onRequestClose={() => { }}
                transparent
                visible={this.props.visible}
            >
                <View style={containerStyle}>
                    <View style={{ backgroundColor: '#484949', height: 230, width: 230, borderRadius: 25 }}>
                        <View style={textSectionStyle}>
                            <Text style={{ textAlign: 'center', color: '#ACACAE', width: 180 }}>DO YOU WANT TO RATE YOUR TRAINING?</Text>
                        </View>
                        <View style={{ alignItems: 'center' ,marginTop:20,marginBottom:30}}>
                            <View style={{ width: 140 }}>
                                <StarRating
                                    disabled={false}
                                    maxStars={5}
                                    starColor={'#ACACAE'}
                                    starSize={25}
                                    rating={this.state.starCount}
                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                />
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Button onPress={this.props.onClick} title="SAVE"
                                buttonStyle={{
                                    width: 160, backgroundColor: '#ACACAE',
                                    borderColor: '#ACACAE', borderWidth: 1, padding: 5
                                }} borderRadius={20} color={'#484949'}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
};
const styles = {
    containerStyle: {

        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSectionStyle: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20

    }
}
export default RatingModal;