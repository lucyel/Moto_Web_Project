<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="format-detection" content="telephone=no">
  <meta name="keywords" content="">
  <meta name="description" content="service provides for moto">
  <meta name="author" content="NNT, HVN, BVH">
  <link rel="shortcut icon" href="https://www.sadoradesigns.be/uploads/details/R132.png">

  <meta charset="utf-8">
  <title>Home Page</title>

  <script src="js/bootstrap.js"></script>
  <script src="http://code.jquery.com/jquery-1.9.1.js"></script>

  <link rel="stylesheet" href="css/jquery.css" type="text/css">
  <link rel="stylesheet" href="css/custom.css" type="text/css">
  <link rel="stylesheet" href="css/bootstrap.css" type="text/css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

  <body>
  <div class="header">
    <div class="container">
      <div class="header-top">
        <div class="logo">
          <a href="index.html"> <img src="https://cdn.onlinewebfonts.com/svg/img_10670.png" alt="logo" class="img_logo">
          </a>
        </div>
      </div>


      <div class="header-right">
        <div class="phone">
          <h5>
            <a href="tel:(069)%201234%205678">
              <span class="fa fa-mobile-phone"></span>
              (069) 1234 5678
            </a>
          </h5>
        </div>

        <div class="clear"></div>
        <div class="header-bottom">
          <div class="dv-menu menu_desktop" id="menu">
            <ul class="nav navbar-nav cl-effect-16">
              <li class="active"> <a class="" href="index.html"> <span>Home Page</span> </a> </li>
              <li class=""> <a href="products.html"> <span>Products</span> </a>
                <ul class="dl-submenu">
                  <li><a href="products/honda.html">» Honda</a></li>
                  <li><a href="products/ducati.html">» Ducati </a></li>
                  <li><a href="products/yamaha.html">» Yamaha</a></li>
                </ul>
              </li>
              <li class=""><a class="" href="services.html"><span>Services</span></a></li>
              <li class=""><a class="" href="repair.php"><span>Repair</span></a></li>
            </ul>
          </div>
          <script src="js/jquery.dlmenu.js"></script>
          <script>
            $(function () {
              $('#dl-menu').dlmenu();
            });

            $(document).ready(function () {
              $('body').click(function (e) {
                $('#dl-menu').dlmenu('closeMenu');
              });
            });
          </script>
        </div>
      </div>
    </div>
  </div>
