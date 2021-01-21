const events = [
    {
        'era': 'past',
        'title': 'Accepted into UF',
        'description': 'This marks the beginning of my college career. After graduating highschool and making it into UF, I\'m planning to major in mathematics within the College of Liberal Arts and Science, minoring in Innovation.',
        'src': undefined, 
        'category': 'school',
    },
    {
        'era': 'past',
        'title': 'Changing Majors',
        'description': 'After a quick first semester of online gen-ed classes, I\'m becoming acclimated to the college lifestyle. I\'ve found a lot of free time to determine what is interesting and important to me, and I realize that mathematics only makes up for half of my interests. I look for something that allows me to apply math and logic with a twist of creative freedom. I land on Computer Science.',
        'src': undefined, 
        'category': 'school',
    },
    {
        'era': 'past',
        'title': 'Failing',
        'description': 'Having been a straight-A student my entire life, I expected to continue this trend into college. What I don\'t realize at this time is that a lot more goes into educational success than just effort, and everyone here at UF has put in just as much effort as me, if not more.',
        'src': undefined, 
        'category': 'school',
    },
];

//do an events.map() function to generate HTML for all the relevant information
const body = document.querySelector('body');
const beginning = document.querySelector('#beginning');
let side = false;
events.map(event => {
    side = !side;
    let card = document.createElement('div');
    card.className = `card ${side ? 'left' : 'right'}`;
});