const events = [
    {
        'era': 'beginning',
        'title': 'Accepted into UF',
        'description': 'This marks the beginning of my college career. After graduating highschool and making it into UF, I\'m planning to major in mathematics within the College of Liberal Arts and Science, minoring in Innovation.',
        'src': undefined, 
        'category': 'school',
    },
    {
        'era': 'beginning',
        'title': 'Changing Majors',
        'description': 'After a quick first semester of online gen-ed classes, I\'m becoming acclimated to the college lifestyle. I\'ve found a lot of free time to determine what is interesting and important to me, and I realize that mathematics only makes up for half of my interests. I look for something that allows me to apply math and logic with a twist of creative freedom. I land on Computer Science.',
        'src': undefined, 
        'category': 'school',
    },
    {
        'era': 'beginning',
        'title': 'Failing',
        'description': 'Having been a straight-A student my entire life, I expected to continue this trend into college. What I don\'t realize at this time is that a lot more goes into educational success than just effort, and everyone here at UF has put in just as much effort as me, if not more.',
        'src': undefined, 
        'category': 'school',
    },
    {
        'era': 'beginning',
        'title': 'Failing',
        'description': 'Having been a straight-A student my entire life, I expected to continue this trend into college. What I don\'t realize at this time is that a lot more goes into educational success than just effort, and everyone here at UF has put in just as much effort as me, if not more.',
        'src': undefined, 
        'category': 'school',
    },
];

//do an events.map() function to generate HTML for all the relevant information
const body = document.querySelector('body');
let cardIsLeft = false;
let container = undefined;
events.map(event => {
    if(event['era'] === 'beginning') {
        container = document.querySelector('#beginning');
    }
    else if(event['era'] === 'now') {
        container = document.querySelector('#now');
    }
    else if(event['era'] === 'future') {
        container = document.querySelector('#future');
    }
    cardIsLeft = !cardIsLeft;
    let card = document.createElement('div');
    card.className = `card ${cardIsLeft ? 'left' : 'right'}`;
    let title = document.createElement('h1');
    title.className = 'event-title';
    let image = document.createElement('div');
    image.className = 'event-image';
    if(event['category'] === 'school') {
        image.style.border = '5px solid var(--teal)';
    }
    else if(event['category'] === 'life') {
        image.style.border = '5px solid var(--orange)';
    }
    else if(event['category'] === 'career') {
        image.style.border = '5px solid var(--lipstick)';
    }
    let description = document.createElement('p');
    description.className = 'event-description';
    title.textContent = event['title'];
    description.textContent = event['description'];
    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(description);
    container.appendChild(card);
});