// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const settingButton = document.getElementById('setting');

// Constants for p tag to display query selectors
const chosenNoun1 = document.getElementById('choosenNoun1');
const chosenVerb = document.getElementById('choosenVerb');
const chosenAdjective = document.getElementById('choosenAdjective');
const chosenNoun2 = document.getElementById('choosenNoun2');
const chosenSetting = document.getElementById('choosenSetting');

// Constants for final buttons and p tags
const playbackButton = document.getElementById('playback');
const randomButton = document.getElementById('random');
const storyParagraph = document.getElementById('story');


// Variables for pre-defined arrays for all the words 
const nouns1 = ['cat', 'dog', 'bird', 'elephant', 'lion'];
const verbs = ['ran', 'jumped', 'sang', 'ate', 'sleep'];
const adjectives = ['happy', 'beautiful', 'funny', 'exciting', 'colorful'];
const nouns2 = ['moon', 'stars', 'beach', 'forest', 'castle'];
const settings = ['in the park', 'under the sea', 'on a mountain', 'in a spaceship', 'at the zoo'];


// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function updateChosenWordWithCount(element, array, count) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const chosenWord = array[randomIndex];
    element.textContent = chosenWord;

    // if-else to change count setting
    if (element === chosenNoun1) {
        noun1Count++;
    } else if (element === chosenVerb) {
        verbCount++;
    } else if (element === chosenAdjective) {
        adjectiveCount++;
    } else if (element === chosenNoun2) {
        noun2Count++;
    } else if (element === chosenSetting) {
        settingCount++;
    }
}

// variable to get array element and displaying it
function noun1_on_click() {
    updateChosenWordWithCount(chosenNoun1, nouns1, noun1Count);
}

function verb_on_click() {
    updateChosenWordWithCount(chosenVerb, verbs, verbCount);
}

function adjective_on_click() {
    updateChosenWordWithCount(chosenAdjective, adjectives, adjectiveCount);
}

function noun2_on_click() {
    updateChosenWordWithCount(chosenNoun2, nouns2, noun2Count);
}

function setting_on_click() {
    updateChosenWordWithCount(chosenSetting, settings, settingCount);
}

// a drop box will open so that the user can write the name or student no
function getStudentInfo() {
    const studentName = prompt("Please enter your student ID/name:");
    if (studentName) {
        document.getElementById('studentId').textContent = `Student ID/Name: ${studentName}`;
    } else {
        document.getElementById('studentId').textContent = "Student ID/Name: Not provided";
    }
}

// the func will display name when "Show Story" button is clicked
playbackButton.addEventListener('click', getStudentInfo);

// adding the reset button
function resetStory() {
    // Reset the chosen words
    chosenNoun1.textContent = '';
    chosenVerb.textContent = '';
    chosenAdjective.textContent = '';
    chosenNoun2.textContent = '';
    chosenSetting.textContent = '';

    // Reset the counts
    noun1Count = 0;
    verbCount = 0;
    adjectiveCount = 0;
    noun2Count = 0;
    settingCount = 0;

    // Clear the story
    storyParagraph.textContent = '';

    // Clear the student ID/name
    document.getElementById('studentId').textContent = '';
}


// concatenate the user story and display
function playback_on_click() {
    const story = `Once upon a time, there was a ${chosenAdjective.textContent} ${chosenNoun1.textContent} who ${chosenVerb.textContent} with a ${chosenAdjective.textContent} ${chosenNoun2.textContent} ${chosenSetting.textContent}.`;
    storyParagraph.textContent = story;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    updateChosenWordWithCount(chosenNoun1, nouns1, noun1Count);
    updateChosenWordWithCount(chosenVerb, verbs, verbCount);
    updateChosenWordWithCount(chosenAdjective, adjectives, adjectiveCount);
    updateChosenWordWithCount(chosenNoun2, nouns2, noun2Count);
    updateChosenWordWithCount(chosenSetting, settings, settingCount);
    playback_on_click();
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetStory);