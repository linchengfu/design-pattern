// Order 管理，具体操作解耦出去，此处只保留调用入口
class OrderManager {
  constructor() {
    this.orders = [];
  }

  execute(command, ...args) {
    command.execute(this.orders, ...args)
  }
}

// 命令类
class Command {
  constructor(execute) {
    this.execute = execute
  }
}

// 解耦出来的下单 command
function PlaceOrder(order, id) {
  return new Command((orders) => {
    orders.push(id)
    console.log(`You have place the ${order} order successfully`)
  })
}

// 取消订单 command
function CancelOrder(id) {
  return new Command(orders => {
    orders.filter(o => o.id !== id)
    console.log(`You have cancel the ${id} order successfully`)
  })
}

// 跟踪订单 command
function TrackOrder(id) {
  return new Command(orders => {
    console.log(`You have order the ${id} before 20 minutes`)
  })
}

const orders = new OrderManager()

orders.execute(new PlaceOrder('wanCan', '123'))
orders.execute(new CancelOrder('234'))
orders.execute(new TrackOrder('556'))