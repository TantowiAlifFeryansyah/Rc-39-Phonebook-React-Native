import React, { useCallback, useState } from "react"
import { TextInput, TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { useDispatch } from 'react-redux'

import {
    create,
    resetSearch,
    searchUserAsync,
} from './userSlice';

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
            <View style={{
                flex: 1,
                flexDirection: "column",
                alignContent: "flex-start",
                alignItems: "center"
            }}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Masukan Nama!"
                    onChangeText={name => setUser(...user, name)}
                    defaultValue={user.name}/>

                <TextInput
                    style={{ height: 40 }}
                    placeholder="Masukan Phone!"
                    onChangeText={phone => setUser(...user, phone)}
                    defaultValue={user.phone}/>

                <View>
                    <TouchableOpacity onPress={props.submitLabel ? handleSearch : handleSubmit}
                        style={styles.green}>
                        {props.submitLabel !== "search"}
                        {props.submitLabel === "search"}
                        {props.submitLabel || "save"}
                    </TouchableOpacity>

                    {props.submitLabel !== "search" &&
                        <TouchableOpacity style={styles.cancel} onPress={props.cancel}>
                            <Text style={styles.LabelButton}> cancel</Text>
                        </TouchableOpacity>
                    }
                    {props.submitLabel === "search" &&
                        <TouchableOpacity style={styles.cancel} onPress={cancelSearch}>
                            <Text style={styles.LabelButton}> reset</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
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
        width: "100%",
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
    cancel: {
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