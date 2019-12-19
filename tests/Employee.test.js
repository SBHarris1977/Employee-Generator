const Employee = require("../tests/Employee");

test("Set the title", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test("Get employee name", () => {
const name = "Serina";
const emp = new Employee(name);
expect(emp.name).toBe(name);
});