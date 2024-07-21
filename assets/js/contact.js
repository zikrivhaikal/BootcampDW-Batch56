function submitForm() {
  let inputName = document.getElementById("input-name").value;
  let inputEmail = document.getElementById("input-email").value;
  let inputPhone = document.getElementById("input-phone").value;
  let inputSubject = document.getElementById("input-subject").value;
  let inputMessage = document.getElementById("input-message").value;

  document.getElementById("form-contact").reset();

  const myEmail = "zikrivhaikal@gmail.com";
  let a = document.createElement("a");
  a.href = `mailto:${myEmail}?subject=${inputSubject}&body=Name: ${inputName}, Email: ${inputEmail}, Phone: ${inputPhone}, Message: ${inputMessage}`;
  a.click();

  console.log(
    `Name: ${inputName}\n
    Email: ${inputEmail}\n
    Phone: ${inputPhone}\n
    Subject: ${inputSubject}\n
    Message: ${inputMessage}`
  );
}
