import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
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

    return (
        <View style={{ flex: 1 , alignItems: "center"}}>
            <FlatList
                data={users}
                renderItem={({ item, index }) => (
                    <UserItem
                        key={item.id}
                        no={index + 1}
                        data={item}
                        sent={item.sent}
                        remove={() => dispatch(deleteUserAsync(item.id))}
                        resend={() => dispatch(createUserAsync({ id: item.id, name: item.name, phone: item.phone }))}
                        update={(name, phone) => dispatch(updateUserAsync({ id: item.id, name, phone }))}
                    />
                )}
                keyExtractor={(item) => item.id}
                onEndReachedThreshold={0.5}
                onEndReached={() => dispatch(loadUserAsync())}
                style={{ 
                    maxHeight: 280, 
                    borderWidth: 1, 
                    // width: "96%" 
                }}
            />
        </View>
    )
}
