const correctAnswers = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  10: false
};
function checkAnswer1() {
  const inputs = document.querySelectorAll(".cell1");
  let answer1 = "";
  inputs.forEach(inp => answer1 += inp.value.toLowerCase());
  if (answer1.length < 18) {
    alert("keep going, not all letters are filled");
  } else if (answer1 === "whotoldyouaboutus?") {
    correctAnswers[1] = true
    const allCorrect = Object.values(correctAnswers).every(v => v === true);
    if (allCorrect){
        alert("THERE IT IS!!!!!!! YOU GOT ALL THE TRACK NAMES FOR LOW SCHOOL RIGHT :D")
    } else{
        alert("BOOM. you got it");
    }
  } else {
    alert("try again :)");
  }
}
function checkAnswer2() {
  const inputs = document.querySelectorAll(".cell2");
  let answer2 = "";
  inputs.forEach(inp => answer2 += inp.value.toLowerCase());
  if (answer2.length < 15) {
    alert("keep going, not all letters are filled");
  } else if (answer2 === "aheartthatbites") {
    correctAnswers[2] = true
    const allCorrect = Object.values(correctAnswers).every(v => v === true);
    if (allCorrect){
        alert("THERE IT IS!!!!!!! YOU GOT ALL THE TRACK NAMES FOR LOW SCHOOL RIGHT :D")
    } else{
        alert("BOOM. you got it");
    }
  } else {
    alert("try again :)");
  }
}
function checkAnswer3() {
  const inputs = document.querySelectorAll(".cell3");
  let answer3 = "";
  inputs.forEach(inp => answer3 += inp.value.toLowerCase());
  if (answer3.length < 10) {
    alert("keep going, not all letters are filled");
  } else if (answer3 === "streetwalk") {
    correctAnswers[3] = true
    const allCorrect = Object.values(correctAnswers).every(v => v === true);
    if (allCorrect){
        alert("THERE IT IS!!!!!!! YOU GOT ALL THE TRACK NAMES FOR LOW SCHOOL RIGHT :D")
    } else{
        alert("BOOM. you got it");
    }
  } else {
    alert("try again :)");
  }
}
function checkAnswer4() {
  const inputs = document.querySelectorAll(".cell4");
  let answer4 = "";
  inputs.forEach(inp => answer4 += inp.value.toLowerCase());
  if (answer4.length < 10) {
    alert("keep going, not all letters are filled");
  } else if (answer4 === "littledove") {
    correctAnswers[4] = true
    const allCorrect = Object.values(correctAnswers).every(v => v === true);
    if (allCorrect){
        alert("THERE IT IS!!!!!!! YOU GOT ALL THE TRACK NAMES FOR LOW SCHOOL RIGHT :D")
    } else{
        alert("BOOM. you got it");
    }
  } else {
    alert("try again :)");
  }
}
function checkAnswer5() {
  const inputs = document.querySelectorAll(".cell5");
  let answer5 = "";
  inputs.forEach(inp => answer5 += inp.value.toLowerCase());
  if (answer5.length < 10) {
    alert("keep going, not all letters are filled");
  } else if (answer5 === "satellites") {
    correctAnswers[5] = true
    const allCorrect = Object.values(correctAnswers).every(v => v === true);
    if (allCorrect){
        alert("THERE IT IS!!!!!!! YOU GOT ALL THE TRACK NAMES FOR LOW SCHOOL RIGHT :D")
    } else{
        alert("BOOM. you got it");
    }
  } else {
    alert("try again :)");
  }
}
function checkAnswer6() {
  const inputs = document.querySelectorAll(".cell6");
  let answer6 = "";
  inputs.forEach(inp => answer6 += inp.value.toLowerCase());
  if (answer6.length < 10) {
    alert("keep going, not all letters are filled");
  } else if (answer6 === "lunchbreak") {
    correctAnswers[6] = true
    const allCorrect = Object.values(correctAnswers).every(v => v === true);
    if (allCorrect){
        alert("THERE IT IS!!!!!!! YOU GOT ALL THE TRACK NAMES FOR LOW SCHOOL RIGHT :D")
    } else{
        alert("BOOM. you got it");
    }
  } else {
    alert("try again :)");
  }
}
function checkAnswer7() {
  const inputs = document.querySelectorAll(".cell7");
  let answer7 = "";
  inputs.forEach(inp => answer7 += inp.value.toLowerCase());
  if (answer7.length < 10) {
    alert("keep going, not all letters are filled");
  } else if (answer7 === "jamsession") {
    correctAnswers[7] = true
    const allCorrect = Object.values(correctAnswers).every(v => v === true);
    if (allCorrect){
        alert("THERE IT IS!!!!!!! YOU GOT ALL THE TRACK NAMES FOR LOW SCHOOL RIGHT :D")
    } else{
        alert("BOOM. you got it");
    }
  } else {
    alert("try again :)");
  }
}
function checkAnswer8() {
  const inputs = document.querySelectorAll(".cell8");
  let answer8 = "";
  inputs.forEach(inp => answer8 += inp.value.toLowerCase());
  if (answer8.length < 9) {
    alert("keep going, not all letters are filled");
  } else if (answer8 === "mint&flio") {
    correctAnswers[8] = true
    const allCorrect = Object.values(correctAnswers).every(v => v === true);
    if (allCorrect){
        alert("THERE IT IS!!!!!!! YOU GOT ALL THE TRACK NAMES FOR LOW SCHOOL RIGHT :D")
    } else{
        alert("BOOM. you got it");
    }
  } else {
    alert("try again :)");
  }
}
function checkAnswer9() {
  const inputs = document.querySelectorAll(".cell9");
  let answer9 = "";
  inputs.forEach(inp => answer9 += inp.value.toLowerCase());
  if (answer9.length < 15) {
    alert("keep going, not all letters are filled");
  } else if (answer9 === "beforeigraduate") {
    correctAnswers[9] = true
    const allCorrect = Object.values(correctAnswers).every(v => v === true);
    if (allCorrect){
        alert("THERE IT IS!!!!!!! YOU GOT ALL THE TRACK NAMES FOR LOW SCHOOL RIGHT :D")
    } else{
        alert("BOOM. you got it");
    }
  } else {
    alert("try again :)");
  }
}
function checkAnswer10() {
  const inputs = document.querySelectorAll(".cell0");
  let answer0 = "";
  inputs.forEach(inp => answer0 += inp.value.toLowerCase());
  if (answer0.length < 8) {
    alert("keep going, not all letters are filled");
  } else if (answer0 === "backhome") {
    correctAnswers[10] = true
    const allCorrect = Object.values(correctAnswers).every(v => v === true);
    if (allCorrect){
        alert("THERE IT IS!!!!!!! YOU GOT ALL THE TRACK NAMES FOR LOW SCHOOL RIGHT :D")
    } else{
        alert("BOOM. you got it");
    }
  } else {
    alert("try again :)");
  }

}
