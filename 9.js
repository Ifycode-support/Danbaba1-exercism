export function remainingOrders(timeLeft, orders) {
  let juice = [];
  let time = 0;
  do{
    let order = 'Pure Strawberry Joy';
    switch(order){
      case 'Pure Strawberry Joy':
        time = 0.5;
        break;
      case 'Energizer':
        time += 1.5;
        break;
      case 'Green Garden':
        time = 1.5;
        break;
      case 'Tropical Island':
        time = 3;
        break;
      case 'All or Nothing':
        time = 5;
        break;
      default:
        time = 2.5;
    }
    if((timeLeft - time) == 0){
      let name = orders.pop();
      juice.push(name);
    }
  } while(timeLeft > 0);
  return juice;
}
