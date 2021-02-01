// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Borrow extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Borrow entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Borrow entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Borrow", id.toString(), this);
  }

  static load(id: string): Borrow | null {
    return store.get("Borrow", id) as Borrow | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get slippage(): BigInt {
    let value = this.get("slippage");
    return value.toBigInt();
  }

  set slippage(value: BigInt) {
    this.set("slippage", Value.fromBigInt(value));
  }
}

export class Order extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Order entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Order entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Order", id.toString(), this);
  }

  static load(id: string): Order | null {
    return store.get("Order", id) as Order | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenPair(): Bytes {
    let value = this.get("tokenPair");
    return value.toBytes();
  }

  set tokenPair(value: Bytes) {
    this.set("tokenPair", Value.fromBytes(value));
  }

  get orderType(): string {
    let value = this.get("orderType");
    return value.toString();
  }

  set orderType(value: string) {
    this.set("orderType", Value.fromString(value));
  }

  get direction(): string {
    let value = this.get("direction");
    return value.toString();
  }

  set direction(value: string) {
    this.set("direction", Value.fromString(value));
  }

  get pay(): BigInt {
    let value = this.get("pay");
    return value.toBigInt();
  }

  set pay(value: BigInt) {
    this.set("pay", Value.fromBigInt(value));
  }

  get borrow(): BigInt {
    let value = this.get("borrow");
    return value.toBigInt();
  }

  set borrow(value: BigInt) {
    this.set("borrow", Value.fromBigInt(value));
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }
}
