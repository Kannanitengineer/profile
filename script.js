$(document).ready(function() {
$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
  //sticky header
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1) {
        $(".header-area").addClass("sticky");
      } else {
        $(".header-area").removeClass("sticky");
      }

      // Update the active section in the header
      updateActiveSection();
    });

    $(".header ul li a").click(function(e) {
      e.preventDefault();

      var target = $(this).attr("href");

      if ($(target).hasClass("active-section")) {
        return;
      }

      if (target === "#home") {
        $("html, body").animate(
          {
            scrollTop: 0
          },
          500
        );
      } else {
        var offset = $(target).offset().top - 40;

        $("html, body").animate(
          {
            scrollTop: offset
          },
          500
        );
      }

      $(".header ul li a").removeClass("active");
      $(this).addClass("active");
    });


    //Initial content revealing js
    ScrollReveal({
      distance: "100px",
      duration: 2000,
      delay: 200
    });

    ScrollReveal().reveal(".header a, .profile-photo, .about-content, .education", {
      origin: "left"
    });
    ScrollReveal().reveal(".header ul, .profile-text, .about-skills, .internship", {
      origin: "right"
    });
    ScrollReveal().reveal(".project-title, .contact-title", {
      origin: "top"
    });
    ScrollReveal().reveal(".projects, .contact", {
      origin: "bottom"
    });

  //contact form to excel sheet
//   const scriptURL = 'https://script.google.com/macros/s/AKfycbzUSaaX3XmlE5m9YLOHOBrRuCh2Ohv49N9bs4bew7xPd1qlgpvXtnudDs5Xhp3jF-Fx/exec';
//   const form = document.forms['submitToGoogleSheet']
//   const msg = document.getElementById("msg")

//   form.addEventListener('submit', e => {
//       e.preventDefault()
//       fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//           .then(response => {
//               msg.innerHTML = "Message sent successfully"
//               setTimeout(function () {
//                   msg.innerHTML = ""
//               }, 5000)
//               form.reset()
//           })
//           .catch(error => console.error('Error!', error.message))
//   })

  });

  function updateActiveSection() {
    var scrollPosition = $(window).scrollTop();

    // Checking if scroll position is at the top of the page
    if (scrollPosition === 0) {
      $(".header ul li a").removeClass("active");
      $(".header ul li a[href='#home']").addClass("active");
      return;
    }

    // Iterate through each section and update the active class in the header
    $("section").each(function() {
      var target = $(this).attr("id");
      var offset = $(this).offset().top;
      var height = $(this).outerHeight();

      if (
        scrollPosition >= offset - 40 &&
        scrollPosition < offset + height - 40
      ) {
        $(".header ul li a").removeClass("active");
        $(".header ul li a[href='#" + target + "']").addClass("active");
      }
    });
  }

//   function send(){
//     let name = document.getElementById("Name").value;
//     let email = document.getElementById("Email").value;
//     let contact = document.getElementById("Contact").value;
//     let subject = document.getElementById("Subject").value;
//     let message = document.getElementById("message").value;
//     Email.send({
//         SecureToken : "d87344feb0c5b8c1d8fdb0f886ae895e5cf2",
//         To : "2k21it24@kiot.ac.in",
//         From :"2k21it24@kiot.ac.in",
//         Subject : "Contact - Portfolio",
//         Body : "name:" + name + "<br> Email:" + email + "<br/>Contact:" + contact + "<br/>Subject:" + subject + "<br/>message:" + message
//     }).then(
//         message => alert(message)
//         );
// }

function send(){
    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let contact = document.getElementById("Contact").value;
    let subject = document.getElementById("Subject").value;
    let message = document.getElementById("message").value;
    Email.send({
        SecureToken : "324e1199-6bc2-43f6-9e8a-07a693034c26",
        To : "2k21it24@kiot.ac.in",
        From :"2k21it24@kiot.ac.in",
        Subject : "Contact - Portfolio",
        Body : "name:" + name + "<br> Email:" + email + "<br/>Contact:" + contact + "<br/>Subject:" + subject + "<br/>message:" + message
    }).then(
        message => alert(message)
        );
}
