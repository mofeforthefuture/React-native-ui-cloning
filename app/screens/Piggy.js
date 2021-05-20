import React from 'react';
import { View, StyleSheet, TextInput, Text, Pressable, Image } from 'react-native';
import { Icon, } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



function Piggy() {
    return (
        <>
            <View style={styles.background}>
                <LinearGradient
                    colors={['#99ff33', '#3399ff']}
                    style={styles.linearGradient}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            position: 'absolute',
                            bottom: '88%',
                            justifyContent: 'center',
                            alignItems: 'center',


                        }}>
                        <View
                            style={{
                                height: 40,
                                width: 40,
                                borderRadius: 20,
                                backgroundColor: 'rgba(255,255,255,0.3)',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                right: 65,
                            }}
                        >
                            <AntDesign name="close" size={24} color="#fff" />
                        </View>
                        <Text
                            style={{
                                textTransform: 'capitalize',
                                color: 'rgba(255,255,255,0.7)',
                                fontWeight: '500',
                                fontSize: 18,
                                right: 10,
                            }}
                        >Sign in to your account</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name="piggy-bank" size={250} color="white" />
                    </View>
                    <View >
                        <View style={{}}>
                            <TextInput
                                placeholder='USERNAME'
                                placeholderTextColor='rgba(255,255,255,0.5)'
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.2)',
                                    height: 60,
                                    width: 300,
                                    borderRadius: 25,
                                    borderColor: "rgba(255,255,255,0.2)",
                                    borderWidth: 1,
                                    paddingLeft: 15,
                                    marginVertical: 5,
                                    textAlign: 'center',
                                    color: 'white',
                                    marginVertical: 10,
                                    fontSize: 18
                                }}
                                maxLength={16}
                            />
                            <TextInput
                                placeholder='PASSWORD'
                                placeholderTextColor='rgba(255,255,255,0.5)'
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.2)',
                                    height: 60,
                                    width: 300,
                                    borderRadius: 25,
                                    borderColor: "rgba(255,255,255,0.2)",
                                    borderWidth: 1,
                                    paddingLeft: 15,
                                    marginVertical: 5,
                                    textAlign: 'center',
                                    color: 'white',
                                    marginVertical: 10,
                                    fontSize: 18
                                }}
                                maxLength={16}
                            />
                            <Pressable
                                style={{
                                    backgroundColor: '#ffffff',
                                    height: 60,
                                    width: 300,
                                    borderRadius: 25,
                                    borderColor: "rgba(255,255,255,0.2)",
                                    borderWidth: 1,
                                    paddingLeft: 15,
                                    marginVertical: 5,
                                    color: 'white',
                                    marginVertical: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Text
                                    style={{
                                        color: 'blue',
                                        fontSize: 18,
                                        fontWeight: '500'
                                    }}>
                                    LOG IN
                                </Text>
                            </Pressable>
                        </View>

                        <View style={{
                            top: '25%',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignContent: 'center'
                        }}>
                            <Text style={{ color: 'rgba(255,255,255,0.6)' }}>Don't have an account? </Text>
                            <Text style={{ color: 'rgba(255,255,255,1)', }}>Sign up</Text>
                        </View>

                    </View>
                </LinearGradient>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: '100%',
        width: '100%',
    },
    TextInput: {
        fontSize: 12
    }
})


export default Piggy;