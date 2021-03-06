import { BorrowAndTrade, CreateOrder } from '../generated/Borrow/Borrow'
import { Borrow, Order } from '../generated/schema'

export function handleBorrowAndTrade(event: BorrowAndTrade): void {
  let borrow = new Borrow(event.transaction.hash.toHexString())
  borrow.timestamp = event.params.timestamp
  borrow.user = event.params.user
  borrow.tokenId = event.params.tokenId
  borrow.price = event.params.price
  borrow.amount = event.params.amount
  borrow.slippage = event.params.slippage
  borrow.save()
}

// 创建订单的Handle处理
export function handleCreateOrder(event: CreateOrder): void {
    let order = new Order(event.transaction.hash.toHexString())
    let tokenPirs = event.params.tokenPairs
    order.tokenPair0 = tokenPirs[0]
    order.tokenPair1 = tokenPirs[1]
    order.orderType  = event.params.orderType
    order.direction = event.params.direction
    order.pay = event.params.pay
    order.borrow = event.params.borrow
    order.status = event.params.status
    order.save()
}
