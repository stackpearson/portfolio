const phoneIcon = document.getElementById('phoneIcon');
    phoneIcon.addEventListener('mouseenter', showPhone)
    phoneIcon.addEventListener('mouseleave', hidePhone)

function showPhone() {
    document.getElementById('phoneNumber').style.display="inline-block"
}
function hidePhone() {
    document.getElementById('phoneNumber').style.display="none" 
}


const emailIcon = document.getElementById('emailIcon');
    emailIcon.addEventListener('mouseenter', showEmail)
    emailIcon.addEventListener('mouseleave', hideEmail)

function showEmail() {
    document.getElementById('emailAddy').style.display="inline-block"
}
function hideEmail() {
    document.getElementById('emailAddy').style.display="none" 
}

function jumpToProjects() {
   let projectLanding = document.getElementById('banner')
    projectLanding.scrollIntoView();
}

function jumpHomeToProjects() {
    window.location = "index.html#jump_to_projects";
}


function jumpToHome() {
    let projectLanding = document.getElementById('page-wrapper')
     projectLanding.scrollIntoView();
 }

