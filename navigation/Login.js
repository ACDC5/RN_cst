import React, {Component} from 'react';
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
      </View>
    );
  }

  out() {
    const cstUrl = 'http://intalenttech.cn/Authenticate.srv';
    fetch(cstUrl, {
      method: 'POST',
      headers: {
        // "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        'Content-Type': 'application/x-www-form-urlencoded',
        // "Host": "intalenttech.cn",
        // "Connection":"keep-alive",
        // "Referer":"http://intalenttech.cn/html/en/default/login/loginMain.jsp",
        // "User-Agent":"User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36",
      },
      body:
        'USERNAME=' + this.state.userName + 'PASSWORD=' + this.state.password,
    })
      .then(response => JSON.stringify(response)) // 从对象中字符串化返回的数据

      .then(responseData => {
        // 获取格式化后的数据
        //解析成json对象
        console.log('aa####' + responseData); //返回object
        const final = JSON.parse(responseData);
        console.log(typeof final + '-----------' + final);
      })
      .catch(error => {
        // 错误处理
        console.log(error.message);
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
