class VendorMachine {
  private isOn: boolean;

  private snacksQty: number;

  private money: number;

  public constructor() {
    this.isOn = false;
    this.snacksQty = 50;
    this.money = 0;
  }

  public buySnack(): void {
    this.isOn = true;

    if (this.snacksQty === 0) {
      throw new Error("plus de snacks");
    }

    this.snacksQty = this.snacksQty - 1;
    this.money = this.money + 2;
  }

  public reset(): void {
    this.isOn = false;
    this.snacksQty = this.calculateLeftSnacksQty();
    this.money = 0;
    this.isOn = true;
  }

  private calculateLeftSnacksQty() {
    return this.snacksQty + (50 - this.snacksQty);
  }

  public shootWithFoot(): string {
    this.isOn = false;

    this.dropMoney();
    this.dropSnacks();

    return `Snacks tombés : ${this.snacksQty} et monnaie`;
  }

  private dropMoney() {
    let moneyToDrop = 20;
    if (this.money < 20) {
      moneyToDrop = this.money;
    }
    this.money = this.money - moneyToDrop;
  }

  private dropSnacks() {
    let snackQtyToDrop = 5;

    if (this.snacksQty < 5) {
      snackQtyToDrop = this.snacksQty;
    }

    this.snacksQty = this.snacksQty - snackQtyToDrop;
  }
}

const vendorMachine = new VendorMachine();
vendorMachine.shootWithFoot();
