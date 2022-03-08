// import data from data.js
const tableData=data
// Reference the HTML table using d3
var tbody= d3.select("tbody");
// Loop through each field in the dataRow and add
    // each value as a table cell (td)
function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow)=>{
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
        
    })
}
