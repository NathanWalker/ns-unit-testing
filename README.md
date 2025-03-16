## Unit Testing Platform Native APIs with NativeScript

A NativeScript [Vue 3](https://nativescript-vue.org/) example demonstrating unit testing platform native APIs as outlined in the [Unit Testing Documentation](https://docs.nativescript.org/guide/testing).

Any project can setup unit testing via `ns test init`

### Test iOS and Android APIs

```
ns test android

ns test ios
```

This simple example unit tests native platform device storage APIs such as iOS [NSUserDefaults](https://developer.apple.com/documentation/foundation/nsuserdefaults) and Android [SharedPreferences](https://developer.android.com/reference/android/content/SharedPreferences) however you can unit test any platform API provided to you by platforms using [@nativescript/types-android](https://github.com/NativeScript/NativeScript/tree/main/packages/types-android/src/lib/android) or [@nativescript/types-ios](https://github.com/NativeScript/NativeScript/tree/main/packages/types-ios/src/lib/ios/objc-x86_64) as your strongly typed guide. These are generally already setup in any NativeScript project via the `references.d.ts` included via your tsconfig.

*Note*: Storage APIs are already provided in a cross platform singular API via @nativescript/core's [ApplicationSettings](https://docs.nativescript.org/core/application-settings) so this example is just for demo purposes.