// from data.js
const tableData = data;

// get table references with d3.select()
const tbody = d3.select("tbody");

// define a function called buildTable that takes an argument called data
function buildRow(citing) {
  var row = tbody.append("tr");
  Object.entries(citing).forEach(([key, value]) => {
    console.log(key, value);
  let cell = row.append("td");
  cell.text(value);
});
};

function buildTable(data) {
  console.log(data);
  tbody.html(' ');
  data.forEach(buildRow)
};

// define a function handleClick() that takes no arguments
function handleClick() {
  console.log("clicked");
  // Grab the #datetime value from the filter with d3.select().property()
  var inputElement = d3.select('#datetime');
  var inputValue = inputElement.property("value");
  // store the Data into a local variable called filteredData
  var filteredData = data.filter(data => data.datetime === inputValue);
  console.log(inputValue);
  buildTable(filteredData)
}

// Attach an event to listen for the form button #filter-btn to be clicked, it should call your handleClick function
var inputField = d3.select("#filter-btn");
inputField.on('click',handleClick);

// Build the table when the page loads
buildTable(data);