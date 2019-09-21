function openNav() {
    var e = document.getElementById("mySidenav");
    var a = document.getElementById("open-menu");
    if (e.style.width == '250px' && a.style.marginLeft == '250px') {
        e.style.width = '0';
        a.style.marginLeft = "0";
    } else {
        e.style.width = '250px';
        a.style.marginLeft = "250px";
    }
}
