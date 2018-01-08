import React, { Component } from 'react';
import _ from 'lodash';
import ListItem from '../components/ListItem';
import Confirm from '../components/Confirm';
import { Text, View, TouchableWithoutFeedback, ListView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { beginHorseCreation, horsesFetch, showHorse, hideConfirm, horseDelete } from '../actions';
import Icon from 'react-native-vector-icons/Ionicons';

class Horses extends Component {
  componentWillMount() {
    this.props.horsesFetch();
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }
  createDataSource({ horses }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(horses);
  }
  renderRow(horse) {
    return <ListItem horse={horse} />;
  }
  onAccept = () =>{
    this.props.horseDelete(this.props.horse.idTodelete);
  }
  onDecline = ()=>{
    this.props.hideConfirm();
    }
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'HORSES',
    drawerIcon: ({ tintColor }) => {
      return <Icon
        name='ios-close-circle-outline'
        color={'#727274'}
        size={15}
        type='simple-line-icon'
      />;
    }

  });
  render() {
    return (
      <View style={{ marginTop: 90 }}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        >

        </ListView>

        <TouchableWithoutFeedback onPress={() => {
          this.props.beginHorseCreation();
          this.props.navigation.navigate('registerhorse')
        }}>
          <View style={styles.containerCross}>
            <View style={styles.crossStyle}>
              <Image source={require('../../image/icon/Cross_Add.png')} style={{ height: 40, width: 40 }} />
            </View>
            <Text style={{ color: 'grey' }}>ADD A HORSE</Text>
          </View>

        </TouchableWithoutFeedback>
        <Confirm visible={this.props.horse.showConfirm} onAccept={this.onAccept} 
        onDecline={this.onDecline}/>
      </View>

    );
  }
}
const mapStateToProps = state => {
  const horses = _.map(state.horses, (val, uid) => {
    return { ...val, uid };
  });
  return { horses, horse:state.horse };
};

const styles = {
  crossStyle: {
    height: 70, width: 70, borderRadius: 35,
    borderWidth: 1, borderColor: '#ACACAE', marginRight: 20
    , justifyContent: 'center', alignItems: 'center'
  },
  containerCross: {
    padding: 25,
    flexDirection: 'row', alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderTopColor: 'grey',
    borderTopWidth: 1,
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  }
}
export default connect(mapStateToProps, { beginHorseCreation, horsesFetch, hideConfirm, horseDelete })(Horses);
