import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, TextInput, Pressable  } from 'react-native';
import { Icon,} from 'react-native-elements'


function Password({ navigation }) {
  return (
    <>
    <SafeAreaView />
      <View style={styles.arrowContainer}>
      <Icon 
        name='arrow-left'
        type='font-awesome'
        color='#000000'
        size={16}
        />
        <Text> Back</Text>
      </View>
      <View style={styles.txtContainer}>
        <Text style={styles.bigTxt}>Create new password</Text>
        <Text style={styles.txts}>Your new password must be different from previous used passwords.</Text>
      </View>

  <View style={{ marginHorizontal: 12, marginTop: 40, }}>
    <Text style={{color: 'grey'}}>Password</Text>
    <TextInput
        placeholder= 'password'
        style={{ backgroundColor: "transparent", height: 45, borderRadius: 5, borderColor: "#d9d9d9", borderWidth: 1, paddingLeft: 15,marginVertical: 5 }}
          maxLength= {16}
          inlineImageRight= 'eye'
          secureTextEntry ={true} 
    />
    <Text style={{color: 'grey'}}>Must be atleast 8 characters.</Text>
     <Text style={{color: 'grey', marginTop: 16}}> Confirm Password</Text>
    <TextInput
        placeholder= 're-enter password'
        style={{ backgroundColor: "transparent", height: 45, borderRadius: 5, borderColor: "#d9d9d9", borderWidth: 1, paddingLeft: 15, marginVertical: 5 }}
          maxLength= {16}
          secureTextEntry ={true} 

    />
    <Text style={{color: 'grey'}}>Both passwords must match.</Text>
    <Pressable 
    style={styles.button} 
    onPress={() =>
      navigation.navigate('CheckMail')
    }> 
    <Text 
    style={styles.btnText}>
        Reset Password
        </Text>
    </Pressable>
  </View>

 
      


    </>



  );
}

const styles = StyleSheet.create({
  arrowContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: 13
  },
  arrow: {
    position: 'absolute',

  },
  txts: {
    width: '70%'
  },
  txtContainer:{
    alignItems: 'flex-start',
    marginHorizontal: 17
  },
  bigTxt: {
    fontSize: 22,
        lineHeight: 21,
        fontWeight: 'bold',
        color: 'black',
        marginTop: '8%',
        marginBottom: '5%'
  },
   button: {
     
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#8000ff',
    marginTop: '8%',
    marginBottom: '5%'
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})

export default Password;