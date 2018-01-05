import React, {Component} from 'react';
import { Text, View, ScrollView ,TouchableOpacity, Image} from 'react-native';
import {Button , FormInput, FormLabel, CheckBox, Icon } from 'react-native-elements';
import {connect} from 'react-redux';
import {nameChanged,yearChanged,breedChanged,genderChanged,famillyChanged,
  withersChanged,girthFloorChanged,heartGirthChanged,lengthChanged,shoulderGirthChanged,
  trainedChanged,isNervousChanged, horseCreate, updateHorse} from '../actions';

class HorseForm extends Component {
 state ={
   mare: this.props.horse.gender === 'MARE'? true:false,
   stallion:this.props.horse.gender === 'STALLION'? true:false,
   gelding:this.props.horse.gender === 'GELDING'? true:false,
   horse: this.props.horse.familly === 'HORSE'? true:false,
   pony:this.props.horse.familly === 'PONY'? true:false,
   full: this.props.horse.trained === 'FULLY'? true:false,
   medium:this.props.horse.trained === 'MEDIUM'? true:false,
   nottrained:this.props.horse.trained === 'NOT TRAINED'? true:false,
   nervous:this.props.horse.isNervous === 'YES'? true:false,
   notnervous:this.props.horse.isNervous === 'NO'? true:false
 }
  onNameChange = (name) =>{
    this.props.nameChanged(name);
  }
  onYearChange = (year)=>{
    this.props.yearChanged(year);
  } 
  onBreedChange= (breed)=>{
    this.props.breedChanged(breed);
  }
  onWithersChange = (withers)=>{
    this.props.withersChanged(withers);
  }
  onGirthFloorChange =(girthFloor)=>{
    this.props.girthFloorChanged(girthFloor);
  }
  onheartGirthChange =(heartGirth)=>{
    this.props.heartGirthChanged(heartGirth);
  }
  onLengthChange = (length)=>{
    this.props.lengthChanged(length);
  }
  onshoulderGirthChange = (shoulderGirth)=>{
    this.props.shoulderGirthChanged(shoulderGirth)
  }
  onSubmit =()=>{
    const{horsename,birth,breed, gender,familly,withers,girthFloor,heartGirth,
      length,shoulderGirth,trained,isNervous,id} = this.props.horse;
      if(id){
        this.props.updateHorse({horsename,birth,breed, gender,familly,withers,girthFloor,heartGirth,
          length,shoulderGirth,trained,isNervous, id});
          this.props.navigation.navigate('horseedit');
      }else{
        this.props.horseCreate({horsename,birth,breed, gender,familly,withers,girthFloor,heartGirth,
          length,shoulderGirth,trained,isNervous});
        this.props.navigation.navigate('horseedit');
      }
    
  }
  render() {
    const {horsename,birth,breed, withers,girthFloor,heartGirth,length,shoulderGirth} = this.props.horse;
    return (
      <ScrollView style={{marginTop:80}}>

      <View style={styles.containerStyle}>
      <View style={{justifyContent:'center', alignItems:'center', margin:15}}>
        <TouchableOpacity 
          style={styles.avatarStyle}>
          <Image source={require('../../image/icon/Avatar_Horse.png')}
            style={{borderColor:'#fff', borderWidth:1,width:100, height:100, 
          borderRadius:50}}/>
        </TouchableOpacity>
      </View>

        <View style={{ marginBottom: 20}}>
          <FormInput
          placeholder="NAME"
          value={horsename}
          onChangeText={this.onNameChange}
          placeholderTextColor={'#fff'}
          inputStyle={styles.inputFormStyle}
          containerStyle={styles.containerFormStyle}
        />
        </View>

        <View style={{ marginBottom: 20 }}>
          <FormInput
             placeholder="YEAR OF BIRTH"
             value={birth}
             onChangeText={this.onYearChange}
            inputStyle={styles.inputFormStyle}
            containerStyle={styles.containerFormStyle}
            keyboardType={'numeric'}
            />
        </View>

        <View style={{ marginBottom: 20 }}>
          <FormInput
          placeholder="BREED"
          value={breed}
          onChangeText={this.onBreedChange}
           inputStyle={styles.inputFormStyle}
          containerStyle={styles.containerFormStyle}
           
          />
        </View>

    </View>
    
    <View style={{borderBottomColor: '#BEC0C0' , marginLeft:35,marginRight:35, borderBottomWidth: 2,marginBottom:20}} />
      {/*FORM 2*/}
    
    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center',paddingLeft:20,paddingRight:20}}>
        <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'grey'}}>MARE</Text>
            <CheckBox
          iconType='ionicon'
          checkedIcon='ios-radio-button-on'
          uncheckedIcon='ios-radio-button-off'
          checked={this.state.mare}
          onPress={()=>{
            this.setState({mare:true,gelding:false,stallion:false});
            this.props.genderChanged('MARE');
          }}
          checkedColor={'grey'}
          containerStyle={{backgroundColor:'transparent', borderColor:'transparent',
          width:22, margin:0,padding:0}}
          />
        </View>
        <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'grey'}}>STALLION</Text>
            <CheckBox
            iconType='ionicon'
            checkedIcon='ios-radio-button-on'
            uncheckedIcon='ios-radio-button-off'
            checked={this.state.stallion}
            onPress={()=>{
              this.setState({mare:false,gelding:false,stallion:true});
              this.props.genderChanged('STALLION');
            }}
            checkedColor={'grey'}
            containerStyle={{backgroundColor:'transparent', borderColor:'transparent',
            width:22, margin:0,padding:0}}
            />
        </View>
        <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'grey'}}>GELDING</Text>
          <CheckBox
          iconType='ionicon'
          checkedIcon='ios-radio-button-on'
          uncheckedIcon='ios-radio-button-off'
          checked={this.state.gelding}
          onPress={()=>{
            this.setState({mare:false,gelding:true,stallion:false});
            this.props.genderChanged('GELDING');
          }}
          checkedColor={'grey'}
          containerStyle={{backgroundColor:'transparent', borderColor:'transparent',
            width:22, margin:0,padding:0}}
          />
        </View>
    </View>
    

    <View style={{borderBottomColor: '#BEC0C0' , marginLeft:35,marginRight:35,
     borderBottomWidth: 2,marginBottom:20,marginTop:20}} />
      {/*FORM 3*/}
      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center',marginRight:45}}>
          <Text style={{color:'grey'}}>HORSE</Text>
          <CheckBox
        iconType='ionicon'
        checkedIcon='ios-radio-button-on'
        uncheckedIcon='ios-radio-button-off'
        checked={this.state.horse}
        onPress={()=>{
          this.setState({horse:true,pony:false});
          this.props.famillyChanged('HORSE');
        }}
        checkedColor={'grey'}
        containerStyle={{backgroundColor:'transparent', borderColor:'transparent',
        width:22, margin:0,padding:0}}
        />
      </View>
      <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Text style={{color:'grey'}}>PONY</Text>
          <CheckBox
          iconType='ionicon'
          checkedIcon='ios-radio-button-on'
          uncheckedIcon='ios-radio-button-off'
          checked={this.state.pony}
          onPress={()=>{
            this.setState({horse:false,pony:true});
            this.props.famillyChanged('PONY');
          }}
          checkedColor={'grey'}
          containerStyle={{backgroundColor:'transparent', borderColor:'transparent',
          width:22, margin:0,padding:0}}
          />
      </View>
      </View>
      <View style={{borderBottomColor: '#BEC0C0' , marginLeft:35,marginRight:35,
      borderBottomWidth: 2,marginBottom:20,marginTop:20}} />
       {/*FORM 4*/}
       <View style={[styles.containerStyle,{padding:30,paddingRight:10}]}>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
              <TouchableOpacity style={{ marginRight:30}}><Icon type='octicon' name="question" color='grey'/></TouchableOpacity>
              <Text style={styles.textStyle}>WITHERS HEIGHT</Text>
              <FormInput placeholder='0CM'  
              value={withers}
              onChangeText={this.onWithersChange}
              keyboardType={'numeric'}
              inputStyle={[styles.inputFormStyle,{color:'black' ,fontSize:13}]} placeholderTextColor={'black'}
              containerStyle={[styles.containerFormStyle,{width:50,marginBottom:10}]}/>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
              <TouchableOpacity style={{ marginRight:30}}><Icon type='octicon' name="question" color='grey'/></TouchableOpacity>
              <Text style={styles.textStyle}>HEIGHT GIRTH-FLOOR</Text>
              <FormInput placeholder='0cm'  
              value={girthFloor}
              onChangeText={this.onGirthFloorChange}
              keyboardType={'numeric'}
              inputStyle={[styles.inputFormStyle,{color:'black' ,fontSize:13}]} placeholderTextColor={'black'}
              containerStyle={[styles.containerFormStyle,{width:50,marginBottom:10}]}/>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
              <TouchableOpacity style={{ marginRight:30}}><Icon type='octicon' name="question" color='grey'/></TouchableOpacity>
              <Text style={styles.textStyle}>HEART GIRTH</Text>
              <FormInput placeholder='0cm'
              value={heartGirth}
              onChangeText={this.onheartGirthChange}
              keyboardType={'numeric'}
              inputStyle={[styles.inputFormStyle,{color:'black' ,fontSize:13}]} placeholderTextColor={'black'}
              containerStyle={[styles.containerFormStyle,{width:50,marginBottom:10}]}/>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
              <TouchableOpacity style={{ marginRight:30}}><Icon type='octicon' name="question" color='grey'/></TouchableOpacity>
              <Text style={styles.textStyle}>LENGTH</Text>
              <FormInput placeholder='0cm'  
              value={length}
              onChangeText={this.onLengthChange}
              keyboardType={'numeric'}
              inputStyle={[styles.inputFormStyle,{color:'black' ,fontSize:13}]} placeholderTextColor={'black'}
              containerStyle={[styles.containerFormStyle,{width:50,marginBottom:10}]}/>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
              <TouchableOpacity style={{ marginRight:30}}><Icon type='octicon' name="question" color='grey'/></TouchableOpacity>
              <Text style={styles.textStyle}>SHOULDER-GIRTH LENGTH</Text>
              <FormInput placeholder='0cm' 
              value={shoulderGirth}
              onChangeText={this.onshoulderGirthChange}
              keyboardType={'numeric'}
              inputStyle={[styles.inputFormStyle,{color:'black' ,fontSize:13}]} placeholderTextColor={'black'}
              containerStyle={[styles.containerFormStyle,{width:50,marginBottom:10}]}/>
          </View>
          <View style={{alignItems:'center', justifyContent:'space-around' 
          ,backgroundColor:'#fff',marginTop:20,marginRight:20 , height:40, borderColor:'#fff', borderRadius:20}}>
          <Text style={{color:'grey', fontSize:12}}>APPROXIMATIVE WEIGHT: kg </Text></View>
       </View>
       <View style={{borderBottomColor: '#BEC0C0' , marginLeft:35,marginRight:35,
      borderBottomWidth: 2,marginBottom:20,marginTop:20}} />
       {/*FORM 5*/}
       <View style={styles.containerStyle}>
       <View style={{justifyContent:'center', alignItems:'center',margin:15}}><Text style={{color:'#fff'}}>HOW MUCH IS YOUR HORSE TRAINED?</Text></View>
       <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center',paddingLeft:20,paddingRight:20}}>
        <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'grey'}}>FULLY</Text>
            <CheckBox
          iconType='ionicon'
          checkedIcon='ios-radio-button-on'
          uncheckedIcon='ios-radio-button-off'
          checked={this.state.full}
          onPress={()=>{
            this.setState({full:true,medium:false,nottrained:false});
            this.props.trainedChanged('FULLY');
          }}
          checkedColor={'grey'}
          containerStyle={{backgroundColor:'transparent', borderColor:'transparent',
          width:22, margin:0,padding:0}}
          />
        </View>
        <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'grey'}}>MEDIUM</Text>
            <CheckBox
            iconType='ionicon'
            checkedIcon='ios-radio-button-on'
            uncheckedIcon='ios-radio-button-off'
            checked={this.state.medium}
          onPress={()=>{
            this.setState({full:false,medium:true,nottrained:false});
            this.props.trainedChanged('MEDIUM');
          }}
            checkedColor={'grey'}
            containerStyle={{backgroundColor:'transparent', borderColor:'transparent',
            width:22, margin:0,padding:0}}
            />
        </View>
        <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'grey'}}>NOT TRAINED</Text>
          <CheckBox
          iconType='ionicon'
          checkedIcon='ios-radio-button-on'
          uncheckedIcon='ios-radio-button-off'
          checked={this.state.nottrained}
          onPress={()=>{
            this.setState({full:false,medium:false,nottrained:true});
            this.props.trainedChanged('NOT TRAINED');
          }}
          checkedColor={'grey'}
          containerStyle={{backgroundColor:'transparent', borderColor:'transparent',
            width:22, margin:0,padding:0}}
          />
        </View>
        </View>
        <View style={{justifyContent:'center', alignItems:'center',margin:15}}><Text style={{color:'#fff'}}>IS YOUR HORSE NERVOUS?</Text></View>
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center',marginRight:45}}>
          <Text style={{color:'grey'}}>YES</Text>
          <CheckBox
        iconType='ionicon'
        checkedIcon='ios-radio-button-on'
        uncheckedIcon='ios-radio-button-off'
        checked={this.state.nervous}
        onPress={()=>{
          this.setState({nervous:true,notnervous:false});
          this.props.isNervousChanged('YES');
        }}
        checkedColor={'grey'}
        containerStyle={{backgroundColor:'transparent', borderColor:'transparent',
        width:22, margin:0,padding:0}}
        />
      </View>
      <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Text style={{color:'grey'}}>NO</Text>
          <CheckBox
          iconType='ionicon'
          checkedIcon='ios-radio-button-on'
          uncheckedIcon='ios-radio-button-off'
          checked={this.state.notnervous}
        onPress={()=>{
          this.setState({nervous:false,notnervous:true});
          this.props.isNervousChanged('NO');
        }}
          checkedColor={'grey'}
          containerStyle={{backgroundColor:'transparent', borderColor:'transparent',
          width:22, margin:0,padding:0}}
          />
      </View>
      </View>
       </View>
       <View style={{alignItems:'center'}}>
          <Button title="DONE" 
          containerViewStyle={{width:'60%'}}
          borderRadius={20}
          onPress={this.onSubmit}/>
        </View>
      </ScrollView>
    );
  }
}
const styles = {
  containerStyle:{
    backgroundColor: '#ACACAE',
    margin:30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ACACAE',
  },
  avatarStyle:{borderColor:'#fff', borderWidth:1,width:100, height:100, 
  borderRadius:50, justifyContent:'center', alignItems:'center'},
  containerFormStyle:{
    borderBottomColor:'grey',
    height:30
     
  },
  textStyle:{
    color:'grey',
    width:200
  },
  inputFormStyle:{
    color:'#fff',
    textAlign:'center',
    width:'100%'
  },
};
const mapStateToProps = (state) =>{
  return{
    horse:state.horse
  }
}
export default connect(mapStateToProps,{nameChanged,yearChanged,breedChanged,genderChanged,famillyChanged,
  withersChanged,girthFloorChanged,heartGirthChanged,lengthChanged,shoulderGirthChanged,
  trainedChanged,isNervousChanged, horseCreate, updateHorse})(HorseForm);