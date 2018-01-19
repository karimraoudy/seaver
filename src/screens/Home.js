import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, TouchableWithoutFeedback, ListView } from 'react-native';
import { Button } from 'react-native-elements';
import ImageHeader from '../components/settings/Header';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import MiniModalBox from '../components/settings/miniModal';
import SelectHorse from '../components/horse/selectHorse';
import {
  userFetch, horsesFetch, showSelectHorse, hideSelectHorse, selectedHorse,
  ShowActive, HideActive
} from '../actions';


class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      header: props => <ImageHeader {...props} title="S E A V E R" menu="hammer"
        selectHorse={() => params.onClickIn()} />,
      tabBarIcon: ({ tintColor }) => (
        <View style={{
          borderRightWidth: 1, borderRightColor: '#9B9B9D',
          height: 36,
          width: 48,
          alignItems: 'center'
        }}>
          <View style={{
            borderColor: '#727274',
            borderWidth: 2,
            borderRadius: 18,
            height: 36,
            width: 36,
            alignItems: 'center'
          }}><Image
              source={require('../../image/icon/Home_LightGrey.png')}
              style={[styles.icon, { tintColor: tintColor }]}
            /></View></View>
      ),


      drawerLabel: 'START TRAINING',
      drawerIcon: ({ tintColor }) => {
        return <Icon
          name='chart-line'
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
    this.props.userFetch();
    this.props.horsesFetch();
    this.props.selectedHorse();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {

    this.createDataSource(nextProps);
  }
  createDataSource = ({ horses }) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(horses);
  }
  renderRow = (horse) => {
    return <SelectHorse horse={horse} />;
  }
  beginTraining = () => {
    this.props.ShowActive();
  }
  onClickModal = () => {
    this.props.HideActive();
    this.props.navigation.navigate('training');
  }
  render() {
    return (

      <View style={{ marginTop: 64, width: '100%', height: '100%' }}>
        {this.props.horse.showSelectHorse &&
          <View style={{ alignSelf: 'flex-end', zIndex: 20 }}>
            <View style={{ backgroundColor: '#313133', height: 300, padding: 20 }}>
              <ListView style={{ height: 220 }}
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
              />
              <TouchableWithoutFeedback onPress={() => {
                this.onClickOut();
                this.props.navigation.navigate('registerhorse')
              }
              } >
                <View style={styles.containerCross}>
                  <View style={styles.crossStyle}>
                    <Image source={require('../../image/icon/Cross_Add.png')} style={{ height: 20, width: 20 }} />
                  </View>
                  <Text style={{ color: '#515153' }}>ADD A HORSE</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => {
                this.onClickOut();
                this.props.navigation.navigate('horses')
              }}>
                <View style={styles.containerCross}>
                  <View style={styles.crossStyle}>
                    <Image source={require('../../image/icon/Cross_Add.png')} style={{ height: 20, width: 20 }} />
                  </View>
                  <Text style={{ color: '#515153' }}>HORSES LIST</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          // horses list
        }
        {
          //partie trainging
        }
        <TouchableWithoutFeedback onPress={this.onClickOut}>
          <View style={styles.homeContainer}>
            {//partie add training et calendrier
            }
            <View style={styles.traingingContainer}>
              <TouchableWithoutFeedback onPress={this.beginTraining}>
                <View style={{
                  flexDirection: 'row', alignItems: 'center', backgroundColor: '#313133', padding: 10
                  , borderWidth: 1, borderRadius: 25, justifyContent: 'space-around', width: 200
                }}>
                  <Text style={{ color: '#DEDEE0' }}>NEW TRAINING</Text>
                  <View style={[styles.crossStyle, { marginRight: 0 }]}>
                    <Image source={require('../../image/icon/Cross_Add.png')} style={{ height: 20, width: 20 }} />
                  </View>

                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('calendrier')}>
                <View style={{ borderColor: '#313133', borderWidth: 1, borderRadius: 25, alignSelf: 'center', padding: 15 }}>
                  <Text style={{ color: '#313133' }}>01-01-2018 ...</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={{ margin: 20 }}><Text style={{ color: '#a0a0a2' }}>No last training</Text></View>
            <View>
              <View style={styles.numberContainer}>
                <Text style={styles.bigNumberStyle}>00</Text><Text style={styles.smallNumberStyle}>h</Text>
                <Text style={styles.bigNumberStyle}>00</Text><Text style={styles.smallNumberStyle}>m</Text>
                <Text style={styles.bigNumberStyle}>00</Text><Text style={styles.smallNumberStyle}>s</Text>
              </View>
              <View style={styles.numberContainer}>
                <Text style={[styles.smallNumberStyle, { paddingBottom: 6 }]}>00</Text>
                <Text style={{ color: '#757577', fontSize: 20, paddingBottom: 9 }}>km</Text>
              </View>
            </View>
            {
              // 3eme partie
            }

            <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 30 }}>
              <TouchableWithoutFeedback>
                <View style={{ alignItems: 'center', margin: 20 }}>
                  <View style={styles.iconTraining}>
                    <Image source={require('../../image/icon/Heart_DarkGrey.png')}
                      style={{ height: 35, width: 35 }} />
                  </View>
                  <Text style={{ color: '#757577', fontSize: 20, fontWeight: '300' }}>0</Text>
                  <Text style={{ color: '#757577', fontSize: 13 }}>BPM</Text>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback>
                <View style={{ alignItems: 'center', margin: 20 }}>
                  <View style={styles.iconTraining}>
                    <Image source={require('../../image/icon/Calories.png')}
                      style={{ height: 35, width: 35 }} />
                  </View>
                  <Text style={{ color: '#757577', fontSize: 20, fontWeight: '300' }}>4200</Text>
                  <Text style={{ color: '#757577', fontSize: 13 }}>KCAL</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback>
                <View style={{ alignItems: 'center', margin: 20 }}>
                  <View style={styles.iconTraining}>
                    <Image source={require('../../image/icon/Speed_DarkGrey.png')}
                      style={{ height: 35, width: 35 }} />
                  </View>
                  <Text style={{ color: '#757577', fontSize: 20, fontWeight: '300' }}>10</Text>
                  <Text style={{ color: '#757577', fontSize: 13 }}>KM/H</Text>
                </View>
              </TouchableWithoutFeedback>

            </View>
            <MiniModalBox onClick={this.onClickModal}
              visible={this.props.setting.activeGpsBlue === true && this.props.setting.activeGpsBlue}>

              <Text style={{ fontSize: 18, textAlign: 'center', color: '#fff' }}>ACTIVE GPS</Text>
              <Text style={{ fontSize: 18, textAlign: 'center', color: '#fff' }}>ACTIVE BLUETOOTH</Text>

            </MiniModalBox>
          </View>
        </TouchableWithoutFeedback>
      </View>

    );
  }
}
const styles = {
  icon: {
    width: 26,
    height: 26,
  },
  crossStyle: {
    height: 30, width: 30, borderRadius: 15, marginRight: 15,
    borderWidth: 1, borderColor: '#fff'
    , justifyContent: 'center', alignItems: 'center'
  },
  containerCross: {
    marginLeft: 5,
    flexDirection: 'row', alignItems: 'center', marginTop: 20
  },
  traingingContainer: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 20,
    justifyContent: 'space-around'
  },
  homeContainer: {
    position: 'absolute', top: 0, zIndex: 10, flex: 1,
    backgroundColor: '#DEDEE0', height: '100%', width: '100%'
  },
  numberContainer: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' },
  bigNumberStyle: { color: '#757577', fontSize: 60, fontWeight: '300' },
  smallNumberStyle: { color: '#757577', fontSize: 30, paddingBottom: 11 },
  iconTraining: {
    width: 60, height: 60, borderWidth: 2, borderRadius: 30, alignItems: 'center',
    justifyContent: 'center', borderColor: '#828284', marginBottom: 6
  }
};

const mapStateToProps = state => {
  const horses = _.map(state.horses, (val, uid) => {
    return { ...val, uid };
  });
  return { horses, horse: state.horse, setting: state.setting };
};
export default connect(mapStateToProps, {
  userFetch, horsesFetch, showSelectHorse
  , hideSelectHorse, selectedHorse, ShowActive, HideActive
})(Home);