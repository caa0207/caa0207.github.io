var firstPeriod = prompt("What is your first period class?");
document.write("<h2>" + firstPeriod + "</h2>");
var average1 = test(firstPeriod);
var class1GPA = grade(average1);

var secondPeriod = prompt("What is your second period class?");
document.write("<h2>" + secondPeriod + "</h2>");
var average2 = test(secondPeriod);
var class2GPA = grade(average2);

var thirdPeriod = prompt("What is your third period class?");
document.write("<h2>" + thirdPeriod + "</h2>");
var average3 = test(thirdPeriod);
var class3GPA = grade(average3);

var fourthPeriod = prompt("What is your fourth period class?");
document.write("<h2>" + fourthPeriod + "</h2>");
var average4 = test(fourthPeriod);
var class4GPA = grade(average4);

overallGPA(class1GPA, class2GPA, class3GPA, class4GPA);
//Define functions below here

function test(classes){
  var firstTest = Number(prompt("What grade did you get on the first test?"));
  document.write("<ul><li>" + classes + " Test 1: " + firstTest + "</li>");
  var secondTest = Number(prompt("What grade did you get on the second test?"));
  document.write("<li>" + classes + " Test 2: " + secondTest + "</li>");
  var thirdTest = Number(prompt("What grade did you get on the third test?"));
  document.write("<li>" + classes + " Test 3: " + thirdTest + "</li>");
  var fourthTest = Number(prompt("What grade did you get on the fourth test?"));
  document.write("<li>" + classes + " Test 4: " + fourthTest + "</li>");
  var avg = ((firstTest + secondTest + thirdTest + fourthTest)/4);
  document.write("<h3>" + "Your average in " + classes + " is: " + avg + "</h3></ul>");
  return avg;
}
function grade(grade){
  if (grade >= 93) {
    letterGrade = "A";
    gpa = 4.0
}
else if (grade >= 85) {
  letterGrade = "B";
  gpa = 3.0
}
else if (grade >= 75) {
  letterGrade = "C";
  gpa = 2.0
}
else if (grade >= 67) {
  letterGrade = "D";
  gpa = 1.0
}
else if (grade <= 66) {
  letterGrade = "F";
  gpa = 0
}
  document.write("<h3>" + letterGrade + "</h3>");
  return gpa;
}
 
function overallGPA(class1GPA, class2GPA, class3GPA, class4GPA){
  var gpa = ((class1GPA + class2GPA + class3GPA + class4GPA)/4);
  document.write("<h4>" + "Overall GPA: " + gpa + "</h4>");
  return gpa
}