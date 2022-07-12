let progress_fill = document.querySelectorAll('.progress-fill');

let fill_size = progress_fill.forEach((fill)=>{
    let percent = fill.getAttribute('percent');
    fill.style.width = percent + '%';
});


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function errorBorder(data_arrays =[]){
    data_arrays.forEach(arr=>{
        arr.style.border = '1px solid red';
        setTimeout(() => {
            arr.style.border = '1px solid black';
        }, 3000);
    })
}

// Sections
const section_1 = document.querySelector('.section-1');
const section_2 = document.querySelector('.section-2');
const section_3 = document.querySelector('.section-3');
const section_4 = document.querySelector('.section-4');
const section_5 = document.querySelector('.section-5');

const section_2_container = document.querySelector('.section-2-cont');
const section_3_container = document.querySelector('.section-3-cont');

// Btns
const add_more = document.querySelector('.add-more');
const add_more_experience = document.querySelector('.add-more-experince');
const section_1_next_btn = document.querySelector('.section-1-next-btn');
const section_2_next_btn = document.querySelector('.section-2-next-btn');
const section_3_next_btn = document.querySelector('.section-3-next-btn');
const section_4_next_btn = document.querySelector('.section-4-next-btn');
const submit_btn = document.querySelector('.section-5-submit-btn');

const section_2_prev_btn = document.querySelector('.section-2-previous');
const section_3_prev_btn = document.querySelector('.section-3-previous');
const section_4_prev_btn = document.querySelector('.section-4-previous');
const section_5_prev_btn = document.querySelector('.section-5-previous');

const prev = document.querySelectorAll('.prev-btn');

// Profile
section_1_next_btn.addEventListener('click', (e)=>{
    e.preventDefault();
   
    let fname = document.querySelector('.fname');
    let lname = document.querySelector('.lname');
    let phone = document.querySelector('.phone');
    let email = document.querySelector('.uemail');
    let location = document.querySelector('.location');
    let occupation = document.querySelector('.occupation');
    let about_text = document.querySelector('.about');

    if(fname.value === '' || lname.value === '' || phone.value === '' || email.value === '' || location.value === '' || occupation.value === '' || about_text.value ===''){
        alertMsg('error', 'All fields are required.');
        errorBorder([fname, lname, phone, email, location, occupation, about_text]);

    }else{


        if (!validateEmail(email.value)){
            alertMsg('error', 'Please Enter valid email address.');
            email.style.border = '1px solid red';
            setTimeout(() => {
                email.style.border = '1px solid black';
            }, 3000);
        }else{
            // hide section and button
            section_1.classList.remove('active');
            //show next section and button
            section_2.classList.add('active');

            const profile = {
                'firstname': fname.value,
                'lastname': lname.value,
                'phone': phone.value,
                'email': email.value,
                'location': location.value,
                'occupation': occupation.value,
                'about_text': about_text.value
            }
            localStorage.setItem('profile', JSON.stringify(profile));
        }
    }

   
})



// Education
section_2_next_btn.addEventListener('click', (e)=>{
    e.preventDefault();
    // console.log(course.value)
    const courses = document.querySelectorAll(".course");
    const college_name = document.querySelectorAll(".collage_name");
    const start_date = document.querySelectorAll(".start_date");
    const end_date = document.querySelectorAll(".end_date");

    console.log(loadData(start_date).includes(''))

    if(loadData(courses).includes('') && loadData(college_name).includes('')  || loadData(start_date).includes('') || loadData(end_date).includes('')  ){
        alertMsg('error', 'All fields are required.')
        getBorderError([courses, college_name, start_date, end_date])
    }else{
        // filterDate(start_date, end_date)
        let start_date_arr = filterDate(start_date, end_date)['startdate'][0];
        let end_date_arr = filterDate(start_date, end_date)['enddate'][0];
        let course_arr = loadData(courses);
        let college_arr = loadData(college_name)
        let education = {
            'courses': course_arr,
            'colleges': college_arr,
            'stardates': start_date_arr,
            'enddates': end_date_arr
        }

        // hide section 
        section_2.classList.remove('active');
    
        //show next section
        section_3.classList.add('active');

        localStorage.setItem('education', JSON.stringify(education));
    }
})

// Experience
section_3_next_btn.addEventListener('click', (e)=>{
    

    let exper_start_date = document.querySelectorAll('.exper-start-date');
    let exper_end_date = document.querySelectorAll('.exper-end-date');
    let company = document.querySelectorAll('.company');
    let occupation = document.querySelectorAll('.body-occupation');

    let experince = document.querySelectorAll('.company-textarea');

    if(loadData(company).includes('') || loadData(experince).includes('')  || loadData(occupation).includes('')  ||  loadData(exper_start_date).includes('') || loadData(exper_end_date).includes('')){
        alertMsg('error', 'All fields are required.')
        getBorderError([company, occupation, experince, exper_start_date, exper_end_date])
    }else{
        // filterDate(start_date, end_date)
        let start_date_arr = filterDate(exper_start_date, exper_end_date)['startdate'][0];
        let end_date_arr = filterDate(exper_start_date, exper_end_date)['enddate'][0];
        let company_arr = loadData(company);
        let experince_arr = loadData(experince);
        let occupation_arr = loadData(occupation);
        let experince_obj = {
            'Companies': company_arr,
            'occupations': occupation_arr,
            'experinces': experince_arr,
            'stardates': start_date_arr,
            'enddates': end_date_arr
        }

        // hide section 
        section_3.classList.remove('active');
        //show next section
        section_4.classList.add('active');
        localStorage.setItem('experiences', JSON.stringify(experince_obj));

    }
})


