# ReactNativeTemplate

Guidelines for using the react native template

this reposetry will guide you to setup a new react native app from scratch.

you can run the below code to install the template

```
npx react-native init NameOfTheApp --template https://github.com/BRIGHTLAB/ReactNativeTemplate.git
```

Packages that are used in the template:
- @twotalltotems/react-native-otp-input, [link](https://github.com/tttstudios/react-native-otp-input/issues)
- dayjs, [link](https://day.js.org/)
- fs-extra, [link](https://github.com/jprichardson/node-fs-extra)
- i18n-js, [link](https://www.npmjs.com/package/i18n-js/v/latest), please use version 3.5.0
- react-native-device-info, [link](https://github.com/react-native-device-info/react-native-device-info)
- react-native-keyboard-aware-scroll-view, [link](https://github.com/APSL/react-native-keyboard-aware-scroll-view)
- react-native-localize, [link](https://github.com/zoontek/react-native-localize)
- React Native Navigation, [link](https://wix.github.io/react-native-navigation/docs/before-you-start/) 
- React native render HTML, [link](https://github.com/meliorence/react-native-render-html)
- react native webView, [link](https://github.com/react-native-webview/react-native-webview)
- realm
- Redux
- React Redux
- Redux thunk
- @types/i18n-js
- @types/node
- @types/i18n-js

Once the following is done, Navigate to the iOS folder from your terminal by `cd ios/` and run `pod install`

To Create a screen page, run the following command

```
yarn screen NameOfTheScreen
```

To Create a shared component, run the following command

```
yarn cmp NameOfTheSharedComponent
```

NB: IT IS IMPORTANT THAT THE "TemplateFolder" AND "TemplateSharedComponent.tsx" DONT BE DELETED

