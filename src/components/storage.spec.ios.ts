describe("iOS Storage", () => {
  afterAll(() => {
    NSUserDefaults.standardUserDefaults.removePersistentDomainForName(
      NSBundle.mainBundle.bundleIdentifier
    );
  });
  
  it("strings", () => {
    NSUserDefaults.standardUserDefaults.setObjectForKey(
      "Hi Native Device Storage",
      "testKey"
    );
    expect(NSUserDefaults.standardUserDefaults.stringForKey("testKey")).toBe(
      "Hi Native Device Storage"
    );
  });

  it("booleans", () => {
    NSUserDefaults.standardUserDefaults.setBoolForKey(true, "isHelpful?");
    expect(NSUserDefaults.standardUserDefaults.boolForKey("isHelpful?")).toBe(
      true
    );
  });

  it("numbers", () => {
    NSUserDefaults.standardUserDefaults.setDoubleForKey(2.58345, "floats");
    expect(NSUserDefaults.standardUserDefaults.doubleForKey("floats")).toBe(
      2.58345
    );
  });
});
