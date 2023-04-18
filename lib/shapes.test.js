const { Circle, Triangle, Square } = require('./shapes');

describe("Circle test", () => {
    test("tests for a circle with a red background", () => {
      const shape = new Circle();
      shape.setColor('red');
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="100" r="80" fill="red" />'
      );
    });
  });

  describe("Triangle test", () => {
    test("tests for a triangle with a blue background", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });

  describe("Square test", () => {
    test("tests for a square with a green background", () => {
      const shape = new Square();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="green" />'
      );
    });
  });