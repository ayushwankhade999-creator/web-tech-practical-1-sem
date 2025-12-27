
function loop(){

    let i = prompt("Enter i: ");
    
    document.write(" Nested Loop Example: " + "<br>");
    for(let i = 0; i <= 5; i++){
        for(let j = 0; j <= i; j++){
            document.write("* ");
        }
        document.write("<br>");
    }

    document.write("while Loop Example: " + "<br>")
    while(i > 0){
        document.write("Hello!" + "<br>");
        i = i - 1;
    }
    document.write("<br>");

    document.write("do while Loop Example: " + "<br>");
    do {
        document.write("My Name is Ayush Wankhade" + "<br>");
        i++;
    } while (i < 5);
    document.write("<br>");

    document.write("for Loop Example: " + "<br>");
    for(let i = 0; i <= 5; i++){
        document.write("Erp: 10359" + "<br>");
    }
    document.write("<br>");
}

function ifCond(){

    document.write("if Statement Example: " + "<br>");
    let ifCond = +prompt("Enter Temprature: ");
    if(ifCond <= 25){
        document.write("Cold");
    }
    else{
        document.write("Hot");
    }
}

function elifCond(){
    document.write("else-if Ladder Example: " + "<br>");
    let marks = +prompt("Enter Marks");

    if(marks >= 90){
        document.write("Grade A");
    }
    else if(marks >= 70 || marks <= 80){
        document.write("Grade B");
    }
    else if(marks >= 60 || marks <= 70){
        document.write("Grade C");
    }
    else if(marks >= 50 || marks <= 60){
        document.write("Grade D");
    }
    else{
        document.write("Fail");
    }
}

function nestedIfCond(){
    let Age = prompt("Enter Age: ");
    if(Age >= 18){
        let voterId = prompt("Do you have a Voter ID (Yes/No): ");

        if(voterId == "Yes"){
            document.write("Elligible");
        }
        else{
            document.write("Inelligible");
        }
    }
    else{
        document.write("Inelligible");
    }
}

function switchCaseCond(){
    
    let choice = prompt("Enter Choice (VIBGYOR): ");

    switch(choice){
        case "V": 
        document.write("Violet");
        break;

        case "I": 
        document.write("Indigo");
        break;

        case "B": 
        document.write("Blue");
        break;

        case "G": 
        document.write("Green");
        break;

        case "Y": 
        document.write("Yellow");
        break;

        case "O": 
        document.write("Orange");
        break;

        case "R": 
        document.write("Red");
        break;

        default:
            document.write("Invalid Input!");
    }
}