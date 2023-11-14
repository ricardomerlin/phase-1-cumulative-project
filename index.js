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

    let previousStories = document.querySelector('#previous-stories')
    let children = previousStories.querySelectorAll('*')
    children.forEach(child => {
        console.log(child);
        child.style.display = 'inline-block';
        })

    let animal1 = document.getElementById('question-0-input');
    let animal = animal1.value;
    // animal1.style.color = 'red';

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

    let storyTemplates = [`This year, my family is hosting Thanksgiving at my sister's house. She always makes a big deal about bringing a gift or dish, so this year I decided to bring a <span class="words"> ${nounSing} </span>. Last year, my brother brought ${nounPlur}, and my sister was NOT happy.

    As the day approached, my ${animal} and I carefully prepared my ${nounSing} dish, a secret weapon to dazzle the family taste buds. The anticipation grew as I ${verbPastTense} on my way to my sister's home, armed with my mysterious creation. Little did they know, a culinary masterpiece awaited them.
    
    To everyone's surprise, my dish turned out to be ${adjective1} ! The unique flavors and textures were a ${adjective2} addition to the traditional spread. This Thanksgiving, my unexpected contribution became a highlight, turning the table into a feast of culinary surprises.`,
    
    `In a ${adjective1} village, there lived a ${animal} named Tony. One day, ${nounPlur} from the neighboring farms gathered for a festival. The ${nounPlur}, excitedly chatting, suddenly noticed the ${animal} as it ${verbPastTense} onto the scene, surprising everyone.
    The playful ${animal} weaved through the crowd, its ${nounSing} gleaming with sparkling sheen. The once ordinary festival became a ${adjective2} memory, thanks to the feline's spontaneous and memorable appearance.`,
    
    `In a cozy kitchen, a ${animal} named Giovanni found a worn ${nounSing} filled with ancient Italian ${nounPlur}. Inspired, he ${verbPastTense}through the kitchen, creating a mouthwatering plate of pasta with a velvety marinara sauce. Fellow ${animal}'s gathered, enchanted by the aroma. Giovanni, pleased with the compliments, turned his ${animal} hole into a haven of Italian flavors. His kitchen became a bustling restaurant, known for its ${adjective1} and unique creations, proving that even ${adjective2} chefs can create magic in the world of flavors.`,

    `In a sunlit meadow, a ${animal} named Olivia stumbled upon a forgotten basket filled with vibrant ${nounPlur}. Energized, she ${verbPastTense} through the meadow, weaving a stunning ${nounSing} with a riot of colors. Other animals gathered, captivated by the beauty. Olivia, encouraged by their admiration, transformed her burrow into a ${adjective1} sanctuary. Her meadow evolved into a popular garden, celebrated for its enchanting and ${adjective2} blossoms, showcasing that even ${animal}'s can cultivate wonders in the realm of nature.`,

    `Deep in a lush forest, a ${animal} named Jasper discovered an old ${nounSing} brimming with ancient woodland secrets. Inspired, he scurried through the ${nounPlur}, implementing ancient wisdom to create a ${adjective1} potion that could heal and invigorate. Forest creatures ${verbPastTense}, mesmerized by the potion's power. Jasper, satisfied with the gratitude, turned his ${nounSing} hollow into a healing hub. His forest became a renowned sanctuary, revered for its ${adjective2} and rejuvenating elixirs, proving that even little ${animal}'s can wield wonders in the realm of magic.`,

    `On a rocky shore, a ${animal} named Isabella stumbled upon a weathered chest filled with shimmering ${nounPlur}. Intrigued, she ${verbPastTense} along the shore, crafting intricate jewelry with the ${nounPlur}. Coastal critters gathered, fascinated by the sparkling creations. Isabella, content with the admiration, transformed her rock crevice into a ${adjective1} statue. Her beachfront became a sought-after destination, celebrated for its exquisite and ${adjective2} accessories, demonstrating that even small ${animal}'s can fashion wonders in the world of adornments.`,

    `In a bustling city alley, a ${animal} named Pablo discovered a discarded box filled with vibrant ${nounPlur}. Inspired, he ${verbPastTense} across the alley, creating a masterpiece that captured the essence of ${adjective1} life. City ${animal}'s gathered, awestruck by the expressive artwork. Pablo, proud of the recognition, turned his nook into an avian art gallery. His alley became a renowned hotspot, known for its ${adjective2} and thought-provoking murals, proving that even little ${animal}'s can paint wonders in the realm of creativity.`,

    `At the edge of a tranquil pond, a ${animal} named Lily stumbled upon an ancient ${nounSing} adorned with mystical ${nounPlur}. Intrigued, she ${verbPastTense} around the pond, arranging the ${nounPlur} into a pattern that emitted a calming energy. Amphibian friends gathered, enchanted by the serene atmosphere. Lily, pleased with the tranquility, turned her ${adjective1} nook into a zen retreat. Her pond became a ${adjective2} oasis, celebrated for its harmonious and rejuvenating ambiance, illustrating that even ${animal}'s can bring wonders to the world of serenity.`

    ]
    let randomIndex = Math.floor(Math.random() * storyTemplates.length);
    let selectedStory = storyTemplates[randomIndex];

    let storyText = document.getElementById('custom-story')
    storyText.innerHTML = selectedStory;

