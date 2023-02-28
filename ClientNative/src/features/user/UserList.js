import React, { useCallback, useEffect } from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from 'react-redux'

import UserItem from "../../components/UserItem";

import {
    readUserAsync,
    selectUser,
    deleteUserAsync,
    createUserAsync,
    updateUserAsync,
    loadUserAsync
} from './userSlice';


export default function UserList(props) {

    const users = useSelector(selectUser)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(readUserAsync())
    }, [dispatch]);

    const scrolling = useCallback((event) => {
        var element = event.target;
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            // console.log('ini scroll');
            dispatch(loadUserAsync())
        }
    }, [dispatch])

    return (
        <View onScroll={scrolling} style={{ overflowY: "scroll", height: 200 }}>
            <View style={{ flex: 1, padding: 20 }}>
                {users.map((user, index) => (
                    <UserItem
                        key={user.id}
                        no={index + 1}
                        data={user}
                        sent={user.sent}
                        remove={() => dispatch(deleteUserAsync(user.id))}
                        resend={() => dispatch(createUserAsync({ id: user.id, name: user.name, phone: user.phone }))}
                        update={(name, phone) => dispatch(updateUserAsync({ id: user.id, name, phone }))}
                    />
                ))}
            </View>
        </View>
    )
}
