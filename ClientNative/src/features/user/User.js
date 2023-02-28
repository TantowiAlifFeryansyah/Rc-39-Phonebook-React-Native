import React, { useCallback, useState } from "react"
import UserForm from "./UserForm";
import UserList from "./UserList";
import { useDispatch } from 'react-redux'
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

export default function User(props) {

    const dispatch = useDispatch()

    const [user, setUser] = useState({
        isAdd: false,
    });

    const handleAdd = useCallback((event) => {
        event.preventDefault()
        setUser({
            isAdd: true
        });
    }, [dispatch])

    const handleCancel = useCallback((event) => {
        event.preventDefault()
        setUser({
            isAdd: false
        });
    }, [dispatch])

    return (
        <View style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            margin: 0,
            padding: 20
        }}>

            <View>
                <View>
                    <Text>home Book Apps</Text>
                </View>
            </View>

            {user.isAdd ?
                <View>
                    <View>
                        <Text>Adding Form</Text>
                    </View>

                    <View className="card-body">
                        <UserForm cancel={handleCancel} />
                    </View>
                </View>
                :
                <View><TouchableOpacity onPress={handleAdd} style={styles.add}>
                    <Text style={styles.LabelButton}>add</Text>
                </TouchableOpacity>
                </View>
            }

            <View>
                <View>
                    <Text style={styles.LabelButton}>Search Form</Text>
                </View>
                <View>
                    <UserForm submitLabel="search" />
                </View>
            </View>
            <UserList />
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