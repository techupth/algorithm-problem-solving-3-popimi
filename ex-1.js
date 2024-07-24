function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i <= customers.length - 1; i++) {
    for (let j = 0; j < customers.length - i; j++) {
      if (customers[j] > customers[j + 1]) {
        let convert = customers[j + 1];
        customers[j + 1] = customers[j];
        customers[j] = convert;
      }
    }
  }
  return customers;
}

const customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];

console.log(sortCustomerName(customers));
// ตอบคำถามตรงนี้จ้า
//เป็น On^2 เพราะมีการลูปซ้อนกันตามจำนวน Array
