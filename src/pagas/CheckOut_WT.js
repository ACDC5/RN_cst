import React,{Component} from 'react';
import {
    Dimensions,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    TextInput,
    SafeAreaView,
} from 'react-native';

const DATA = [
    // {
    //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //     title: 'First Item',
    // },
    // {
    //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    //     title: 'Second Item',
    // },
    // {
    //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
    //     title: 'Third Item',
    // },
];

export default class CheckOut_WT extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount(): void {

    }

    req = () => {

        fetch('http://intalenttech.cn/oslc/spq/Query?oslc.select= spi:triNameTX,spi:triIdTX,spi:triCreatedSY')
            .then((response) => {
                response.json(() => {

                })
            }).then((response) => {
            console.log(response)
            DATA = response;
        }).catch((error) => {
            console.log('错误'+error)
        })

    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item title={item.triIdTX}/>}
                    // keyExtractor={item => item.id}
                />
                <TouchableOpacity onpress={this.req} style={styles.container}>
                    <Text style={{fontSize: 20}}>
                        获取数据{DATA[0]}
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

function Item({ title }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 7,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

