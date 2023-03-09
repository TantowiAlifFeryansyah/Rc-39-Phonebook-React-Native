import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native"
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/Ionicons';

export default function ModalList() {
    const [modal, setModal] = useState(false)

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => setModal(true)}>
                <Text>Buka Modal</Text>
            </TouchableOpacity>
            <Modal isVisible={modal}>
                <View style={{
                    backgroundColor: '#ffffff',
                    paddingVertical: 20,
                    paddingHorizontal: 20,
                    borderRadius: 6,
                }}>
                    <View style={{
                        alignItems: 'center',
                        borderColor: '#ffffff',
                        bottom: 85
                    }}>
                        <Icon name="alert-circle" size={80} color="#173e07"
                            style={{
                                position: 'absolute',
                                backgroundColor: '#ffffff',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 85,
                                height: 85,
                                paddingHorizontal: 5,
                                borderRadius: 50,
                                zIndex: 1
                            }} />
                    </View>

                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: '#173e07',
                        textAlign: 'center',
                        marginTop: 0
                    }}>
                        Deleted Confirmation
                    </Text>
                    <Text style={{ textAlign: 'center', fontSize: 17, }}>
                        Are you sure, you want delete it?
                    </Text>
                    <View style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        width: '100%',
                    }}>

                        <TouchableOpacity style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#85b35a',
                            paddingVertical: 5,
                            borderRadius: 50,
                            elevation: 3,
                            width: '20%',
                            marginHorizontal: 7
                        }}>
                            <Text style={{ color: '#ffffff' }}> No</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#4a8122',
                            paddingVertical: 5,
                            borderRadius: 50,
                            elevation: 3,
                            width: '20%',
                            marginHorizontal: 7

                        }}>
                            <Text style={{ color: '#ffffff' }}> Yes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
