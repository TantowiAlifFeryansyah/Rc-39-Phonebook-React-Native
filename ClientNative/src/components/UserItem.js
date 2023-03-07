import { useDispatch } from "react-redux"
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions, ScrollView } from "react-native"
import { useCallback, useState } from "react"
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function UserItem(props) {

    const dispatch = useDispatch()

    const [user, setUser] = useState({
        name: props.data.name,
        phone: props.data.phone,
        isEdit: false,
        showHide: false
    })

    const handleEdit = useCallback(() => {
        setUser({
            name: user.name,
            phone: user.phone,
            isEdit: true
        });
    }, [user])

    const handleCancel = useCallback(() => {
        setUser({
            name: props.data.name,
            phone: props.data.phone,
            isEdit: false
        });
    }, [])

    const saveEdit = useCallback(() => {
        props.update(user.name, user.phone)
        setUser({
            ...user,
            name: user.name,
            phone: user.phone,
            isEdit: false
        });
    }, [dispatch, user])

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <View style={styles.cardWrapper}>

                    <View style={styles.cardList}>

                        <View style={{
                            flexDirection: 'row',
                            // flex: 1, 
                            width: "75%",
                            // borderWidth: 1,
                            borderColor: "blue",
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={styles.no}>{props.no}</Text>

                            <View style={styles.icon}>
                                <Icon name="person-circle" size={50} color="gray" />
                            </View>

                            <View style={styles.card}>
                                {user.isEdit ?
                                    <TextInput
                                        style={{ height: 25, width: "100%", marginTop: -5, fontSize: 18, fontWeight: "bold", paddingTop: 2, paddingBottom: 2 }}
                                        placeholder="Masukan Nama!"
                                        onChangeText={name => setUser({...user, name})}
                                        defaultValue={user.name}
                                    />
                                    :
                                    <View>
                                        <Text style={styles.cardTitleName}>{user.name}</Text>
                                    </View>
                                }

                                {user.isEdit ?
                                    <TextInput
                                        style={{ height: 25, paddingVertical: 5, width: "100%", marginBottom: -5, fontSize: 15, paddingTop: 2, paddingBottom: 2 }}
                                        placeholder="Masukan Nomor!"
                                        onChangeText={phone => setUser({...user, phone})}
                                        defaultValue={user.phone}

                                    />
                                    :
                                    <View>
                                        <Text style={styles.cardTitlePhone}>{user.phone}</Text>
                                    </View>
                                }
                            </View>

                        </View>


                        <View style={styles.buttonList}>
                            {props.data.sent ? user.isEdit ?
                                <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={saveEdit}>
                                        <Icon name="save-outline" size={30} color="gray" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginHorizontal: 2 }} onPress={handleCancel}>
                                        <Icon name="arrow-back-circle-outline" size={30} color="gray" />
                                    </TouchableOpacity>
                                </View>
                                :
                                <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={handleEdit}>
                                        <Icon name="create-outline" size={30} color="gray" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginHorizontal: 2 }} onPress={props.remove}>
                                        <Icon name="close-circle-outline" size={30} color="gray" />
                                    </TouchableOpacity>
                                </View>
                                :
                                <TouchableOpacity style={{ marginHorizontal: 2 }} onPress={props.resend}>
                                    <Icon name="send-outline" size={30} color="gray" />
                                </TouchableOpacity>
                            }
                        </View>

                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: windowWidth * 0.06,
        // marginVertical: windowHeight * 0.01,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
    },
    box: {
        marginHorizontal: windowWidth * 0.03,
        justifyContent: 'center',
    },
    cardList: {
        // paddingVertical: 20,
        flexDirection: 'row',
        paddingBottom: 3,
        paddingTop: 0,
        justifyContent: 'space-between',
        width: '90%'
    },
    no: {
        alignItems: 'center',
        // borderWidth: 1,
        textAlign: 'center',
        paddingVertical: 15,
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    icon: {
        textAlign: 'center',
        // borderWidth: 1,
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
        alignItems: 'center',
        // paddingVertical: 0
        width: "25%"
    },
    card: {
        // paddingVertical: 10,
        // flexDirection: 'column',
        paddingBottom: 5,
        paddingTop: 5,
        justifyContent: 'flex-start',
        // borderWidth: 1,
        borderColor: "red",
        // width: '75%',
        width: '70%',
    },
    cardTitleName: {
        // borderWidth: 1,
        color: 'black',
        fontWeight: '700',
        fontSize: 18
    },
    cardTitlePhone: {
        // borderWidth: 1,
        color: 'gray',
        fontWeight: '500',
        fontSize: 15,
    },
    buttonList: {
        // flex: 2,
        // borderWidth: 1,
        borderColor: "red",
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // width: 82,
        width: "35%"
    },
    cardWrapper: {
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
});