// Skills
section_4_next_btn.addEventListener('click', (e)=>{

    let skill_textarea = document.querySelector('.skill-textarea');


    if(skill_textarea.value === ''){
        alertMsg('error', 'Text-area field is required.');
    }else{
        
        let skills = {
            'skills': skill_textarea.value.split(',')
        }

        localStorage.setItem('skills', JSON.stringify(skills));
        // hide section 
        section_4.classList.remove('active');
        
        //show next section
        section_5.classList.add('active');
    }
})

// Interest
submit_btn.addEventListener('click', (e)=>{


    let interest_textarea = document.querySelector('.interest-textarea');


    if(interest_textarea.value === ''){
        alertMsg('error', 'Interest field is required.');
    }else{
        
        let interests = {
            'interests': interest_textarea.value.split(',')
        }

        localStorage.setItem('interests', JSON.stringify(interests));
         // hide section 
        section_5.classList.remove('active');
            
        //show next section
        window.location.href = 'cv.html';
    }
})


prev.forEach(pr=>{
    // console.log(pr.parentElement)
    const active = document.querySelector('.active');
    // console.log(active)

    pr.addEventListener('click', (e)=>{
        e.preventDefault();

        // console.log(pr.parentElement.classList.contains('section-2'))

        if(pr.parentElement.classList.contains('section-2')){
            pr.parentElement.classList.remove('active');
            section_1.classList.add('active');
        }

        if(pr.parentElement.classList.contains('section-3')){
            pr.parentElement.classList.remove('active');
            section_2.classList.add('active');
        }

        if(pr.parentElement.classList.contains('section-4')){
            pr.parentElement.classList.remove('active');
            section_3.classList.add('active');
        }

        if(pr.parentElement.classList.contains('section-5')){
            pr.parentElement.classList.remove('active');
            section_4.classList.add('active');
        }
        
        // console.log(pr.parentElement)

    })

})

// Load data and return it in a array
function loadData(user_input_list){
    let data = []
    user_input_list.forEach( user_input =>{   
        data.push(user_input.value)    
    })
    return data;
}

// Get border errors for all
function getBorderError(lists =[]){
    for(let i in lists){
        lists[i].forEach(list=>{
            list.style.border = '1px solid red';

            setTimeout(() => {
                list.style.border = '1px solid black';
            }, 3000);
        })
    }
}

// filter date and check if  startdate is greater than enddate or return an error message.
function filterDate(list_1, list_2){
   let arr_start_date = loadData(list_1)
   let arr_end_date = loadData(list_2)

   for(let i in arr_start_date){
       if(Date.parse(arr_end_date[i]) <= Date.parse(arr_start_date[i])){
            let msg = `Error end-date can not be greather than start-date`;
            errorBorder(list_2)
            alertMsg('error',msg)
            break;
       }
       return {
           'startdate':[arr_start_date],
           'enddate': [arr_end_date]
        };
   }

}

// function getError(all_lists){
//     all_lists.forEach(list=>{
//         list.style.border = '1px solid red';
//     })
// }

function alertMsg(msg_type, msg){
    const form = document.querySelector('.form');
    const h1 = document.querySelector('.form > .active');

    console.log(h1)

    let newField = document.createElement('div');
    newField.innerHTML = `
        <p class='${msg_type}'> ${msg}</p>
    `
    form.insertBefore(newField, h1);

    setTimeout(() => {
        newField.style.display = 'none';
    }, 3000);
}







add_more.addEventListener('click', (e)=>{
    e.preventDefault();
    
    let newField = document.createElement('div');
    newField.setAttribute('class','grid-2 mt-2 mb-2');

    newField.innerHTML= `
    <div class="form-group">
        <label for="fname">Course:</label>
        <input type="text" id="id_course" name="fname" class="input-form course">
    </div>

    <div class="form-group">
        <label for="lname">Institution:</label>
        <input type="text" id="id_collage_name" name="lname" class="input-form collage_name">
    </div>

    <div class="form-group">
        <label for="start-date">Start Date:</label>
        <input type="date" id="id_start_date" name="start-date" class="input-form start_date">
    </div>

    <div class="form-group">
        <label for="end-date">End Date:</label>
        <input type="date" id="id_end_date" name="end-date" class="input-form end_date">
    </div>`
    section_2_container.append(newField);
})

add_more_experience.addEventListener('click', (e)=>{
    e.preventDefault();

    let newField = document.createElement('div');
    newField.setAttribute('class','grid-2 mt-2 mb-2');

    let textareaField = document.createElement('textarea');
    textareaField.setAttribute('class', 'company-textarea');

    let label = document.createElement('label');
    label.textContent = 'Description';

    newField.innerHTML= `
    <div class="form-group">
        <label for="exper-start-date">Start Date:</label>
        <input type="date" id="id_start_date" name="exper-start-date" class="input-form exper-start-date" required>
    </div>

    <div class="form-group">
        <label for="exper-end-date">End Date:</label>
        <input type="date" id="id_end_date" name="exper-end-date" class="input-form exper-end-date" required>
    </div>
    <div class="form-group">
        <label for="company">Company:</label>
        <input type="text" id="id_company" name="company" class="input-form company" required>
    </div>
    <div class="form-group">
        <label for="body-occupation">Occupation:</label>
        <input type="text"  name="body-occupation" class="input-form body-occupation" required>
    </div>
    `

    // section_3_container.append();
    section_3_container.append(newField, label, textareaField);

})