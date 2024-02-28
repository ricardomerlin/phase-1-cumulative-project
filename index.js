const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
  });
  const openai = new OpenAIApi(configuration);




addEventListener('DOMContentLoaded', main)

function main () {


fetch('https://madlibs-2-0-website.onrender.com/stories')
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
        
        let blueArrow1 = document.getElementById('blue-arrow');
        blueArrow1.style.display = 'none';
        let blueArrow2 = document.getElementById('blue-arrow-2')
        blueArrow2.style.display = 'none';

    let previousStories = document.querySelector('#previous-stories')
    let children = previousStories.querySelectorAll('*')
    children.forEach(child => {
        console.log(child);
        child.style.display = 'inline-block';
        })

    let animal1 = document.getElementById('question-0-input');
    let animal = animal1.value;

    let name1 = document.getElementById('question-name-input');
    let name = name1.value;

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

    let word6 = document.getElementById('question-6-input');
    let adjective3 = word6.value

    let word7 = document.getElementById('question-7-input');
    let noun2 = word7.value

    exports.chatReq = async (req, res) => {
        try {
            const message = `Given the following parts of speech, create a random, adults-only story that is less than 200 words: ${animal}, ${name}, ${nounSing}, ${noun2}, ${nounPlur}, ${adjective1}, ${adjective2}, ${adjective3}, ${verbPastTense}`;
            const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }],
            temperature: 0,
            max_tokens: 1000,
            });
            res.status(200).json(response);
        } catch (err) {
            res.status(500).json(err.message);
        }
        };


    let storyText = document.getElementById('custom-story')
    storyText.textContent = 'jj'


// 
    let animalName = document.querySelector('#animal')

        animalName.addEventListener('mouseover', (e) => {
        e.onmouseover = title;
    })

    let username = document.querySelector('#name')

    username.addEventListener('mouseover', (e) => {
    e.onmouseover = title;
    })

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

//
    fetch ('https://madlibs-2-0-website.onrender.com/stories', {
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
    .then(r => r.json())
    .then(data => {
        postedStories(data)
    })
    console.log(storyText)
    questionnaire.reset()
    })

    let redButton = document.querySelector('#red-button');
    let catImage = document.querySelector('#cat-image');
  
    redButton.addEventListener('click', async () => {
      try {
        const catUrl = await getRandomCat();
        catImage.src = catUrl;
      } catch (error) {
        console.error('Error getting random cat:', error);
      }
      catImage.style.display = 'inline-block'
    });
  
    async function getRandomCat() {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        return data[0].url;
      } catch (error) {
        throw error;
      }
    }
}
//
function postedStories (data) {

    let previousPosts = document.querySelector('#previous-stories')

    let previousStory = document.createElement('p')
    previousStory.textContent = data.story;

    let likeButton = document.createElement('button')
    likeButton.textContent = data.likes + " likes"

    let dislikeButton = document.createElement('button')
    dislikeButton.textContent = data.dislikes + " dislikes";

    previousPosts.append(previousStory, likeButton, dislikeButton)


    let countL = data.likes
    likeButton.addEventListener('click', (e) => {
        countL++;
        likeButton.textContent = countL + " likes";

        fetch (`https://madlibs-2-0-website.onrender.com/stories/${data.id}`, {
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

        fetch (`https://madlibs-2-0-website.onrender.com/stories/${data.id}`, {
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