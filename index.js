addEventListener('DOMContentLoaded', main)

function main () {


fetch('http://localhost:3000/stories')
  .then(res => res.json())
  .then(data => {
    for (let i of data) {
        console.log(i)
        postedStories(i)
    }
    console.log(data);
    makeCustomStory(data);
  })
  .catch(error => {
    console.error(error);
  });



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
    let adjective1 = word4.value;

    let word5 = document.getElementById('question-5-input');
    let adjective2 = word5.value;

    let storyText = document.getElementById('custom-story')
    storyText.textContent = `This year, my family is hosting Thanksgiving at my sister's house. She always makes a big deal about bringing a gift or dish, so this year I decided to bring a ${nounSing} . Last year, my brother brought ${nounPlur}, and my sister was NOT happy.

    As the day approached, I carefully prepared my surprise dish, a secret weapon to dazzle the family taste buds. The anticipation grew as I  ${verbPastTense} on my way to my sister's home, armed with my mysterious creation. Little did they know, a culinary masterpiece awaited them.
    
    To everyone's surprise, my dish turned out to be ${adjective1} ! The unique flavors and textures were a ${adjective2} addition to the traditional spread. This Thanksgiving, my unexpected contribution became a highlight, turning the table into a feast of culinary surprises.`

    let singularNoun = document.querySelector('#singular-noun')

        singularNoun.addEventListener('mouseover', (e) => {
        e.onmouseover = title;
    })
    
    let pluralNoun = document.querySelector('#plural-noun')

        pluralNoun.addEventListener('mouseover', (e) => {
        e.onmouseover = title; 
    })

    let pastTenseVerb = document.querySelector('#past-tense-verb')

        pastTenseVerb.addEventListener('mouseover', (e) => {
        e.onmouseover = title;
    });

    let adjectiveFirst = document.querySelector('#adjective-1')

        adjectiveFirst.addEventListener('mouseover', (e) => {
        e.onmouseover = title;
    })

    let adjectiveSecond = document.querySelector('#adjective-2')

        adjectiveSecond.addEventListener('mouseover', (e) => {
        e.onmouseover = title; 
    })    


    fetch ('http://localhost:3000/stories', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            story: storyText.textContent,
            likes: 0,
            dislikes: 0,
        })
    })

    console.log(storyText)

    })
}

function postedStories (data) {

    let previousPosts = document.querySelector('#previous-stories')

    let previousStory = document.createElement('p')
    previousStory.textContent = data.story;

    let likeButton = document.createElement('button')
    likeButton.textContent = data.likes + " likes";

    let dislikeButton = document.createElement('button')
    dislikeButton.textContent = data.dislikes + " dislikes"

    previousPosts.append(previousStory, likeButton, dislikeButton)


    let countL = data.likes
    likeButton.addEventListener('click', (e) => {
        countL++;
        likeButton.textContent = countL + " likes";

        fetch (`http://localhost:3000/stories/${data.id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            likes: countL,
        })
    })
    })
    

    let countD = data.dislikes
    dislikeButton.addEventListener('click', (e) => {
        countD++;
        dislikeButton.textContent = countD + " dislikes";

        fetch (`http://localhost:3000/stories/${data.id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            dislikes: countD,
        })
    })
    })

}


}


