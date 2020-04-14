此项目是使用RN命令创建的；
而在djapp-top文件夹中的tri项目是expo项目(沙盒)；
此外他们的依赖库版本有细微差异。
npm 版本12.16.1

更新@react-native-community/masked-view版
本1.7到0.19(否则项目启动会花几十分钟)

因为post请求的问题('请求失败'资料说要在android目录下配置)在tri项目中无法配置，因为他是一个
沙盒环境(没有android和ios的目录)，所以建立了纯RN项目cst...

post请求的问题最后修改了参数格式，请求成功了
