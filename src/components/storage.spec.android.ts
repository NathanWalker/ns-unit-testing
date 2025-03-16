import { Utils } from "@nativescript/core";

describe("Android Storage", () => {
  afterAll(() => {
    deviceStorage().edit().clear().apply();
  });

  it("strings", () => {
    const editor = deviceStorage().edit();
    editor.putString("testKey", "Hi Native Device Storage");
    editor.apply();
    expect(deviceStorage().getString("testKey", "")).toBe(
      "Hi Native Device Storage"
    );
  });

  it("booleans", () => {
    const editor = deviceStorage().edit();
    editor.putBoolean("isHelpful?", true);
    editor.apply();
    expect(deviceStorage().getBoolean("isHelpful?", false)).toBe(true);
  });

  it("numbers", () => {
    const editor = deviceStorage().edit();
    editor.putFloat("isHelpful?", 2.5834500789642334);
    editor.apply();
    expect(deviceStorage().getFloat("isHelpful?", 0)).toBe(2.5834500789642334);
  });
});

function deviceStorage() {
  return Utils.android
    .getApplicationContext()
    .getSharedPreferences("MyLocalStorage", 0);
}
