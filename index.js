
fetch ('http://localhost:3000/stories')
.then(resp => resp.json())
.then(data => {
    console.log(data)
    // renderStory(stories)
})

// function renderStory (stories) {

    // let customStory = document.querySelector('#questionnaire')

    // let question1 = document.querySelector('#question-1-input')
    // question1.textContent = stories.story;

    // let question2 = document.querySelector('#question-2-input')
    // question2.textContent = stories.story;

    // let question3 = document.querySelector('#question-3-input')
    // question3.textContent = stories.story;

    // let question4 = document.querySelector('#question-4-input')
    // question4.textContent = stories.story;

    // let question5 = document.querySelector('#question-5-input')
    // question5.textContent = stories.story;

// }


let storyForm = document.querySelector('#questionnaire');

storyForm.addEventListener('submit', (e) => {
    e.preventDefault();

let word1 = document.querySelector('#question-1-input')
word1.textContent = word1.value

let word2 = document.querySelector('#question-2-input')
word2.textContent = word2.value

let word3 = document.querySelector('#question-3-input')
word3.textContent = word3.value

let word4 = document.querySelector('#question-4-input')
word4.textContent = word4.value

let word5 = document.querySelector('#question-5-input')
word5.textContent = word5.value


// let word1 = e.target.word1.value;
// let word2 = e.target.word2.value;
// let word3 = e.target.word3.value;
// let word4 = e.target.word4.value;
// let word5 = e.target.word5.value;

let storyPost = document.querySelector('#posts');
let custStory = document.querySelector('#custom-story')
    custStory.textContent = `${word1} is going ${word2} then ${word3} because ${word4} after ${word5}`
    console.log(custStory)

    storyPost.append(custStory)
})

