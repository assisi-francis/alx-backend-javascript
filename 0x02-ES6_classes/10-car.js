export default class Car {
  constructor(brand, motor, color) {
    const _brand = Symbol('brand');
    const _motor = Symbol('motor');
    const _color = Symbol('color')
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
