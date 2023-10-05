export class CreditCard{
  #cancelledStatus = new Set(['Cancelada', 'CANCELADA']);
  public isActive = true;

  constructor(
    public productName: string,
    public productNumber: string,
    status: string,
    public borderColor = 'blue',
  ) {
    this.isActive = this.#cancelledStatus.has(status);
  }
}
