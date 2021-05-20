import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { Icon } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';

function CheckMail() {
    btnPress =(hey ) => {
        alert('cheee')
    }
    return (
        <>
        <SafeAreaView></SafeAreaView>
        <View 
        style={styles.container}
        >

            <View 
            style={styles.iconContainer}
            >
        <Icon
        name='inbox'
        type='font-awesome'
        color='#8000ff'
        size={64}
        />
            </View>
            <Text 
            style={styles.bigtxt}>
                Check your mail
                </Text>
            <Text 
            style={styles.smalltxt}>
                We have sent a password recover</Text>
            <Text 
            style={styles.smalltxt}>
                instructions to your email.
                </Text>
    <Pressable 
    style={styles.button} 
    onPress={btnPress}> 
    <Text 
    style={styles.btnText}>
        Open mail app
        </Text>
    </Pressable>
    <Text 
    style={styles.smalltxt} >
        Skip, I'll confirm later
        </Text> 
    <View 
    style={styles.btmtext}> 
    <Text 
    style={styles.smalltxt}>
        Did not recieve the email? Check your spam filter,
        </Text>
    <Text 
    style={styles.purpleTxt}>
        or try another email address
        </Text>
    </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
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
      bigtxt:{
        fontSize: 22,
        lineHeight: 21,
        fontWeight: 'bold',
        color: 'black',
        marginTop: '8%',
        marginBottom: '5%'
      },
      iconContainer:{
          width: '20%',
          height: '12%%',
          borderRadius: 7,
          backgroundColor: '#e6e6ff',
          opacity: 0.7,
          alignItems: 'center',
          marginTop: '30%'
      },
      smalltxt: {
          color: '#666666'
      },
      btmtext: {
          marginTop: '65%',
          alignItems: 'center'
      },
      purpleTxt:{
          color: '#8000ff' 
      },
})


export default CheckMail;