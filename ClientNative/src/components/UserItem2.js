import { useDispatch } from "react-redux"
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native"


export default function UserItem2(props){

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
        <View>
            <View>
                <View>
                    <Text>{props.no}</Text>
                    <View>
                        {user.isEdit ?
                        <TextInput
                        placeholder="Masukan Nama"
                        onChangeText={name => setUser(...user, name)}
                        defaultValue={user.name}
                        />
                        :
                        <Text>{user.name}</Text>
                    }
                    </View>

                    <View>
                        {user.isEdit ?
                        <TextInput
                        placeholder="Masukan Phone"
                        onChangeText={phone => setUser(...user, phone)}
                        defaultValue={user.phone}
                        />
                        :
                        <Text>{user.phone}</Text>
                    }
                    </View>
                </View>

                <View></View>
            </View>
        </View>
    )
}