var submitBtn = document.querySelector(".sbmt_btn");
submitBtn.addEventListener("click", submit);

function submit(e) {
    e.preventDefault();
    var formData = retrieveData();
    setGetDataToLocalStorage(formData);
    console.log(formData, "form data !!")
}

let retrieveData = () => {
    var userName = document.querySelector(".user_name").value;
    var job = document.querySelector(".job").value;
    var experience = document.querySelector(".experience").value;
    var package = document.querySelector(".package").value;

    var arr = [];
    arr.push({
        name: userName,
        job: job,
        experience: experience,
        package: package,
    });
    return arr;

}

let setGetDataToLocalStorage = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
}