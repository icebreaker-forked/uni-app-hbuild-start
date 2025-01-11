# borurio-logistics-app

## 物流客户系统技术

- 组件库：[nutui-uniapp](https://nutui-uniapp.netlify.app/)
- 请求库：[lwu-request](https://lwur.fdproxy.cn/)
- 样式方案：[tailwindcss](https://tailwindcss.com/)
- 图标方案：暂时使用@`iconify/tailwind` 配合 `iconify/json`，使用的是[Lucide图标](https://yesicon.app/lucide)

## 打包android

- 证书目录 `/keystore`

  kg.keystore

  - 包名：plus.H50A02F01
  - 别名：borurioLogisticsApp
  - 密码：123456

  com.zjwl.benben.keystore

  - 包名：com.zjwl.benben
  - 别名：zjwl
  - 密码：123456

## 打包ios

- 证书目录 `/ios-dev`

证书密码都为：123
Bundle ID（AppID）：flypost.cn
appleId: 6612015886

## 注意事项

- 不要在HBuilder中通过视图编辑配置，会覆盖掉多语言的配置
