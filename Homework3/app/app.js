import * as MODEL from "./model.js";

function route(){
  let hashTag = window.location.hash;
  let pageId = hashTag.replace("#","");
  console.log("hash " + pageId);
  

  if(pageId == ""){
    MODEL.changePage("home");
  }else{
    MODEL.changePage(pageId);
  }
}
function initListeners() {
  // $("nav a").click((e) => {
  //   // e.preventDefault();
  //   // let btnID = e.currentTarget.id;

  //   // MODEL.setCurrentPageContent(btnID);
  // });
}

function initApp(){
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initApp();
  initListeners();
});
