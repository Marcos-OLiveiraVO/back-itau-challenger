import Decimal from 'decimal.js';

export interface TransactionProps {
  value: Decimal;
  dateHour: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Transaction {
  _id?: number;
  _props: TransactionProps;

  constructor(props: TransactionProps, id?: number) {
    this._props = props;
    this._id = id;
  }

  public get value(): Decimal {
    return this._props.value;
  }

  public set value(value: Decimal) {
    this._props.value = value;
  }

  public get dateHour(): Date {
    return this._props.dateHour;
  }

  public set dateHour(dateHour: Date) {
    this._props.dateHour = dateHour;
  }

  public get createdAt(): Date | undefined {
    return this._props.createdAt;
  }

  public set createdAt(createdAt: Date) {
    this._props.createdAt = createdAt;
  }

  public get updatedAt(): Date | undefined {
    return this._props.updatedAt;
  }

  public set updatedAt(updatedAt: Date) {
    this._props.updatedAt = updatedAt;
  }
}
