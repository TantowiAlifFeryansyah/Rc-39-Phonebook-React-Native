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
                        <View style={styles.icon}>
                        <Icon name="person-circle" size={50} color="gray" />
                        </View>

                        <View style={styles.card}>
                            <Text style={styles.cardTitleName}>{user.name}</Text>
                            <View>
                                <Text style={styles.cardTitlePhone}>{user.phone}</Text>
                            </View>
                        </View>

                        <View style={styles.buttonList}>
                            <TouchableOpacity style={{marginHorizontal: 5}}>
                                <Icon name="create-outline" size={30} color="gray" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginHorizontal: 2}}>
                                <Icon name="close-circle-outline" size={30} color="gray" />
                            </TouchableOpacity>
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
        paddingVertical: 10,
        flexDirection: 'row',
        paddingBottom: 3,
        paddingTop: 0,
        // justifyContent: 'flex-start',
    },
    card: {
        paddingVertical: 10,
        flexDirection: 'column',
        paddingBottom: 5,
        paddingTop: 5,
        justifyContent: 'flex-start',
        borderWidth: 1
    },
    icon: {
        textAlign: 'center',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // paddingVertical: 0
    },
    buttonList: {
        textAlign: 'center',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cardBody: {
        marginRight: 'auto',
        marginLeft: 12
    },
    cardTitleName: {
        color: 'black',
        fontWeight: '700',
        fontSize: 18
    },
    cardTitlePhone: {
        color: 'gray',
        fontWeight: '500',
        fontSize: 15,
    },
    cardWrapper: {
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
});