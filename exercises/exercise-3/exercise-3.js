let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printReceipt(order) {
  let total = 0;
  console.log("QTY     ITEM                TOTAL");
  for (let i = 0; i < order.length; i++) {
    const item = order[i];
    const { itemName, quantity, unitPrice } = item;
    const totalPrice = quantity * unitPrice;
    total += totalPrice;
    console.log(`${quantity}       ${itemName}           ${totalPrice.toFixed(2)}`);
  }
  console.log(`Total: ${total.toFixed(2)}`);
}
printReceipt(order);