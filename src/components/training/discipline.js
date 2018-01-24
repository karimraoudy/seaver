import React, {Component} from 'react';
import { Text, View , Image, ListView, ScrollView, TouchableWithoutFeedback, Platform} from 'react-native';
import ImageHeader from '../settings/Header';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {startTraining} from '../../actions';


class Discipline extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
          header: props => <ImageHeader {...props} title="DISCIPLINE" color={'#6E6E6E'}
           />,
          tabBarIcon: ({ tintColor }) => (
    
            <View style={{
              borderColor: '#9B9B9D',
              borderWidth: 2,
              borderRadius: 18,
              height: 36,
              width: 36,
              alignItems:'center', marginLeft:Platform.OS === 'ios' ?50:0
            }}><Image
                source={require('../../../image/icon/Home_LightGrey.png')}
                style={{ tintColor: tintColor, height: 26, width: 26 }}
              /></View>
          ),
          tabBarOnPress: (scene, jumpToIndex) => {
            navigation.navigate('home')
          },
    
    
        }
      };
      componentWillMount() {
        const activity =['Dressage','Jumping','Cross','Racing','Endurance','Polo','Horse-Ball','Western','Other'];
        this.createDataSource(activity);
      }
      createDataSource(activity) {
       
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(activity);
      }
      start = () =>{
        if(this.props.training.trainingName){
          this.props.navigation.navigate('synchro');
        }
      }
      renderImage =(data) =>{
        const {trainingName}= this.props.training;
        switch(data){
          case('Dressage'):
          return <Image source={trainingName === 'Dressage'?require('../../../image/icon/Discipline_Dressage_Selected.png')
          :require('../../../image/icon/Discipline_Dressage.png')} 
          style={styles.iconStyle} />;
          case('Jumping'):
          return <Image source={trainingName === 'Jumping'?require('../../../image/icon/Discipline_Jumping_Selected.png')
          :require('../../../image/icon/Discipline_Jumping.png')} style={styles.iconStyle} />;
          case('Cross'):
          return <Image source={trainingName === 'Cross'?require('../../../image/icon/Discipline_Cross_Selected.png')
          :require('../../../image/icon/Discipline_Cross.png')} style={styles.iconStyle} />;
          case('Racing'):
          return <Image source={trainingName === 'Racing'?require('../../../image/icon/Discipline_Racing_Selected.png')
          :require('../../../image/icon/Discipline_Racing.png')} style={styles.iconStyle} />;
          case('Endurance'):
          return <Image source={trainingName === 'Endurance'?require('../../../image/icon/Discipline_Endurance_Selected.png')
          :require('../../../image/icon/Discipline_Endurance.png')} style={styles.iconStyle} />;
          case('Polo'):
          return <Image source={trainingName === 'Polo'?require('../../../image/icon/Discipline_Polo_Selected.png')
          :require('../../../image/icon/Discipline_Polo.png')} style={styles.iconStyle} />;
          case('Horse-Ball'):
          return <Image source={trainingName === 'Horse-Ball'?require('../../../image/icon/Discipline_HorseBall_Selected.png')
          :require('../../../image/icon/Discipline_HorseBall.png')} style={styles.iconStyle} />;
          case('Western'):
          return <Image source={trainingName === 'Western'?require('../../../image/icon/Discipline_Western_Selected.png')
          :require('../../../image/icon/Discipline_Western.png')} style={styles.iconStyle} />;
          default:
          return <Image source={trainingName === 'Other'?require('../../../image/icon/Discipline_Other_Selected.png')
          :require('../../../image/icon/Discipline_Other.png')} style={styles.iconStyle} />;
         }
      }
  render() {
    return (
      <View style={{marginTop:50, backgroundColor:'#DEDEE0', height:'100%'}}>
          <View style={{alignItems:'center',marginTop:50,marginBottom:50}}>
          <Text style={{fontSize:21, color:'#8A8A8C'}}>Select your discipline</Text>
          </View>
         <View style={{ height: 260 , borderTopColor:'#8A8A8C',borderTopWidth:1,marginBottom:30 }}>
          <ListView 
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={(data) => <ScrollView>
            <TouchableWithoutFeedback onPress={()=>this.props.startTraining(data)}>
            <View style={[styles.disciplineContainer,{
              backgroundColor:( data === 'Dressage' || data === 'Cross' || data === 'Endurance' ||
              data === 'Horse-Ball' ||data === 'Other') ?'#D3D3D3':'#DEDEE0'
            }]}>
              <View style={styles.iconBorder}>
                {this.renderImage(data)}
              </View>
              <Text style={{fontSize:18, color:this.props.training.trainingName === data ?'black':'#8A8A8C', textAlign:'center'}}>{data}</Text>
            </View>
            </TouchableWithoutFeedback>
          </ScrollView>}
        />
        </View>
        <View style={{alignItems:'center'}}> 
        <Button title='OK' buttonStyle={{width:130}} fontSize={20} borderRadius={25} onPress={this.start}/>
        </View>
        
      </View>
    );
  }
}
const styles = {
  iconStyle: {
    height: 40,
    width: 40
  },
  iconBorder:{
    height: 40,
    width: 40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    borderColor:'#8A8A8C',
    borderWidth:1,
    margin:5,
    marginLeft:30,
    marginRight:40

  },
  disciplineContainer:{
    flexDirection:'row',
    borderBottomColor:'#8A8A8C',
    borderBottomWidth:1,
    alignItems:'center'
  }
};
const mapStateToProps = (state) =>{
  return{
    training: state.training
  }
}
export default connect(mapStateToProps,{startTraining})(Discipline);