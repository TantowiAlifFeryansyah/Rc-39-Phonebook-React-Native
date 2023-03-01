import { Text, TextInput, View, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function TampilanAwal() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "gray" }}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>PhoneBook</Text>
                </View>

                <View style={styles.box}>
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
                        <View>
                            <TouchableOpacity style={styles.add}>
                                <Text style={styles.addTeks}>add</Text>
                            </TouchableOpacity>
                            <View style={{borderWidth: 0.8 , alignSelf: 'center', width: 200}}></View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
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
        height: 45,
        width: '100%',
        marginTop: 5,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    row: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    submit: {
        height: 30,
        width: '49%',
        backgroundColor: 'blue',
        borderColor: 'white',
        borderRadius: 8,
    },
    add: {
        height: 30,
        width: 65,
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 25,
    },
    addTeks: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: '900'
    },
    LabelButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }
});