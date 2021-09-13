let questionInfo = [
  ["Pick a color:", "", "", "", ""],
  ["Pick an image:", "", "", "", ""],
  ["What is your approach to life?", "I like to think out of the box", "Methodical, but head-on", "I value connections between people", "I love to explore new places"],
  ["Pick a Jedi:", "Anakin Skywalker", "Obi-Wan Kenobi", "Yoda", "Aayla Secura"],
  ["Pick a clone:", "CT-7567 Captain Rex", "CC-2224 Marshal Commander Cody", "CC-1004 Senior Commander Gree", "CC-5052 Marshal Commander Bly"]
];

let images = [
  ["img1-1.jpg", "img1-2.jpg", "img1-3.jpg", "img1-4.jpg"],
  ["img2-1.jpg", "img2-2.jpg", "img2-3.jpg", "img2-4.jpg"],
  ["img3-1.jpg", "img3-2.jpg", "img3-3.jpg", "img3-4.jpg"],
  ["img4-1.jpg", "img4-2.jpg", "img4-3.jpg", "img4-4.jpg"],
  ["img5-1.jpg", "img5-2.jpg", "img5-3.jpg", "img5-4.jpg"],
];

let result1, result2, result3, result4;
let questionCount = 0;
let totalPoints = 0;

updateQuestion();

document.querySelector("#ans1").addEventListener("click", function() {
  addPoints(1);
});

document.querySelector("#ans2").addEventListener("click", function() {
  addPoints(2);
});

document.querySelector("#ans3").addEventListener("click", function() {
  addPoints(3);
});

document.querySelector("#ans4").addEventListener("click", function() {
  addPoints(4);
});

document.querySelector("#reset").addEventListener("click", reset);

function addPoints(points) {

  totalPoints += points;

  questionCount++;
  updateQuestion();
}

function updateQuestion() {

  if(questionCount == 5) {
    displayResult();
  }
  else {

    document.querySelector("#question").innerHTML = questionInfo[questionCount][0];
      
    document.querySelector("#ans1").innerHTML = questionInfo[questionCount][1];
    document.querySelector("#ans2").innerHTML = questionInfo[questionCount][2];
    document.querySelector("#ans3").innerHTML = questionInfo[questionCount][3];
    document.querySelector("#ans4").innerHTML = questionInfo[questionCount][4];

    document.querySelector("#ans1").style.backgroundImage = "url('img/" + images[questionCount][0] + "')";
    document.querySelector("#ans2").style.backgroundImage = "url('img/" + images[questionCount][1] + "')";
    document.querySelector("#ans3").style.backgroundImage = "url('img/" + images[questionCount][2] + "')";
    document.querySelector("#ans4").style.backgroundImage = "url('img/" + images[questionCount][3] + "')";
  }
}

function displayResult() {

  document.querySelector("#question").style.display = "none";
  document.querySelector(".window").style.display = "none";

  let resultInfo;
  let resultPic;

  if(totalPoints < 10) {
    resultPic = "img/result1.jpg";
    resultInfo = "501st Legion";
  }
  else if(totalPoints >= 10 && totalPoints < 15) {
    resultPic = "img/result2.jpg";
    resultInfo = "212th Attack Battalion";
  }
  else if(totalPoints >= 15 && totalPoints < 20) {
    resultPic = "img/result3.jpg";
    resultInfo = "41st Elite Corps";
  }
  else {
    resultPic = "img/result4.jpg";
    resultInfo = "327th Star Corps";
  }

  document.querySelector("#result").classList.add("window");
  document.querySelector("#result").innerHTML = "<h1>" + resultInfo + "</h1>";
  document.querySelector("#result").innerHTML += "<img src='" + resultPic + "'>";
}

function reset() {

  if(questionCount == 5) {

    document.querySelector(".window").style.display = "block";
    document.querySelector("#question").style.display = "block";

    document.querySelector("#result").innerHTML = "";
  }

  questionCount = 0;
  totalPoints = 0;

  updateQuestion();
}
