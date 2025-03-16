import { Utils } from "@nativescript/core";

/**
 * Just example of platform API usage without leaving TypeScript
 * Code is for demonstration only
 *
 * Note: you would never need to do this for a native module like this
 * Because @nativescript/core has ApplicationSettings that does exactly this:
 * https://docs.nativescript.org/core/application-settings
 */
export const deviceStorage = () => {
  if (__APPLE__) {
    return NSUserDefaults.standardUserDefaults;
  } else {
    return Utils.android
      .getApplicationContext()
      .getSharedPreferences("MyLocalStorage", 0);
  }
};

export const setStorageItem = (key: string, value: string) => {
  if (__APPLE__) {
    (deviceStorage() as NSUserDefaults).setObjectForKey(value, key);
  } else {
    const editor = (
      deviceStorage() as android.content.SharedPreferences
    ).edit();
    editor.putString(key, value);
    editor.apply();
  }
};

export const getStorageItem = (key: string) => {
  if (__APPLE__) {
    return (deviceStorage() as NSUserDefaults).stringForKey(key);
  } else {
    return (deviceStorage() as android.content.SharedPreferences).getString(
      key,
      ""
    );
  }
};

export const clearStorage = () => {
  if (__APPLE__) {
    (deviceStorage() as NSUserDefaults).removePersistentDomainForName(
      NSBundle.mainBundle.bundleIdentifier
    );
  } else {
    (deviceStorage() as android.content.SharedPreferences)
      .edit()
      .clear()
      .apply();
  }
};
