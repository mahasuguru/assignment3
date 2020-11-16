let employees = [
    {
      name: "Employee One",
      age: 40,
      email: "one@gmail.com",
      departments: ["Computer", "Physics","eee"],
    
    },
    {
      name: "Employee Two",
      age: 10,
      email: "Two@gmail.com",
      departments: ["Computer"],
     
    },
    {
      name: "Employee Three",
      age: 10,
      email: "Three@gmail.com",
      departments: ["Physics", "Chemistry"],
     
    },
    {
      name: "Employee Four",
      age: 60,
      email: "Four@gmail.com",
      departments: ["Chemistry", "Physics"],
     
    },
    {
      name: "Employee Five",
      age: 70,
      email: "Five@gmail.com",
      departments: ["Computer", "Physics", "Chemistry"],
     
    },
    {
      name: "Employee Six",
      age: 70,
      email: "Six@gmail.com",
      departments: ["Computer", "Physics"],
     
    },
  ];
 
  let keynames =[];
  let keyvalues =[];
  let obj2 = [];
  let obj3 = [];

  let dep=[];
  for ( let j = 0 ; j < employees.length; j++ ) {
    result1 = Object.keys(employees[j]).map(key => ({type: key, value: employees[j][key]}));
    obj3.push(employees[j]);
    if(obj2.length === 0){
    for (let i=0 ; i<result1.length; i++){
        obj2.push(result1[i].type);
    }
    }
     dep.push([...employees[j].departments]);
    
  }
  let unique=[];
for (let i = 0; i < dep.length; i++){
    for (let j=0;j<dep[i].length;j++){
unique.push(dep[i][j]);
    }
}
  let uniqueChars = [...new Set(unique)];

console.log(uniqueChars);
  keynames.push(obj2);
  var table = "<tr>";
  for (let i=0 ; i<obj2.length; i++){

    table += "<th>" +obj2[i] + "</th>";
    
  document.getElementById("headval").innerHTML = table;

  }
 
  let keyvalue = [];
  var tbody = "<tbody>";
  
  for ( let i = 0 ; i < obj3.length; i++ ) {
    keyvalue=[];
    tbody += "<tr>";
    for ( let j = 0 ; j < obj2.length; j++ ) {
       
        keyvalue.push(obj3[i][obj2[j]]);
       if (keyvalue.length === obj2.length){
           
       
        for (let k=0 ; k<keyvalue.length; k++){
      
          tbody += "<td>" +keyvalue[k] + "</td>";
        }
          tbody += "</tr>";
        document.getElementById("bodyval").innerHTML = tbody;
        
       }
    }
  }

  document.getElementById("totalemployye").innerHTML =  "total no of employees is " + obj3.length;
  var select = "<selct>"
   select += '<option selected disabled hidden value="department">' + 'depatment' + '</option>';
   document.getElementById("departments").innerHTML = select;  
  function getdepartmentlist(){
     
for(let i=0; i<uniqueChars.length; i++){
     select += "<option>"
    select += uniqueChars[i];
    select += "</option>"
  
document.getElementById("departments").innerHTML = select;  
}  
  }
  const myTableTbody = document.querySelector('#myTable tbody');
const myTableThead = document.querySelector('#myTable thead');

const jsonFromHtml = (tbody, thead) => {
	let tableJson = {rows:[]};
  [...tbody.children].forEach(tableRow => {
    let rowEntry = {};
    [...tableRow.children].forEach((cell, column) => rowEntry[thead.children[0].children[column].textContent] = cell.textContent);
    tableJson.rows.push(rowEntry);
  });
  return tableJson;
};

const customSort = (arr, key, order) => {
	let sortCompare = order == 'Desc' ? -1 : 1;
  return arr.sort((first, second) => first[key]>second[key] ?  sortCompare : first[key]<second[key] ?  -sortCompare : 0);
};

const arrayToTable = (arr, tbody, thead) => {
	let rows = [];
	arr.forEach((row, rowNum) => {
  	row = [...thead.children[0].children].map(th => row[th.textContent] ? row[th.textContent] : '');
    row = row.map(td => `<td>${td}</td>`);
    row = `<tr>${row.join('')}</tr>`;
    rows.push(row);
  });
  tbody.innerHTML = rows.join('');
};
document.querySelector('#selectionOrder').addEventListener('change', function(){
	let sortKey = this.value.match(/[a-z]+/)[0];
  let sortOrder = this.value.match(/(A|De)sc/) ? this.value.match(/(A|De)sc/)[0] : 'Asc';
  let myTableJson = jsonFromHtml(myTableTbody, myTableThead);
  myTableJson.rows = customSort(myTableJson.rows, sortKey, sortOrder);
  arrayToTable(myTableJson.rows, myTableTbody, myTableThead);
});
var tabappend = "<tbody>"
    
      function searchbutton(){
        var departmnt = document.getElementById("departments");
        var selectedText = departmnt.options[departmnt.selectedIndex].innerHTML;
        var name = document.getElementById("namesearch");
        var enteredname = name.value;
        let tableJson = {rows:[]};
    
       var table = document.getElementById("bodyval");
       var rowCount = table.rows.length;
    tabappend='';
                for(var i=0; i<rowCount; i++) {
                    var row = table.rows[i];
                    var tablecompar=[];
                    for (let k=0; k< row.cells.length; k++){
                        var chkbox = row.cells[k].innerText;
                    tablecompar.push(chkbox);
                    }
                    //var compar= chkbox.data;
                    if(tablecompar.includes(enteredname,selectedText)) {
                        //table.deleteRow(i);
                        //rowCount--;
                        //i--;
                        tableJson.rows.push(row);
                        tabappend+="<tr>";
                        for(let j = 0; j <  row.cells.length; j ++ ){
                        tabappend += "<td>";
                        tabappend  += row.cells[j].innerHTML;
                        tabappend += "</td>";
                    }
                        tabappend += "</tr>";
                       
                    }
    
                   
                   
                }
                document.getElementById("bodyval").innerHTML= tabappend;
      }
      function  resettable(){
        document.getElementById('departments').value='department';
        document.getElementById('namesearch').value='';
        document.getElementById("bodyval").innerHTML=tbody;
       }
console.log(obj2);
console.log(obj3);
