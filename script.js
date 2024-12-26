var typed = new Typed("#element", {
    strings: [
      "<i>Editor</i>",
      "<i>Digital Marketing Enthusiast</i>",
      "<i>Designer</i>",
    ],
    typeSpeed: 50,
  });
  function sendmail(){
  let params = {
    name : document.getElementById("#name").value,
    contact : document.getElementById("#contact").value,
    email : document.getElementById("#email").value,
    message : document.getElementById("#message").value,
  }
  emailjs.send("service_zlsecth","template_ouvv5nb",params).then.alert("Email sent to Vanshika!")
  }