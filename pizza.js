function openProduct(evt, productName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(productName).style.display = "block";
  evt.currentTarget.className += " active";
}

// More

function openProduct1(evt, productName) {
  var i, tabcontent, tablinks__more;
  tabcontent = document.getElementsByClassName("tabMorecontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks__more = document.getElementsByClassName("tablinks__more");
  for (i = 0; i < tablinks__more.length; i++) {
    tablinks__more[i].className = tablinks__more[i].className.replace(" active", "");
  }
  document.getElementById(productName).style.display = "block";
  evt.currentTarget.className += " active";
}


//menu__moreProduct
/*
function moreProductMenu(menuStyle) {
  var menuStyle = getComputedStyle(menu);
  openMenu.onclock = function () {
      if(menuStyle.display == "none"){
          menu.classList.add("active");
          this.innerHTML = "Закрыть"
      }else {
          menu.classList.remove("active");
          this.innerHTML = "Открыть"
      }
  }
}
*/
function moreProductMenuPizza() {
  document.getElementById("menuPizza").classList.toggle('active');
}

function moreProductMenuSalat() {
  document.getElementById("menuSalat").classList.toggle('active');
}

function moreProductMenuDrink() {
  document.getElementById("menuDrink").classList.toggle('active');
}
