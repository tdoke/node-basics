/* module exporting functions */
const { PI } = Math;
const area = (r) => PI * r ** 2;
const circumference = (r) => 2 * PI * r;

module.exports = {
  area,
  circumference
}

console.log("module required by another module (require.main === module)", require.main === module)