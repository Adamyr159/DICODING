window.addEventListener('scroll', () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 150;
    y = y < 1 ? 1 : y;

    let navbar = document.getElementById('navbar');

    if ( y > 5 ) {
      navbar.style.background = 'rgb(204,209,228)';
    } else {
      navbar.style.background = 'none';
    }
  });


function pesanAlert () {
  let pesan = "pendaftaran belum dibuka";
  alert(pesan)
}

let telephone = document.getElementById('no-telephone');
function nomorTelephone () {
  telephone = 6287884924021;
  alert(telephone);
}



