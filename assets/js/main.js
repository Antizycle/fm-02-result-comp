fetch('./assets/test-data/data.json')
.then(response => {
    return response.json();
})
.then(jsonData => {
  return rendreData(jsonData);
})
.catch(error => {
    console.log(error, "404: Data is not Found");
});

const btnElem = document.getElementById('randomizeBtn');
btnElem.addEventListener('click', randomizedata);

let newData = [];

function rendreData(testData) {
  const resultCategoriesElem = document.getElementById('resultCategories');
  const avrgScoreElem = document.getElementById('avrgScore');
  const rankElem = document.getElementById('resultsRank');
  const percentileElem = document.getElementById('resultPercentile');


  if (resultCategoriesElem) {
    let dataScores = 0;
    resultCategoriesElem.innerHTML = '';
    
    testData.forEach(entry => {
      let html = '';
      html    += '<div class="results__category results__category--' + entry.category.toLowerCase() + '">';
      html    += '<img src="' + entry.icon + '" class="category-icon" />';
      html    += '<h4>' + entry.category + '</h4><span ><b>' + entry.score + '</b> / 100</span></div>';
      resultCategoriesElem.innerHTML += html;
      dataScores += entry.score;
    });

    const avrgScore = Math.round(dataScores / testData.length);
    let scoreRank = 'Great';
  
    if (avrgScore < 26) scoreRank = 'Very Poor';
    if (avrgScore < 51 && avrgScore > 25) scoreRank = 'Poor';
    if (avrgScore < 66 && avrgScore > 50) scoreRank = 'Average';
    if (avrgScore < 81 && avrgScore > 65) scoreRank = 'Great';
    if (avrgScore < 96 && avrgScore > 80) scoreRank = 'Outstanding';
    if (avrgScore > 96) scoreRank = 'Excellent';

    avrgScoreElem.textContent = avrgScoreElem ? avrgScore : 13;
    rankElem.textContent = scoreRank;
    percentileElem.textContent = (Math.random() * 100).toFixed(2) + '%';
    newData = testData.slice();
  }
}

function randomizedata(){
  let i;
  const arrayLength = newData.length;
  for (i = 0; i < arrayLength; i++) {
    newData[i].score = Math.round(Math.max(Math.random(), Math.random(), Math.random(), Math.random(), Math.random()) * 100);
  }

  rendreData(newData);
}