// 
    let animalName = document.querySelector('#animal')

        animalName.addEventListener('mouseover', (e) => {
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
    likeButton.textContent = data.likes + " likes"

    let dislikeButton = document.createElement('button')
    dislikeButton.textContent = data.dislikes + " dislikes";

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




// `In a sunlit meadow, a ${animal} named Olivia stumbled upon a forgotten basket filled with vibrant ${nounPlur}. Energized, she ${verbPastTense} through the meadow, weaving a stunning ${nounSing} with a riot of colors. Other animals gathered, captivated by the beauty. Olivia, encouraged by their admiration, transformed her burrow into a ${adjective1} sanctuary. Her meadow evolved into a popular garden, celebrated for its enchanting and ${adjective2} blossoms, showcasing that even ${animal}'s can cultivate wonders in the realm of nature.`

// `Deep in a lush forest, a ${animal} named Jasper discovered an old ${nounSing} brimming with ancient woodland secrets. Inspired, he scurried through the ${nounPlur}, implementing ancient wisdom to create a ${adjective1} potion that could heal and invigorate. Forest creatures ${verbPastTense}, mesmerized by the potion's power. Jasper, satisfied with the gratitude, turned his tree hollow into a healing hub. His forest became a renowned sanctuary, revered for its ${adjective2} and rejuvenating elixirs, proving that even little ${animal}'s can wield wonders in the realm of magic.`

// `On a rocky shore, a ${animal} named Isabella stumbled upon a weathered chest filled with shimmering ${nounPlur}. Intrigued, she ${verbPastTense} along the shore, crafting intricate jewelry with the ${nounPlur}. Coastal critters gathered, fascinated by the sparkling creations. Isabella, content with the admiration, transformed her rock crevice into a ${adjective1} statue. Her beachfront became a sought-after destination, celebrated for its exquisite and ${adjective2} accessories, demonstrating that even small ${animal}'s can fashion wonders in the world of adornments.`

// `In a bustling city alley, a ${animal} named Pablo discovered a discarded box filled with vibrant ${nounPlur}. Inspired, he ${verbPastTense} across the alley, creating a masterpiece that captured the essence of ${adjective1} life. City ${animal}'s gathered, awestruck by the expressive artwork. Pablo, proud of the recognition, turned his nook into an avian art gallery. His alley became a renowned hotspot, known for its ${adjective2} and thought-provoking murals, proving that even little ${animal}'s can paint wonders in the realm of creativity.`

// `At the edge of a tranquil pond, a ${animal} named Lily stumbled upon an ancient ${nounSing} adorned with mystical ${nounPlur}. Intrigued, she ${verbPastTense} around the pond, arranging the ${nounPlur} into a pattern that emitted a calming energy. Amphibian friends gathered, enchanted by the serene atmosphere. Lily, pleased with the tranquility, turned her ${adjective1} nook into a zen retreat. Her pond became a ${adjective2} oasis, celebrated for its harmonious and rejuvenating ambiance, illustrating that even ${animal}'s can bring wonders to the world of serenity.`