function submitForm() {
  let inputName = document.getElementById("input-name").value;
  let inputEmail = document.getElementById("input-email").value;
  let inputPhone = document.getElementById("input-phone").value;
  let inputSubject = document.getElementById("input-subject").value;
  let inputMessage = document.getElementById("input-message").value;
  document.getElementById("form-contact").reset();

  console.log(
    `Name: ${inputName}\n
    Email: ${inputEmail}\n
    Phone: ${inputPhone}\n
    Subject: ${inputSubject}\n
    Message: ${inputMessage}`
  );
}
