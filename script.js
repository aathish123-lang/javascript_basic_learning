// CALCULATOR USING AN OPERATORS

let num1=5;
let num2=5;

let operator="%"

if (operator === "+") {
    console.log(num1+num2);
}

else if (operator === "-") {
    console.log(num1-num2);
}

else if (operator === "*") {
    console.log(num1*num2);
}

else if (operator === "/"){
    if (num2 !==0) {
         console.log(num1/num2);
    }
    else{
         console.log("NUMBER 2 CANNOT BE ZERO !");
    }
}

else{
    console.log("INVALID OPERATORS !");
}


//STUNDENT MARKS GRADE REMARKS AND RESULTS


let marks=88;
let bonus=5;
marks += bonus;
let grade;
let remarks;
if (marks>90) {
    grade="GRADE: A"
}
else if(marks>70){
    grade="GRADE: B"
}
else if(marks>50){
    grade="GRADE: C"
}
else{
    grade="GRADE: F"
}
let result = marks >= 50 ? "PASS" : "FAIL";
switch (grade) {
    case "GRADE: A":
        remarks="EXCELLENT"
        break;
    case "GRADE: B":
        remarks="GOOD"
        break;
    case "GRADE: C":
        remarks="AVERAGE"
        break;
    case "GRADE: F":
        remarks="NEED IMPROVEMENTS !"
        break;
    default:
        break;
}
console.log(marks);
console.log(grade);
console.log(result);
console.log(remarks);



