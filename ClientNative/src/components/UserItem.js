import React, { useCallback, useState } from "react"
import { useDispatch } from "react-redux"

import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

export default function UserItem(props) {

    const dispatch = useDispatch()

    const [user, setUser] = useState({
        name: props.data.name,
        phone: props.data.phone,
        isEdit: false,
        showHide: false
    })

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const phone = target.phone
        setUser({
            ...user,
            [name]: value,
            [phone]: value
        });
    }

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

    // const handleModalShowHide = useCallback(() => {
    //     setUser({
    //         showHide: true
    //     })
    // }, [])

    // const cancelHandleModalShowHide = useCallback((event) => {
    //     event.preventDefault()
    //     setUser({
    //         name: props.data.name,
    //         phone: props.data.phone,
    //         showHide: false
    //     })
    // }, [dispatch, user])

    return (
        <View style={styles.container}>
            <Text>{props.no}</Text>
            <Text>
                {user.isEdit ?
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Masukan Nama!"
                        onChangeText={name => setUser(...user, name)}
                        defaultValue={user.name} />
                    :
                    user.name
                }
            </Text>

            <Text>
                {user.isEdit ?
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Masukan Nama!"
                        onChangeText={phone => setUser(...user, phone)}
                        defaultValue={user.name} />
                    :
                    user.phone
                }
            </Text>

            {props.data.sent ?
                user.isEdit ?
                    <Text>
                        <TouchableOpacity
                            style={styles.add}
                            onPress={saveEdit}>
                            <Text>save</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.remove}
                            onPress={handleCancel}>
                            <Text>cancel</Text>
                        </TouchableOpacity>
                    </Text>
                    :
                    <Text style={styles.LabelButton}>
                        <TouchableOpacity
                            style={styles.green}
                            onPress={handleEdit}>
                            <Text>edit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.red}
                            onPress={props.remove}>
                            <Text>delete</Text>
                        </TouchableOpacity>
                    </Text>
                :
                <Text>
                    <TouchableOpacity
                        style={styles.resend}
                        onPress={props.resend}>
                        <Text>resend</Text>
                    </TouchableOpacity>
                </Text>
            }
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    add: {
        height: 40,
        width: 75,
        backgroundColor: "blue",
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 5
    },
    remove: {
        height: 40,
        width: 75,
        backgroundColor: "red",
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 5
    },
    green: {
        height: 40,
        width: 75,
        backgroundColor: "green",
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 5
    },
    resend: {
        height: 40,
        width: 75,
        backgroundColor: "yellow",
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 5
    },
    LabelButton: {
        color: "fffffff",
    },
});