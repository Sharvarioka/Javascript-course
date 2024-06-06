const date = new Date();
console.log(date);
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.getDate());
console.log(date.toLocaleDateString('default', { weekday: "long", month: "long" }));
console.log(date.getDay())
console.log(date.getMonth());

const newDate = new Date(2023, 5, 6)
console.log(newDate, "newDate")
