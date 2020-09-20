var getPicture=function(employee)
    {
        return employee.photo
    }
var drawTable=function(employees)//function to draw table
    {
        var rows=d3.select("#employeeTable tbody")
            .selectAll("tr")
            .data(employees)
            .enter()
            .append("tr")
    rows.append("td")
    .text(function(employee)
        {
            return employee.firstName;
        });
    rows.append("td")
        .text(function(employee)
            {
                return employee.lastName;
            });
    rows.append("td")
            .append("img")
            .attr("src",getPicture)
    rows.append("td")
        .text(function(employee)
            {
                return employee.title;
            });
    rows.append("td")
        .text(function(employee)
            {
                return employee.unit;
            });
    rows.append("td")
        .text(function(employee)
            {
                return employee.bio;
            });
    rows.append("td")
        .text(function(employee)
            {
                return employee.email;
            });
    rows.append("td")
        .text(function(employee)
            {
                return employee.phone;
            });

    }

var setBanner=function(message)
    {
        d3.select ("#banner")
            .text(message);
    }
var employeePromise = d3.json("employee.json")//type needs to be a string-link to the employee json file
var succFCN=function(employees)//function if it does work (parameters)
    {
        console.log("Employees",employees);//("what you want to show up in console if it works",the parameters of the function)
        setBanner("Employees Tables");
        drawTable(employees);//calling function to draw the table
    }
var failFCN=function(err)//function if it doesn't work (parameters)
    {
        console.log("did not find file",err);//("what you want ot show up in the console if it doesn't work",parameters of the function)
        setBanner("Employees are Missing");
    }
employeePromise.then(succFCN,failFCN);//can only use .then if it's a sting