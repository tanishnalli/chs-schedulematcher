window.onload = function(){
    let loginForm = document.getElementsByClassName("loginForm");
    loginForm[0].addEventListener("submit", (e) => {
        e.preventDefault();

        let name = document.getElementById("name");
        let grade = document.getElementById("grade");

        console.log(name.value);
        console.log(grade.value);
        if(name.value === "" || grade.value === "") {
            throw Error
        } else {
            // Do stuff
        }
    });
}

function parseName(name) {
    for (let i = 0; i < name.length; i++) {
        if(isNaN(name[i]) === false) {
            return "Invalid Name"
        }
    }
}
