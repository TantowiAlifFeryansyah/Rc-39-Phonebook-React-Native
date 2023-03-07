import React, { useCallback, useState } from "react"
import { useDispatch } from 'react-redux'
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

import { create } from './userSlice';

const windowWidth = Dimensions.get('window').width;

export default function UserForm(props) {

    const dispatch = useDispatch()

    const [user, setUser] = useState({
        name: '',
        phone: ''
    });

    const handleSubmit = useCallback(() => {
        dispatch(create(user.name, user.phone))
        setUser({ name: '', phone: '' })
    }, [dispatch, user])

    return (
        <View>
            <View >
                <View>
                    <Text style={styles.title} onPress={props.cancel}>Add</Text>
                </View>

                <View>
                    <View>
                        <View>
                            <TextInput
                                style={styles.form}
                                placeholder="Masukan Nama"
                                onChangeText={name => setUser({ ...user, name })}
                                defaultValue={user.name}
                            />

                            <TextInput
                                style={styles.form}
                                placeholder="Masukan Nomor"
                                onChangeText={phone => setUser({ ...user, phone })}
                                defaultValue={user.phone}
                            />
                        </View>
                        <View>
                            <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
                                <Text style={styles.LabelButton}>save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        height: 35,
        width: 55,
        marginTop: 10,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1d1d1d',
        textDecorationLine: 'underline',
        textDecorationStyle: 'double',
        marginBottom: 5,
        // borderWidth: 1
    },
    box: {
        marginHorizontal: windowWidth * 0.03,
        justifyContent: 'center',
    },
    form: {
        height: 44,
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor: 'white',
        marginBottom: 5
    },
    submit: {
        height: 30,
        width: '100%',
        backgroundColor: 'white',
        // borderColor: 'white',
        borderRadius: 7,
        justifyContent: 'center',
        marginBottom: 15,
        borderWidth: 2,
        borderColor: 'gray'
    },
    LabelButton: {
        textAlign: 'center',
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 19,
        letterSpacing: 1,
    }
});