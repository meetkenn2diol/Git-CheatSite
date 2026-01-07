//------------------ MAKING A NAV ITEM ACTIVE ------------------------
const navItems = document.querySelectorAll("body>nav li");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(i => i.classList.remove("active"));
    
    item.classList.add("active");
  });
});


//------------------- VIEWING SOME OR ALL THE CONTENTS ---------------
const body = document.body;

function switchView(view) {
  // Remove all possible view classes
  body.classList.remove(
    "arrangeViewAll",
    "arrangeViewWorkFlow",
    "arrangeViewMainContent",
    "arrangeViewExtras"
  );

  // Add needed one
  body.classList.add(view);
}

// bind buttons
document
  .getElementById("btn-viewAll")
  .addEventListener("click", () => switchView("arrangeViewAll"));
document
  .getElementById("btn-viewWorkFlow")
  .addEventListener("click", () => switchView("arrangeViewWorkFlow"));
document
  .getElementById("btn-viewMainContent")
  .addEventListener("click", () => switchView("arrangeViewMainContent"));
document
  .getElementById("btn-viewExtras")
  .addEventListener("click", () => switchView("arrangeViewExtras"));

//----------------- IMPLEMENTING media = "..." FOR STYLE SWITCHING -----------------
// ------ TO USE THIS: REMOVE THE CLASS NAMES ABOVE FROM <BODY> --------------------
// const sheets = {
//   viewAll: document.getElementById("cssViewAll"),
//   extras: document.getElementById("cssViewExtras"),
//   main: document.getElementById("cssViewMainContent"),
//   workflow: document.getElementById("cssViewWorkFlow"),
// };

// // function unapplyAllMediaExcept(activeSheet) {
// //   Object.values(sheets).forEach((sheet) => {
// //     sheet.media = sheet === activeSheet ? "all" : "none";
// //   });
// // }

// // function onViewAll() {
// //   unapplyAllMediaExcept(sheets.viewAll);
// // }
// // function onViewExtras() {
// //   unapplyAllMediaExcept(sheets.extras);
// // }
// // function onViewMainContent() {
// //   unapplyAllMediaExcept(sheets.main);
// // }
// // function onViewWorkFlow() {
// //   unapplyAllMediaExcept(sheets.workflow);
// // }

// // bind buttons to the functions
// document.getElementById("btn-viewAll").addEventListener("click", onViewAll);
// document
//   .getElementById("btn-viewExtras")
//   .addEventListener("click", onViewExtras);
// document
//   .getElementById("btn-viewMainContent")
//   .addEventListener("click", onViewMainContent);
// document
//   .getElementById("btn-viewWorkFlow")
//   .addEventListener("click", onViewWorkFlow);
