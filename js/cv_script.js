
// sidebar

// Get data from localStorage
let get_profile = JSON.parse(localStorage.getItem('profile'));
let get_skills = JSON.parse(localStorage.getItem('skills'));
let get_interests = JSON.parse(localStorage.getItem('interests'));
let get_education = JSON.parse(localStorage.getItem('education'));
let get_experience = JSON.parse(localStorage.getItem('experiences'));


const firstname = document.querySelector('#profile-name');
const head_occupation = document.querySelector('#head-occupation');
const phone_no = document.querySelector('#phone_no');
const user_email = document.querySelector('#user_email');
const user_address = document.querySelector('#user_address');
const bio = document.querySelector('#bio');
const skills = document.querySelector('.skills');
const education = document.querySelector('.education-container');
const experience = document.querySelector('.experience');
const hobbies = document.querySelector('.hobbies-container');

// display values on view
firstname.textContent = `${get_profile['firstname']} ${get_profile['lastname']}`;
head_occupation.textContent = get_profile['occupation'];
phone_no.textContent = get_profile['phone'];
user_email.textContent = get_profile['email'];
user_address.textContent = get_profile['location'];
bio.textContent = get_profile['about_text']


// get user skills
get_skills['skills'].forEach(element => {
    let inner = document.createElement('div');
    inner.setAttribute('class', 'inner-skill');
    inner.innerHTML += `<p>${element}</p>`
    skills.append(inner);
});

// get user education details

for(let i in get_education['colleges']){
    let institution = document.createElement('div');
    institution.setAttribute('class', 'institution mb-1');
    institution.innerHTML += `
                            <p class="sidebar-year">${get_education['enddates'][i]} -- ${get_education['stardates'][i]}</p>
                            <p class="certificate light-bold">${get_education['courses'][i]}</p>
                            <p class="institute">${get_education['colleges'][i]}</p>
                            `
    education.append(institution)
}

for(let i in get_experience['occupations']){
    let innerElement = document.createElement('div');
    innerElement.setAttribute('class', 'flex mb-4');

    innerElement.innerHTML += `
        <div class="years">
            <p class="mb-1">${get_experience['enddates'][i]} -- ${get_experience['stardates'][i]}</p>
            <p class="company">${get_experience['Companies'][i]}</p>
        </div>
        <div class="workplace">
            <h6 class="mb-1 occupation">${get_experience['occupations'][i]}</h6>
            <p class="experience">${get_experience['experinces'][i]}</p>
        </div>
    `
    experience.append(innerElement);
}


for(let i in get_skills['skills']){
    let paragraph = document.createElement('p');
    paragraph.innerText = get_skills['skills'][i]
    hobbies.append(paragraph)
}

for(let i in get_interests['interests']){
    let paragraph = document.createElement('p');
    paragraph.innerText = get_skills['interests'][i]
    //hobbies.append(paragraph)
    console.log(paragraph);
}


// console.log(get_experience);