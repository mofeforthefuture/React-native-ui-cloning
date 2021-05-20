import React, { useState } from 'react';
import { Pressable, View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { ProgressBar, Colors } from 'react-native-paper';





function WelcomeBack() {
    const [isLiked, setIsLiked] = useState(true)

    const Liked = () => {
        if (isLiked) {
            setIsLiked(false)
        } else {
            setIsLiked(true)
        }
    }
    return (
        <>
            <View
                style={{
                    backgroundColor: 'white',
                    flex: 1,
                }}
            >
                <SafeAreaView
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.01)',
                    }}
                />
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.01)',
                    }}>

                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            marginTop: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={require('../assets/hat.jpeg')}
                            style={{
                                height: 60,
                                width: 60,
                                borderRadius: 30,
                                borderColor: '#fff',
                                borderWidth: 3,
                                shadowOffset: { width: 50, height: 50 },
                                shadowColor: 'grey',
                            }}
                        />
                        <Text
                            style={{
                                width: 260,
                                fontSize: 17,
                                fontWeight: '600',
                                marginLeft: 20,
                            }}>Welcome back, Marvin {'            '}
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: '500',
                                    color: 'rgba(0, 0, 0, 0.4)',
                                }}
                            >  your finicial status is looking good!</Text>

                        </Text>
                        <Ionicons
                            name="ellipsis-vertical"
                            size={24}
                            color="black"
                            style={{
                                marginBottom: 20,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            flex: 2,
                        }}
                    >
                        <ProgressBar
                            progress={0.5}
                            color='#2638d9'
                            style={{
                                width: '90%',
                                marginLeft: 10,
                                marginTop: 20,
                                height: '30%',
                                borderRadius: 10,
                            }}
                        />
                        <Text style={{ fontSize: 12, fontWeight: '400', color: 'rgba(0, 0, 0, 0.4)', bottom: 8, left: 5, }}>Beginner Level</Text>
                        <Text

                            style={{
                                alignSelf: 'flex-end',
                                fontSize: 12,
                                fontWeight: '500',
                                bottom: 18,
                                color: 'rgba(0, 0, 0, 0.7)',
                                right: 28,
                            }}>XP 380/500</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            flex: 1,
                        }}
                    >
                        <Text style={{ fontWeight: '700', fontSize: 14, marginHorizontal: 20 }}>Today</Text>
                        <Text style={{ fontWeight: '700', fontSize: 14, marginHorizontal: 20 }}>Monthly</Text>
                        <Text style={{ fontWeight: '700', fontSize: 14, marginHorizontal: 20 }}>Yearly</Text>
                        <Text style={{ fontWeight: '700', fontSize: 14, marginHorizontal: 20 }}>Future</Text>

                    </View>
                </View>
                <View
                    style={{
                        flex: 3,
                        backgroundColor: 'rgba(239, 239, 235, 1)',
                        alignItems: 'center',
                        paddingTop: 20,

                    }}>
                    <ScrollView>
                        <View style={{
                            backgroundColor: 'rgba(97, 110, 227, 1)',
                            width: '94%',
                            height: '30%',
                            borderRadius: 20,
                            marginBottom: 10,


                            padding: 20,

                        }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: 'black',
                                        height: 30,
                                        width: 30,
                                        borderRadius: 15,
                                    }}
                                >

                                </View>
                                <Text
                                    style={{
                                        color: 'rgba(255,255,255,0.8)',
                                        fontWeight: '700',
                                        fontSize: 18,
                                        marginLeft: 10,
                                        width: 180,
                                    }}
                                >Small stuff adds up!</Text>
                                <Text
                                    style={{
                                        color: 'rgba(255,255,255,0.5)',
                                        fontWeight: '700',
                                        marginLeft: 20,
                                        marginTop: 3,
                                    }}
                                >09-06-2018</Text>
                            </View>

                            <Text

                                style={{
                                    color: 'rgba(255,255,255,0.5)',
                                    fontWeight: '700',
                                    marginLeft: 40,
                                }}>
                                Last month, you made
                            <Text
                                    style={{
                                        fontWeight: '800',
                                        color: 'rgba(255,255,255,0.7)',

                                    }}
                                > 42 transactions </Text>
                            less than $5.spending a total of $147.
                            Want to cut down on the frivilous spending?
                        </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 30,
                                }}
                            >
                                <Pressable
                                    style={{
                                        backgroundColor: '#ffffff',
                                        height: 27,
                                        width: 126,
                                        borderRadius: 25,
                                        borderColor: "rgba(255,255,255,0.2)",
                                        borderWidth: 1,
                                        paddingLeft: 15,
                                        color: 'white',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        left: 40,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: '#000',
                                            fontSize: 12,
                                            fontWeight: '700',
                                            right: 8,

                                        }}>
                                        SETUP A GOAL
                                </Text>
                                </Pressable>
                                <FontAwesome
                                    name={isLiked ? "heart" : "heart-o"}
                                    size={24}
                                    color="white"
                                    onPress={Liked}
                                    style={{
                                        left: 174,
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: '#50c878',
                            width: '94%',
                            height: '30%',
                            borderRadius: 20,
                            marginHorizontal: 5,
                            marginBottom: 10,
                            padding: 20,

                        }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: 'black',
                                        height: 30,
                                        width: 30,
                                        borderRadius: 15,
                                    }}
                                >

                                </View>
                                <Text
                                    style={{
                                        color: 'rgba(255,255,255,0.8)',
                                        fontWeight: '700',
                                        fontSize: 18,
                                        marginLeft: 10,
                                        width: 180,
                                    }}
                                >Small stuff adds up!</Text>
                                <Text
                                    style={{
                                        color: 'rgba(255,255,255,0.5)',
                                        fontWeight: '700',
                                        marginLeft: 20,
                                        marginTop: 3,
                                    }}
                                >09-06-2018</Text>
                            </View>

                            <Text

                                style={{
                                    color: 'rgba(255,255,255,0.5)',
                                    fontWeight: '700',
                                    marginLeft: 40,
                                }}>
                                Last month, you made
                            <Text
                                    style={{
                                        fontWeight: '800',
                                        color: 'rgba(255,255,255,0.7)',

                                    }}
                                > 42 transactions </Text>
                            less than $5.spending a total of $147.
                            Want to cut down on the frivilous spending?
                        </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 30,
                                }}
                            >
                                <Pressable
                                    style={{
                                        backgroundColor: '#ffffff',
                                        height: 27,
                                        width: 126,
                                        borderRadius: 25,
                                        borderColor: "rgba(255,255,255,0.2)",
                                        borderWidth: 1,
                                        paddingLeft: 15,
                                        color: 'white',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        left: 40,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: '#000',
                                            fontSize: 12,
                                            fontWeight: '700',
                                            right: 8,

                                        }}>
                                        SETUP A GOAL
                                </Text>
                                </Pressable>
                                <FontAwesome
                                    name={isLiked ? "heart" : "heart-o"}
                                    size={24}
                                    color="white"
                                    onPress={Liked}
                                    style={{
                                        left: 174,
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: 'rgba(129, 70, 162, 1)',
                            width: '94%',
                            height: '30%',
                            borderRadius: 20,
                            marginHorizontal: 5,
                            padding: 20,
                            marginBottom: 10,

                        }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: 'black',
                                        height: 30,
                                        width: 30,
                                        borderRadius: 15,
                                    }}
                                >

                                </View>
                                <Text
                                    style={{
                                        color: 'rgba(255,255,255,0.8)',
                                        fontWeight: '700',
                                        fontSize: 18,
                                        marginLeft: 10,
                                        width: 180,
                                    }}
                                >Small stuff adds up!</Text>
                                <Text
                                    style={{
                                        color: 'rgba(255,255,255,0.5)',
                                        fontWeight: '700',
                                        marginLeft: 20,
                                        marginTop: 3,
                                    }}
                                >09-06-2018</Text>
                            </View>

                            <Text

                                style={{
                                    color: 'rgba(255,255,255,0.5)',
                                    fontWeight: '700',
                                    marginLeft: 40,
                                }}>
                                Last month, you made
                            <Text
                                    style={{
                                        fontWeight: '800',
                                        color: 'rgba(255,255,255,0.7)',

                                    }}
                                > 42 transactions </Text>
                            less than $5.spending a total of $147.
                            Want to cut down on the frivilous spending?
                        </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: 30,
                                }}
                            >
                                <Pressable
                                    style={{
                                        backgroundColor: '#ffffff',
                                        height: 27,
                                        width: 126,
                                        borderRadius: 25,
                                        borderColor: "rgba(255,255,255,0.2)",
                                        borderWidth: 1,
                                        paddingLeft: 15,
                                        color: 'white',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        left: 40,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: '#000',
                                            fontSize: 12,
                                            fontWeight: '700',
                                            right: 8,

                                        }}>
                                        SETUP A GOAL
                                </Text>
                                </Pressable>
                                <FontAwesome
                                    name={isLiked ? "heart" : "heart-o"}
                                    size={24}
                                    color="white"
                                    onPress={Liked}
                                    style={{
                                        left: 174,
                                    }}
                                />
                            </View>
                        </View>


                    </ScrollView>


                </View>

            </View>
        </>
    );
}

export default WelcomeBack;