const Manager = require("../tests/Manager");

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const emp = new Manager("Foo", 1, "test@test.com", testValue);
    expect(emp.officeNumber).toBe(testValue);
  });
  