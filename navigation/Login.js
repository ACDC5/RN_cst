import React,{Component} from 'react';
import {
  Image,
  ImageBackground,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import WT from '../src/pagas/CheckOut_WT';

const {width, height} = Dimensions.get('window');

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      register: '',
      forget_pwd: '',
      errInfo: '',
    };
  }

  render() {
    const {navigation, route} = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.edit}
          placeholder="账号"
          onChangeText={account => this.setState({userName: account})}
        />
        <TextInput
          style={styles.edit}
          placeholder="密码"
          secureTextEntry={true}
          onChangeText={pwd => this.setState({password: pwd})}
        />
        <TouchableOpacity activeOpacity={0.7} onPress={this.out.bind(this)}>
          <View style={styles.button}>
            <Text>登录</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} onPress={this.query}>
          <View style={styles.button}>
            <Text>Test</Text>
          </View>
        </TouchableOpacity>

        <Text style={{marginTop: 10}}>
          结果:{this.state.errInfo}
        </Text>
      </View>
    );
  }

  query = () => {
    //navigation导航到某页面，route，接收上级路由传入的参数
    const {navigation, route} = this.props;
    console.log(navigation.navigate('CheckOut_WT'));
    navigation.navigate('CheckOut_WT');
}

  out() {
    // const objectId = 1000;
    // const actionId = 1005;
    // const screenWidth = 1920;
    // const ott= '';
    // const screenHeight= 1080;
    // const screenDPI = 96;
    // const contentType = '/html/en';
    // const languageId = 1;
    // const ieFlag = 0;
    // const ExtReqURL = '';
    const cstUrl = 'http://intalenttech.cn/oslc/login?USERNAME='+ this.state.userName + '&PASSWORD='+ this.state.password;
    // const cstUrl = 'http://intalenttech.cn/oslc/logout';
    fetch(cstUrl
      //   {
      // method: 'POST',
      // headers: {
      //   // "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      //   'Content-Type': 'application/x-www-form-urlencoded',
      //   "Host": "intalenttech.cn",
      //   // "Connection":"keep-alive",
      //   // "Referer":"http://intalenttech.cn/html/en/default/login/loginMain.jsp",
      //   "User-Agent":"User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
      // },
      // body:
      //       // 'objectId=' +objectId +
      //       // 'actionId=' +actionId +
      //       // 'screenWidth=' +screenWidth +
      //       // 'ott=' +ott +
      //       // 'screenHeight=' +screenHeight +
      //       // 'screenDPI=' +screenDPI +
      //       // 'contentType=' +contentType +
      //       // 'languageId=' +languageId +
      //       // 'ieFlag=' +ieFlag +
      //       // 'ExtReqURL=' +ExtReqURL +
      //       'USERNAME=' + this.state.userName + 'PASSWORD=' + this.state.password,
    // }
    )
      .then(response => JSON.stringify(response)) // 从(json)对象中字符串化返回的数据

      .then(responseData => {
        console.log('aa-----' + responseData);
        const final = JSON.parse(responseData);//反序列化(将json字符串对象化)
        console.log('json字符串-----: '+ final.url)
        console.log(typeof final + '-----' + final['Set-cookie']);
        console.log('输出final:  '+final);
        this.setState({errInfo: final.status});
      })
      .catch(error => {
        // 错误处理
        console.log('your错误:'+error);
        this.setState({errInfo: error});
      });
    console.log(this.state.userName);
    console.log(this.state.password);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 107,
    // backgroundColor:'#FFFFFF',
  },

  edit: {
    marginTop: 30,
    height: 40,
    fontSize: 17,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 27,
    backgroundColor: '#993366',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 17,
    borderRadius: 7,
  },
});
