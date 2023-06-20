let d = new Date();

let newUpdate = document.getElementById('footer-sect');
newUpdate.querySelector('#currentYear').innerHTML = d.getFullYear();
newUpdate.querySelector('#currentDateAndTime').innerHTML = document.lastModified;