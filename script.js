const events = [
    {
        'era': 'beginning',
        'title': 'Learning to Draw/Paint',
        'description': 'At a young age, I find a passion for drawing and creating. My dad happens to have a strong background in art, having majored in it during his college years, and I intend to follow in his footsteps. I learn how to look at the world through a different lens, and become a better self-learner. Ultimately I realize that I prefer art as a hobby, and I choose not to pursue a career with it.',
        'src': 'fas fa-paint-brush', 
        'category': 'life',
    },
    {
        'era': 'beginning',
        'title': 'Accepted into UF',
        'description': 'This marks the beginning of my college career. After graduating highschool and making it into UF, I plan to major in mathematics within the College of Liberal Arts and Science, minoring in Innovation.',
        'src': 'fas fa-graduation-cap', 
        'category': 'school',
    },
    {
        'era': 'beginning',
        'title': 'Changing Majors',
        'description': 'After a quick first semester of online gen-ed classes, I\'m becoming acclimated to the college lifestyle. I\'ve found a lot of free time to determine what is interesting and important to me, and I realize that mathematics only makes up for half of my interests. I look for something that allows me to apply math and logic with a twist of creative freedom. I land on Computer Science.',
        'src': 'fas fa-exchange-alt', 
        'category': 'school',
    },
    {
        'era': 'beginning',
        'title': 'Becoming A SoundCloud Rapper',
        'description': 'I begin to listen to rap music more than any other genre, and I decide that it can\'t be that hard to do. I start writing lyrics and formulating a concept for my rapper alter ego, 99ghosts. I keep writing and begin to explore dark, morbid lyrics and aggressive sounds. I discover a new taste in music, and decide to finally record a song. Lo and behold, I lack an ear for production so I recruit a friend who does, and we record a TERRIBLE cringe-worthy song and upload it to SoundCloud. I never record another song but I continue to write more with hopes to someday record something decent.',
        'src': 'fab fa-soundcloud', 
        'category': 'life',
    },
    {
        'era': 'beginning',
        'title': 'Failing',
        'description': 'Having been a straight-A student my entire life, I expect to continue this trend into college. What I don\'t realize at this time is that a lot more goes into educational success than just effort, and everyone here at UF has put in just as much effort as me, if not more. I fail hard and I fail early, and have to adapt to a new dynamic. I end up on academic probation and barely make it through my gen-eds with a high enough GPA to stay.',
        'src': 'fas fa-ghost', 
        'category': 'school',
    },
    {
        'era': 'beginning',
        'title': 'Catalyst 2017',
        'description': 'Working alongside a team of 3 other Innovation Academy students, I help to develop an ad campaign for the catalyst showcase. The campaign is targeted at American Dietary habits, and is aptly named \'Fat Food\'. We win the \'Power of Design\' award for our branding and creativity.',
        'src': 'fas fa-award', 
        'category': 'school',
    },
    {
        'era': 'beginning',
        'title': 'Enjoying my Major',
        'description': 'Validation! In completing all of my gen-eds I get to take classes more focused on programming, software development, and many other facets of computer science. I\'m now certain that I chose the right major after all, and I\'m ready to see where I can go with it.',
        'src': 'fas fa-laptop-code', 
        'category': 'school',
    },
    {
        'era': 'beginning',
        'title': 'Trying Out Clubs',
        'description': 'Now that my sights are set on a future with coding, I decide to try getting involved. I try to join a handful of clubs to build up my resume. After attending a few meetings for each club, however, I am left disappointed with the lack of organization in these groups and the lack of enthusiasm that I get from being a part of them. Ultimately, this results in me giving up on involvement. As a result, my network stays very small, my resume stays very empty, and my confidence falls very low.',
        'src': 'fas fa-users', 
        'category': 'career',
    },
    {
        'era': 'now',
        'title': 'Getting Back Into Reading',
        'description': 'After believing myself to be borderline illiterate for years of my life, and after reading was ruined for me by the public school system with required standardized literary studies, I finally decide to give it another shot. I pick up a Star Wars novel and instantly fall in love with reading all over again. I breeze through a few more Star Wars books, then branch out into other sci-fi and fantasy series. Reading becomes a new favorite pastime, and I encourage everyone around me to try reading again. My family starts reading instead of watching TV at night. My friends and I start reading the same books and talking for hours about them.',
        'src': 'fas fa-book', 
        'category': 'life',
    },
    {
        'era': 'now',
        'title': 'Locals Only Sound',
        'description': 'As I scramble to find projects to build out my resume before graduation, an opportunity falls into my lap. A friend happens to have contact with a music collective signed by UMG, and they need a clean and aesthetic new website! Having never before made a real website, I am hard at work with a couple of peers to learn new frameworks and best practices. A lot of the development process is a headache, due to heavy learning curves. Some teammates prove to be unreliable and the rest of us learn how to pick up the slack.',
        'src': 'fab fa-react', 
        'category': 'career',
    },
    {
        'era': 'now',
        'title': 'IEEE 2020',
        'description': 'A second opportunity falls right into my lap, as my roommate tells me of an opportunity with the student organization he\'s president of, IEEE. As the WebMaster, my role is to update the website periodically to display the appropriate information for new events and members for my term. However, having just recently taught myself the React framework, I decide to spice up the site using JavaScript. This proves to be a much larger undertaking than initially anticipated, as my React knowledge is still very new and the website needs a full rewrite. I learn how to commmunicate better and how to manage my time.',
        'src': 'fas fa-globe', 
        'category': 'career',
    },
    {
        'era': 'now',
        'title': 'Exercise',
        'description': 'After living for 22 years disappointed with how skinny I was, I decide enough is enough. I shave my head, and force myself to show that I can gain weight and exercise regularly before I let my hair grow back. I spend the next several months working out every weekday morning. There are low points along the way and I lose focus at times, but I begin to see gradual improvement and finally allow myself to get a proper haircut again.',
        'src': 'fas fa-dumbbell', 
        'category': 'life',
    },
    {
        'era': 'now',
        'title': 'IPPD',
        'description': 'I decide to opt out of the Computer Science senior project, replacing it with a 2-semester course that I\'d heard about through the grapevine called Integrated Product and Process Design (IPPD). I end up in a group of 3 other Computer Science students, and together we develop and update a software platform used by a real government contractor. I learn a lot about communication, teamwork, and discipline.',
        'src': 'fas fa-shield-alt', 
        'category': 'school',
    },
    {
        'era': 'future',
        'title': 'Graduation',
        'description': 'After 5 years (whoops), I finally find myself in possession of a B.S. in Computer Science from the University of Florida. I have the rest of my life ahead of me, and I hope to be starting my new career to apply all the priceless lessons I learned in school.',
        'src': 'fas fa-graduation-cap', 
        'category': 'school',
    },
    {
        'era': 'future',
        'title': 'Getting a Dev Job',
        'description': 'I end up becoming employed full-time! I have a job where I get to learn new things every day and meet new challenges with a team of driven, intelligent people. My days are exhausting and frustrating often times, but I realize that it\'s all part of the process and I love where I\'m heading. I start to become more conscious of my own finances and begin to save up for some large purchases.',
        'src': 'fas fa-code', 
        'category': 'career',
    },
    {
        'era': 'future',
        'title': 'Moving To A New State',
        'description': 'Florida will always be home, but the weather here is not for me. I seek out a cooler climate and higher altitudes, finally landing somewhere northwest of where I grew up. Being in a new place is intimidating, and I am worried about being completely isolated and alone. But it\'s all so exciting as well, and I can\'t wait to bring my family and friends out here to show them where I\'m staking a claim.',
        'src': 'fas fa-plane-departure', 
        'category': 'life',
    },
    {
        'era': 'future',
        'title': 'A New Friend?',
        'description': 'I decide it\'s time to add a member to the family, and I adopt a small French Bulldog puppy. I look forward to spending the next several years of my life with a new best friend by my side.',
        'src': 'fas fa-paw', 
        'category': 'life',
    },
    {
        'era': 'future',
        'title': 'Getting My MBA',
        'description': 'It\'s time to get back to the books! I\'ve been able to work for a few years doing what I majored in at university, but I\'m ready to pick up some new skills and open some new doors for advancement. I never intended to be a programmer forever, my ambitions are bigger than that. This is the next stepping stone to get me where I want to be.',
        'src': 'fas fa-user-tie', 
        'category': 'school',
    },
    {
        'era': 'future',
        'title': 'Starting My Own Business',
        'description': 'After moving up the corporate ladder a bit and learning some tricks of the trade, I decide to challenge myself once more. If this goes well, I could have an undying legacy and make some real changes to the world I live in. If it doesn\'t go well, I\'ll at least be able to learn from it and have a story to tell!',
        'src': 'fas fa-dollar-sign', 
        'category': 'career',
    },
    {
        'era': 'future',
        'title': 'Adios',
        'description': 'It\'s bound to happen sooner or later. I don\'t really have a say in this, but it is important to keep in mind that my time here isn\'t guaranteed and I shouldn\'t take it for granted. But if I can look back on my life and see that I got to do all of the above, I will go with a smile on my face.',
        'src': 'fas fa-skull-crossbones', 
        'category': 'life',
    },
];

