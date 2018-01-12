import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, TouchableWithoutFeedback, ListView } from 'react-native';
import { Button } from 'react-native-elements';
import ImageHeader from '../components/Header';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import SelectHorse from '../components/selectHorse';
import { userFetch, horsesFetch, showSelectHorse, hideSelectHorse, selectedHorse } from '../actions';

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
            borderColor: '#9B9B9D',
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
          </View>}
        <TouchableWithoutFeedback onPress={this.onClickOut}>
          <View style={{ position: 'absolute', top: 0, zIndex: 10, flex: 1 }}>
            <Text>New Trainings New Trainings New Trainings</Text>
            <Text>New Trainings New Trainings New Trainings</Text>
            <Text>New Trainings New Trainings New Trainings</Text>
            <Text>New Trainings New Trainings New Trainings</Text>
            <Text>New Trainings New Trainings New Trainings</Text>
            <Text>New Trainings New Trainings New Trainings</Text>
            <Text>New Trainings New Trainings New Trainings</Text>
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
    , justifyContent: 'center', alignItems: 'center', marginTop: 20
  },
  containerCross: {
    marginLeft: 5,
    flexDirection: 'row', alignItems: 'center',
  }
};
const mapStateToProps = state => {

  const horses = _.map(state.horses, (val, uid) => {
    return { ...val, uid };
  });
  return { horses, horse: state.horse };
};
export default connect(mapStateToProps, {
  userFetch, horsesFetch, showSelectHorse
  , hideSelectHorse, selectedHorse
})(Home);