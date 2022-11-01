import * as MODEL from "./model.js";

function route() {
  let hashTag = window.location.hash;

  let pageID = hashTag.replace("#", "");

  let pageIDArray = pageID.split("/");

  pageID = pageIDArray[0];
  
  //let subPageID = pageIDArray[1];
  
    MODEL.changePage(pageID, submit);
}

function submit() {
  $("#submit").on("click", function (e){
    console.log("submit");
    let fn = $("#fName").val();
    let ln = $("#lName").val();
    let em = $("#email").val();
    let pw = $("#pw").val();

    if ( pw == "") {
      Swal.fire({
        title: "Please enter your password",
        icon: "info",
        html:
          "If you forgot your password, you can recover it " +
          '<a href="https://www.disneyplus.com/" style="text-decoration: none; color: lavendar;">here</a>',
        showCancelButton: false,
        showConfirmButton: true,
      });
    } else if (em == "" ) {
      Swal.fire({
        title: "Please enter your email",
        icon: "info",
        showCancelButton: false,
        showConfirmButton: true,
      });
    } else if(fn == ""){
        Swal.fire({
          title: "Please enter your First name",
          icon: "info",
          showCancelButton: false,
          showConfirmButton: true,
        });
    } else if(ln == ""){
        Swal.fire({
          title: "Please enter your last name",
          icon: "info",
          showCancelButton: false,
          showConfirmButton: true,
        });
    } else if (fn != "" && ln != "" && em != "" && pw != "") {   
        $(".header").html("Sign Out");
        $("#email").hide();
        $("#pw").hide();
        $("#submit").html("Sign out");   
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Welcome to the community!",
          showConfirmButton: false,
          timer: 1500,
        });
    } else {
        Swal.fire({
          title: "Uh oh!",
          text: "Please enter your credentials to sign in",
          icon: "warning",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Okay",
        });
    }

    MODEL.setUserInfo(userObj);
    $("#fName").val("");
    $("#lName").val("");
    $("#email").val("");
    $("#pw").val("");

    console.log(`${fn}${ln}${em}${pw}`);
  });
}
  
  // $("#submit").click(() => {
  //   console.log("clicked");

  //   let email = $("#email").val();
  //   let password = $("#password").val();

    
function initApp() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  //MODEL.changePage("signin");
  initApp();
  //initListeners();
});
