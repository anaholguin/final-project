
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // <script type="text/javascript">

}

function toggleChickenImg() {

  var img = document.getElementById('chicken-img').src;
     if (img) {
         document.getElementById('chicken-img').src  = 'http://worldonline.media.clients.ellingtoncms.com/img/photos/2005/11/19/na_color_CHINA_BIRD_FLU_t640.jpg?a6ea3ebd4438a44b86d2e9c39ecf7613005fe067';
     }
    //   else {
    //     document.getElementById('chicken-img').src = 'Pig2';
    // }
 }

 function toggleCowImg(){

          var img = document.getElementById('cow-img').src;
            if (img) {
                document.getElementById('cow-img').src = 'http://www.colourbox.com/preview/854542-cows-with-ear-marks-standing-in-cattle-cages.jpg';
            }
          }
 function togglePigImg() {

   var img = document.getElementById('pig-img').src;
      if (img) {
          document.getElementById('pig-img').src  = 'http://darkroom.baltimoresun.com/wp-content/uploads/2012/10/REU-EU-PIGS_.jpg';
      }
    }
