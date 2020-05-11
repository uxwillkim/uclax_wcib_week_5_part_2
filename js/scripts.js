const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const customVacation = document.getElementById('.vacation');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day. Next time, :insertx: ought to make plans to avoid this nonesense and go hit up the vacation.';
let insertX = ['Willy the Goblin' , 'Big Daddy' , 'Father Christmas'];
let insertY = ['the soup kitchen' , 'Disneyland' , 'the White House'];
let insertZ = ['spontaneously combusted' , 'melted into a puddle on the sidewalk' , 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name)
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300*0.0714286)+' stone';
    let temperature = Math.round(94-32)+' centigrade';
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
}

if(document.getElementById("ig").checked) {
  let igweight = Math.round(300*1000)+' ploobar';
  let igtemperature = Math.round(94+575)+' drapple';
  newStory = newStory.replace('300 pounds', igweight);
  newStory = newStory.replace('94 fahrenheit', igtemperature);
}

if(customVacation.value !== '') {
    let vacation = customVacation.value;
    newStory = newStory.replace('vacation', vacation);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
