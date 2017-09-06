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
  let finalSalesData = [repeatedCompanies[0]];
  //console.log(finalSalesData[0]);
  for (let k = 1; k < repeatedCompanies.length; k++)
  {
    for (let l = 0; l < finalSalesData.length; l++)
    {
      if (repeatedCompanies[k].name === finalSalesData[l].name)
      {

        finalSalesData[l].totalSales += repeatedCompanies[k].totalSales;
        finalSalesData[l].totalTaxes += repeatedCompanies[k].totalTaxes;
        break;
      }
      else if (l == finalSalesData.length - 1)
      {
        finalSalesData.push(repeatedCompanies[k]);
        break;
      }
    }

  }

  console.log(finalSalesData);

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

