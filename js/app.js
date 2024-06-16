function messageValidation() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var subject = document.getElementById("subject");
  var message = document.getElementById("message");
  const success = document.getElementById("success");
  const danger = document.getElementById("danger");

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_8iu6uvm";
  const templateID = "template_gjr8035";

  if (
    name.value === "" ||
    email.value === "" ||
    subject.value === "" ||
    message.value === ""
  ) {
    danger.style.display = "block";
  } else {
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        success.style.display = "block";
      })
      .catch();

    setTimeout(() => {
      Name.value = "";
      email.value = "";
      msg.value = "";
    }, 2000);
  }

  setTimeout(() => {
    danger.style.display = "none";
    success.style.display = "none";
  }, 4000);
}
