/////Golf Problem from FCC.com
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes <= par -2) {
    return names[1];
  } else if (strokes == par -1) {
    return names[2];
  } else {
      (strokes >= par + 3)
  }
  return names[6];
  // Only change code above this line
}

golfScore(5, 4);

////Case Switch Example from FCC.org
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }


  // Only change code above this line
  return answer;
}

caseInSwitch(1);


////ChaintoSwitch problem from FCC.com
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case "John":
      answer = "";
      break;
    case 156:
      answer = "";
      break;
    default:
      answer = "Ate Nine";
       
    
  }


  // Only change code above this line
  return answer;
}

chainToSwitch(7);