//do an events.map() function to generate HTML for all the relevant information
const body = document.querySelector('body');
let container = undefined;
let cardIsLeft = false;
events.map(event => {
    cardIsLeft = !cardIsLeft;

    if(event['era'] === 'beginning') {
        container = document.querySelector('#beginning');
    }
    else if(event['era'] === 'now') {
        container = document.querySelector('#now');
    }
    else if(event['era'] === 'future') {
        container = document.querySelector('#future');
    }

    let card = document.createElement('div');
    card.className = `card ${cardIsLeft ? 'left' : 'right'}`;
    let title = document.createElement('h2');
    title.className = 'event-title';
    let image = document.createElement('div');
    image.className = 'event-image';
    let icon = document.createElement('i');
    icon.className = `icon ${event['src']}`;
    image.appendChild(icon);
    if(event['category'] === 'school') {
        image.style.border = '7px solid var(--teal)';
        icon.style.color = 'var(--teal)';
    }
    else if(event['category'] === 'life') {
        image.style.border = '7px solid var(--orange)';
        icon.style.color = 'var(--orange)';
    }
    else if(event['category'] === 'career') {
        image.style.border = '7px solid var(--lipstick)';
        icon.style.color = 'var(--lipstick)';
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

//add icon for filtering menu (filter by event category and/or beneficiality)
//only show title by default, expand card description when card is clicked
