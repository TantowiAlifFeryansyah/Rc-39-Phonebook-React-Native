import React, { Fragment, useCallback, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from "react-redux"

import { View, Text, TouchableOpacity } from "react-native"

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

    const handleEdit = useCallback((event) => {
        event.preventDefault()
        setUser({
            name: user.name,
            phone: user.phone,
            isEdit: true
        });
    }, [user])

    const handleCancel = useCallback((event) => {
        event.preventDefault()
        setUser({
            name: props.data.name,
            phone: props.data.phone,
            isEdit: false
        });
    }, [])

    const saveEdit = useCallback((event) => {
        event.preventDefault()
        props.update(user.name, user.phone)
        setUser({
            ...user,
            name: user.name,
            phone: user.phone,
            isEdit: false
        });
    }, [dispatch, user])

    const handleModalShowHide = useCallback(() => {
        setUser({
            showHide: true
        })
    }, [])

    const cancelHandleModalShowHide = useCallback((event) => {
        event.preventDefault()
        setUser({
            name: props.data.name,
            phone: props.data.phone,
            showHide: false
        })
    }, [dispatch, user])

    return (
        <Fragment>
            <View style={styles.container}>
                <Text>{props.no}</Text>
                <Text>
                    {user.isEdit ?
                        <input
                            type="teks"
                            name="name"
                            value={user.name}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                        :
                        user.name
                    }
                </Text>

                <Text>
                    {user.isEdit ?
                        <input
                            type="teks"
                            name="phone"
                            value={user.phone}
                            onChange={handleInputChange}
                            className="form-control"
                        />
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
                                <i className="fa-solid fa-floppy-disk"></i>
                                &nbsp;
                                save
                            </TouchableOpacity>
                            &nbsp;
                            <TouchableOpacity
                                style={styles.remove}
                                onPress={handleCancel}>
                                <i className="fa-solid fa-ban"></i>
                                &nbsp;
                                cancel
                            </TouchableOpacity>
                        </Text>
                        :
                        <Text style={styles.LabelButton}>
                            <TouchableOpacity
                                style={styles.green}
                                onPress={handleEdit}>
                                <FontAwesomeIcon icon={faPen} />
                                &nbsp;
                                edit
                            </TouchableOpacity>
                            &nbsp;
                            <TouchableOpacity
                                style={styles.red}
                                className="btn btn-danger"
                                onPress={() => handleModalShowHide()}>
                                <FontAwesomeIcon icon={faTrashCan} />
                                &nbsp;
                                delete
                            </TouchableOpacity>
                        </Text>
                    :
                    <Text>
                        <TouchableOpacity
                            style={styles.resend}
                            onPress={props.resend}>
                            resend
                        </TouchableOpacity>
                    </Text>
                }
            </View>

            <Modal show={user.showHide}>
                <Modal.Header >
                    <Modal.Title>Deleted Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure, you want delete <b>{props.data.name}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onPress={cancelHandleModalShowHide}>
                        No
                    </Button>
                    <Button variant="primary" onPress={props.remove}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

        </Fragment>
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