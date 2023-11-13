addEventListener('DOMContentLoaded', main)

function main () {


fetch('http://localhost:3000/stories')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    makeCustomStory(data);
  })
  .catch(error => {
    console.error(error);
  });

// function inputDescriptions () {
//     let nounSingular = document.getElementById('singular-noun')
//     nounSingular.addEventListener('mouseover', (e) => {
//         console.log('hello')
//     })
// }


function makeCustomStory (data) {
    let questionnaire = document.getElementById('questionnaire')
    questionnaire.addEventListener('submit', (e) => {
    e.preventDefault();

    let word1 = document.getElementById('question-1-input');
    let nounSing = word1.value;

    let word2 = document.getElementById('question-2-input');
    let nounPlur = word2.value;

    let word3 = document.getElementById('question-3-input');
    let verbPastTense = word3.value;

    let word4 = document.getElementById('question-4-input');
    let adjective = word4.value;

    let word5 = document.getElementById('question-5-input');
    let adjective1 = word5.value;

    let storyText = document.getElementById('custom-story')
    storyText.textContent = `This year, my family is hosting Thanksgiving at my sister's house. She always makes a big deal about bringing a gift or dish, so this year I decided to bring a ${nounSing} . Last year, my brother brought ${nounPlur}, and my sister was NOT happy.

    As the day approached, I carefully prepared my surprise dish, a secret weapon to dazzle the family taste buds. The anticipation grew as I  ${verbPastTense} on my way to my sister's home, armed with my mysterious creation. Little did they know, a culinary masterpiece awaited them.
    
    To everyone's surprise, my dish turned out to be ${adjective} ! The unique flavors and textures were a ${adjective1} addition to the traditional spread. This Thanksgiving, my unexpected contribution became a highlight, turning the table into a feast of culinary surprises.`

    console.log(storyText)

    })
}





}