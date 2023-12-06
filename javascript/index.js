// ============= start contact section ==================//

const username = document.getElementById("username");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
  submit.addEventListener("click", () => {
    if (
        username.value.length > 0 &&
        email.value.length > 0 &&
        subject.value.length > 0 &&
        message.value.length > 0
      ) {
    let usernameValue = username.value;
    let emailValue = email.value;
    let subjectValue = subject.value;
    let messageValue = message.value;
    console.log(`UserName : ${usernameValue}
Email : ${emailValue}
Subject : ${subjectValue}
Message : ${messageValue}`);

    alert("successfully submitted!");
    username.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
}
});


// ============= end contact section ==================//
