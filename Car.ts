class Car {
  private motor;

  private brakePads;

  private wheels;

  public brake() {
    this.brakePads = true;
    this.wheels = "straight";
  }

  public turnLeft() {
    this.motor = true;
    this.wheels = "left";
    this.brakePads = false;
  }

  public turnRight() {
    this.motor = true;
    this.wheels = "right";
    this.brakePads = false;
  }

  public stop() {
    this.motor = false;
    this.brakePads = true;
    this.wheels = "straight";
  }

  public drive() {
    this.motor = true;
    this.brakePads = false;
  }
}

const car = new Car();

car.motor = true;
