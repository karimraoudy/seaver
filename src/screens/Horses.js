import React, { Component } from 'react';
import _ from 'lodash';
import ListItem from '../components/ListItem';
import Confirm from '../components/Confirm';
import { Text, View, TouchableWithoutFeedback, ListView, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import SelectHorse from '../components/selectHorse';
import {
  beginHorseCreation, horsesFetch, showHorse, hideConfirm, horseDelete,
  showSelectHorse, hideSelectHorse
} from '../actions';
import ImageHeader from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

class Horses extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      header: props => <ImageHeader {...props} title="MY HORSES" menu="hammer"
        selectHorse={() => params.onClickIn()} />,
      tabBarIcon: ({ tintColor }) => (

        <View style={{
          borderColor: '#9B9B9D',
          borderWidth: 2,
          borderRadius: 18,
          height: 36,
          width: 36,
          alignItems: 'center',
          marginLeft: 40
        }}><Image
            source={require('../../image/icon/Home_LightGrey.png')}
            style={{ tintColor: tintColor, height: 26, width: 26 }}
          /></View>
      ),
      tabBarOnPress: (scene, jumpToIndex) => {
        navigation.navigate('home')
      },
      drawerLabel: 'HORSES',
      drawerIcon: ({ tintColor }) => {
        return <Icon
          name='ios-close-circle-outline'
          color={'#727274'}
          size={15}
          type='simple-line-icon'
        />;
      }

    }
  };
  onClickIn = () => {
    this.props.showSelectHorse();
  }
  onClickOut = () => {
    this.props.hideSelectHorse();
  }
  componentDidMount() {
    this.props.navigation.setParams({ onClickIn: this.onClickIn })
  }
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
  SelectRenderRow = (horse) => {
    return <SelectHorse horse={horse} />;
  }
  renderRow(horse) {
    return <ListItem horse={horse} />;
  }
  onAccept = () => {
    this.props.horseDelete(this.props.horse.idTodelete);
  }
  onDecline = () => {
    this.props.hideConfirm();
  }

  render() {
    return (
      <View  style={{ marginTop: 64, width: '100%', height: '100%' }}>
        {//select horse
          this.props.horse.showSelectHorse &&
          <View style={{ alignSelf: 'flex-end', zIndex: 20 }}>
            <View style={{ backgroundColor: '#313133', height: 300, padding: 20 }}>
              <ListView style={{ height: 220 }}
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.SelectRenderRow}
              />
              <TouchableWithoutFeedback onPress={() => {
                this.onClickOut();
                this.props.navigation.navigate('registerhorse')}} >
                <View style={styles.miniContainerCross}>
                  <View style={styles.miniCrossStyle}>
                    <Image source={require('../../image/icon/Cross_Add.png')} style={{ height: 20, width: 20 }} />
                  </View>
                  <Text style={{ color: '#515153' }}>ADD A HORSE</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() =>
                 { this.onClickOut();
                   this.props.navigation.navigate('horses')}} >
                <View style={styles.miniContainerCross}>
                  <View style={styles.miniCrossStyle}>
                    <Image source={require('../../image/icon/Cross_Add.png')} style={{ height: 20, width: 20 }} />
                  </View>
                  <Text style={{ color: '#515153' }}>HORSES LIST</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          //select Horse
        }
        <TouchableWithoutFeedback onPress={this.onClickOut}>
          <View style={{ position: 'absolute', top: 0, zIndex: 10, flex: 1,width: '100%', height: '100%'  }}>
          <ScrollView >

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
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
        <Confirm visible={this.props.horse.showConfirm} onAccept={this.onAccept}
          onDecline={this.onDecline} />
      </View>

    );
  }
}
const mapStateToProps = state => {
  const horses = _.map(state.horses, (val, uid) => {
    return { ...val, uid };
  });
  return { horses, horse: state.horse };
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
  },
  miniCrossStyle: {
    height: 30, width: 30, borderRadius: 15, marginRight: 15,
    borderWidth: 1, borderColor: '#fff'
    , justifyContent: 'center', alignItems: 'center', marginTop: 20
  },
  miniContainerCross: {
    marginLeft: 5,
    flexDirection: 'row', alignItems: 'center',
  }
}
export default connect(mapStateToProps, {
  beginHorseCreation, horsesFetch, hideConfirm,
  horseDelete, showSelectHorse, hideSelectHorse
})(Horses);
