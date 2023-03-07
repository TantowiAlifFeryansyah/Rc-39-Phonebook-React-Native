import React, { useCallback, useState } from "react"
import { useDispatch } from 'react-redux'
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function UserForm(props) {

    const dispatch = useDispatch()

    const [user, setUser] = useState({
        name: '',
        phone: ''
    });

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setUser({
            ...user,
            [name]: value,
        });
    }

    const handleSubmit = useCallback(() => {
        dispatch(create(user.name, user.phone))
        setUser({ name: '', phone: '' })
    }, [dispatch, user])

    const handleSearch = useCallback(() => {
        dispatch(searchUserAsync({ name: user.name, phone: user.phone }))
    }, [dispatch, user])

    const cancelSearch = () => {
        dispatch(resetSearch())
        setUser({ name: '', phone: '' })
    }

    return (
        <View>
            <View >
                <View>

                    <View>
                        <TextInput
                            style={styles.form}
                            placeholder="Masukan Nama"
                        />

                        <TextInput
                            style={styles.form}
                            placeholder="Masukan Nomor"
                        />
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.submit}>
                            <Text style={styles.LabelButton}>search</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.submit}>
                            <Text style={styles.LabelButton}>reset</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: windowWidth * 0.06,
        marginVertical: windowHeight * 0.01,

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
    form: {
        height: 44,
        width: '100%',
        marginTop: 5,
        padding: 10,
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor: 'white',
    },
    row: {
        marginTop: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    submit: {
        height: 30,
        width: '49%',
        backgroundColor: 'white',
        // borderColor: 'white',
        borderRadius: 7,
        justifyContent: 'center',
        borderWidth: 1,
    },
    add: {
        height: 30,
        width: 65,
        backgroundColor: 'white',
        // borderColor: 'white',
        borderRadius: 7,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 15,
        borderWidth: 1,

    },
    addTeks: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: '900'
    },
    LabelButton: {
        textAlign: 'center',
        color: 'black',
        fontSize: 19,
        letterSpacing: 1
    }
});