# readme


[![CircleCI branch](https://img.shields.io/circleci/project/github/duxianwei520/react/master.svg?style=flat-square)](https://circleci.com/gh/duxianwei520/react)
[![GitHub forks](https://img.shields.io/github/forks/duxianwei520/react.svg)](https://github.com/duxianwei520/react/network)
[![GitHub stars](https://img.shields.io/github/stars/duxianwei520/react.svg)](https://github.com/duxianwei520/react/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/duxianwei520/react.svg)](https://github.com/duxianwei520/react/issues)
[![GitHub license](https://img.shields.io/github/license/duxianwei520/react.svg)](https://github.com/duxianwei520/react/blob/master/LICENSE)
[![Coverage Status](https://coveralls.io/repos/github/duxianwei520/react/badge.svg)](https://coveralls.io/github/duxianwei520/react)

## 项目技术栈

react@16.5.2 + redux@3.7.2 + react-router@3.2.0 + webpack@3.10.0 + axios@0.18.0 + less@2.7.1 + antd@3.10.1



## 项目运行


```
git clone --depth 1 https://github.com/duxianwei520/react.git  

cd react 

npm install 

npm ren dev-electron
```
### 对了，如果有小伙伴因为网络原因npm包下载不下来，那么可以试用我已经下载好的安装包，地址在
```
https://github.com/duxianwei520/resource/blob/master/react/node_modules.rar

```

最后的构建命令
```
npm run build (打包，部署)

```

对了，服务端返回的格式我们是这样子一个数据结构

```
{
  data: {
    totalCount: 100,
    currentPage: 1,
    pageSize: 10,
    'list': [
    ],
  },
  msg: '',
  status: 1,
}

```



## 说明

>  开发环境 win10  Chrome 63.0.3239.132（正式版本） （32 位） nodejs 8.7.0

>  如果npm install太慢导致有些npm依赖包下载失败 你可以看控制台的报错信息，再手动npm install 具体的开发包，推荐使用淘宝的注册源，直接运行，

```
npm install -g cnpm --registry=https://registry.npm.taobao.org 

```


>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

### 取消http请求示例：
```
import axios from 'axios'
const axiosHandle = axios.CancelToken.source()

login(){
  this.props.dispatch(fetchLogin(values, (res) => {},(error)=>{},axiosHandle)
  取消请求的操作
  setTimeout(() => {
    axiosHandle.cancel('手动取消。')
  }, 3000)
}

```


## 功能一览
- [√] 项目按路由模块加载
- [√] 登录，以及登录权限控制
- [√] 退出
- [√] 欢迎主页
- [√] 左侧菜单，正常mini切换
- [√] redux完整示范
- [√] mockjs模拟后端返回接口
- [√] 页面高度flex自适应
- [√] axios数据跨域的设置
- [√] 实时的webpack包大小预览,方便优化
- [√] 实时的electron调试界面



## License

[MIT](https://github.com/duxianwei520/electron/blob/master/LICENSE)


## 交流
想跟其他的使用react的小伙伴们交流的话，
可以加入我创建的reactQQ群：159697743


