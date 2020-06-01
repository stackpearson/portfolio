const phoneIcon = document.getElementById('phoneIcon');
const phoneIcon2 = document.getElementById('phoneIcon2');
    phoneIcon.addEventListener('mouseenter', showPhone)
    phoneIcon.addEventListener('mouseleave', hidePhone)
    phoneIcon2.addEventListener('mouseenter', showPhone)
    phoneIcon2.addEventListener('mouseleave', hidePhone)

function showPhone() {
    document.getElementById('phoneNumber').style.display="inline-block"
    document.getElementById('phoneNumber2').style.display="inline-block"
}
function hidePhone() {
    document.getElementById('phoneNumber').style.display="none" 
    document.getElementById('phoneNumber2').style.display="none" 
}



const emailIcon = document.getElementById('emailIcon');
const emailIcon2 = document.getElementById('emailIcon2');
    emailIcon.addEventListener('mouseenter', showEmail)
    emailIcon.addEventListener('mouseleave', hideEmail)
    emailIcon2.addEventListener('mouseenter', showEmail)
    emailIcon2.addEventListener('mouseleave', hideEmail)

function showEmail() {
    document.getElementById('emailAddy').style.display="inline-block"
    document.getElementById('emailAddy2').style.display="inline-block"
}
function hideEmail() {
    document.getElementById('emailAddy').style.display="none" 
    document.getElementById('emailAddy2').style.display="none" 
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

