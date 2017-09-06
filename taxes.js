var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {
  repeatedCompanies = [];
    for (let i = 0; i < salesData.length; i++)
  {
    let totalSales = 0;
    for (let j = 0; j < salesData[i].sales.length; j++)
    {
      totalSales += salesData[i].sales[j];
    }
    let province = salesData[i].province;
    let totalTaxes = taxRates[province]*totalSales;
    //console.log("Sales: :", totalSales, ", and Taxes: ", totalTaxes);
    repeatedCompanies.push({name: salesData[i].name, totalSales, totalTaxes})
  }
  console.log(repeatedCompanies);

}

var results = calculateSalesTax(companySalesData, salesTaxRates);

// take in sales data
// for the data in the array (normal for loop)
//   add up the sales
//   calculate the tax on the sales
//   contribute these values to a new array, with objects having properties: totalSales, totalTaxes

// create resultArray
// for each new array element
//     if we have seen the name before:
//         add totalSales and totalTaxes to existing objects values
//     else
//         create a new object with values and continue

