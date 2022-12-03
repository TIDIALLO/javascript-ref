//Init Github
github = new Github;
//Init UI
const ui = new UI;

//search input
const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;
    if (userText !== '') {
        //Make call
        github.getUsers(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //Show alert
                    ui.showAlert('User Not Found', 'alert alert-danger');
                } else {
                    //Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }

            })
    } else {
        //clear profile
        ui.clearProfile();
    }
})