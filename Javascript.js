// function sum() {
//     var x = 10;
//     console.log("Initial value of x:", x); // Output: 10
//     if (true) {
//         var x = 20; // Redeclared inside the block
//         console.log("Inside block, x:", x); // Output: 20
//     }
//     console.log("Outside block, x:", x); // Output: 20 (var is function-scoped)
// }
// function mknull(){
//     num=null
//     n2=null
// }
// var fl=true
// var num=null
// var n2=null
// if(num==null&&fl==true)
// num=prompt("Enter first Number: ")
// if(n2===null&&fl==true)
// n2=prompt("Enter second Number: ")

// if(num!==null&&n2!=null)
//     {
//         document.write("<h1>Sum of "+num+" & "+n2+" is " +(Number(num)+Number(n2))+"</h1>");
//         mknull()
//         // if(num===null&&n2===null)
//         // fl=confirm("Add Again")
//     }

function display() {
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    if (li.length === 0) {
        outputDiv.innerHTML = "<h1>No Records Found</h1>";
    } else {
        li.forEach(student => {
            let studentEntry = document.createElement("h1");
            studentEntry.innerText = `Name: ${student.name}, Roll: ${student.roll}, Branch: ${student.branch}`;
            outputDiv.appendChild(studentEntry);
        });
    }
}

function addtolist() {
    let name = document.getElementById("sname").value.trim();
    let roll = document.getElementById("ro").value.trim();
    let branch = document.getElementById("brn").value.trim();

    if (name === "" || roll === "" || branch === "") {
        alert("Please enter all details!");
        return;
    }

    let studentEntry = document.createElement("h1");
    studentEntry.innerText = `Name: ${name}, Roll: ${roll}, Branch: ${branch}`;

    document.getElementById("output").appendChild(studentEntry);

    document.getElementById("sname").value = "";
    document.getElementById("ro").value = "";
    document.getElementById("brn").value = "";
}
