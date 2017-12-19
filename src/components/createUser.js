import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import {Button , FormInput, FormLabel, ButtonGroup  } from 'react-native-elements';
import {distanceSelected,burnCalSelected, weightSelected,
   FirstChanged, lastChanged, weightChanged, createProfil} from '../actions';

class CreateUser extends Component {

  state ={
    indexdist: 0,
    indexburn:0,
    indexweight:0
  }
  FirstChanged =(firstName) =>{
    this.props.FirstChanged(firstName)
  }
  lastChanged =(lastName) =>{
    this.props.lastChanged(lastName)
  }
  weightChanged =(weight) =>{
    this.props.weightChanged(weight)
  }
  distanceSelected = (index) =>{
    this.setState({indexdist: index});
    this.props.distanceSelected(index);
  }
  burnCalSelected = (index) =>{
    this.setState({indexburn: index});
    this.props.burnCalSelected(index);
  }
  weightSelected = (index) =>{
    this.setState({indexweight: index});
    this.props.weightSelected(index);
  }

  onSubmit=()=>{
    const { email, firstName, lastName ,weight,
    distanceUnit,
    burnUnit,
    weightUnit,
    language} = this.props.auth;
    this.props.createProfil({ email, firstName, lastName,weight, distanceUnit,
      burnUnit, weightUnit,language });
    this.props.inscriptionDone();
  }
  render() {
    return (
      
      <View style={{marginTop:80}}>
     
      <View style={styles.containerStyle}>
      <View style={{ marginBottom: 10}}>
        <FormInput
         placeholder="FIRST NAME"
         value={this.props.auth.firstName}
         onChangeText={this.FirstChanged}
         inputStyle={styles.inputFormStyle}
         containerStyle={styles.containerFormStyle}
        
        
        />
      </View>

      <View style={{ marginBottom: 10 }}>
        <FormInput
         placeholder="LAST NAME"
         value={this.props.auth.lastName}
         onChangeText={this.lastChanged}
         inputStyle={styles.inputFormStyle}
         containerStyle={styles.containerFormStyle}
         />
      </View>
      <View style={{ marginBottom: 10 }}>
      <FormInput
       placeholder="WEIGHT"
       value={this.props.auth.weight}
       onChangeText={this.weightChanged}
       inputStyle={styles.inputFormStyle}
       containerStyle={styles.containerFormStyle}
       keyboardType={'numeric'}
       />
    </View>
    </View>
    <View style={{borderBottomColor: '#BEC0C0' , marginLeft:35,marginRight:35, borderBottomWidth: 2,}} />
    
    
    <View style={styles.containerStyle}> 
    <View style={{ marginBottom: 10 }}>
    <FormInput
     placeholder="LANGUAGE"
     />
  </View>
    </View>
    <View style={{borderBottomColor: '#BEC0C0' , marginLeft:35,marginRight:35, borderBottomWidth: 2,}} />

    <View style={styles.containerStyle}>
    <View style={{ marginBottom: 10 }}>
    <FormLabel labelStyle={styles.labelStyle}>DISTANCE UNITS</FormLabel>
    <ButtonGroup
    selectedBackgroundColor="grey"
    onPress={this.distanceSelected}
    selectedIndex={this.state.indexdist}
    buttons={['MILES', 'KILOMETRES']}
    containerStyle={styles.bouttonContainerStyle} 
    selectedTextStyle={{color: '#fff'}}
    containerBorderRadius={15} />

     <FormLabel labelStyle={styles.labelStyle}>BURNED CALORIES UNITS</FormLabel>
     <ButtonGroup
     selectedBackgroundColor="grey"
     onPress={this.burnCalSelected}
    selectedIndex={this.state.indexburn}
     buttons={['Kcal', 'Kj']}
     containerStyle={styles.bouttonContainerStyle} 
     selectedTextStyle={{color: '#fff'}}
     containerBorderRadius={15}/>

     <FormLabel labelStyle={styles.labelStyle}>WEIGHT UNIT</FormLabel>
     <ButtonGroup
     selectedBackgroundColor="grey"
     onPress={this.weightSelected}
    selectedIndex={this.state.indexweight}
     buttons={['Kg', 'Pounds']}
     containerStyle={styles.bouttonContainerStyle} 
     selectedTextStyle={{color: '#fff'}}
     containerBorderRadius={15}
    
     
    />
  </View>
    </View>
    <View style={{justifyContent:'center', alignItems: 'center'}}>
    <Button title="DONE"
    onPress={this.onSubmit} 
    borderRadius={30} textStyle={{fontSize: 20 }}
    containerViewStyle={{width:200 }}
    buttonStyle={{ backgroundColor:'#757575'}}/>
    </View>
      </View>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    auth: state.auth
  }
}
const styles = {
  containerStyle:{
    backgroundColor: '#BEC0C0',
    margin:30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#BEC0C0',
  },
  containerFormStyle:{
    borderBottomColor:'#D7D8D8',
     
  },
  inputFormStyle:{
    color:'#fff',
    textAlign:'center',
    width:'100%'
  },
  labelStyle:{
    color:'#919191',
    fontSize:10,
    fontWeight:'400'
  },
  bouttonContainerStyle:{
    height: 30,
    borderRadius:15,
    borderWidth:2,
    borderColor:'#fff',
    backgroundColor:'#fff'
  }
}
export default connect(mapStateToProps,{distanceSelected,burnCalSelected, 
  weightSelected, FirstChanged, lastChanged, weightChanged, createProfil})(CreateUser);