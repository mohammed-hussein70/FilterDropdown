// Variables
let dropDown = document.querySelector(".dropDown");
let dropBtn = document.querySelector(".dropBtn");
let dropContent = document.querySelector(".dropdown-content");
dropBtn.onclick = function () {
  if (dropContent.style.display === "block") {
    dropContent.style.display = "none";
  } else {
    dropContent.style.display = "block";
  }
};

// Filter
let filter = document.querySelector(".search");
filter.onkeyup = function () {
  let filterValue = filter.value.toUpperCase();
  let a = dropContent.getElementsByTagName("a");
  for (let i = 0; i < a.length; i++) {
    let txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filterValue) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
};
