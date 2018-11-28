<div class="section-padding background-dark-blue">
        <div class="section-questions">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-centered text-center">
                <h2 class="header-text text-white">How can we help</h2>
                <p class="text-white">Our services team is available 7 days a week, Monday - Friday from 6 AM to 6 PM,
                  Saturaday - Sunday from 7 AM to 4 PM <br> if you are stuck somewhere and cant get help we can give
                  you the infomation of all our shop to help you instanly</p>
                <p class="text-white question-contact-info">
                  <a href="tel:0912345678">09 12 34 56 78</a>
                  .
                  <a href="mailto:nntrung97@gmail.com">nntrung97@gmail.com</a>
                </p>
              </div>
            </div>
            <div class="row row-centered">
              <div class="col-sm-4 col-sm-offset-2 spaceb-15">
                <a class="btn-gray-stroke btn-gray-stroke--ondark" href="/support">Read FAQ</a>
              </div>
              <div class="col-sm-4">
                <a class="btn-orange-fill" href="location.html">Get Help</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>



  <div class="content">
    <div class="specials-section">
      <div class="container">
        <div class="specials-grids">
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-6 col-min-12 specials footer-h1">
              <h3>Introduction</h3>
              <ul class='nav-bottom navi_bottom  navi_bottom_cus1'>
                <li class='li_bottom li_bottom_cus1'>
                  <i class='' aria-hidden='true'></i>
                  <a class='a_navi_bottom a_navi_bottom_cus1' href=''>about us</a>
                </li>
                <li class='li_bottom li_bottom_cus1'>
                  <i class='' aria-hidden='true'></i>
                  <a class='a_navi_bottom a_navi_bottom_cus1' href=''>history</a>
                </li>
                <li class='li_bottom li_bottom_cus1'>
                  <i class='' aria-hidden='true'></i>
                  <a class='a_navi_bottom a_navi_bottom_cus1' href=''>city</a>
                </li>
                <li class='li_bottom li_bottom_cus1'>
                  <i class='' aria-hidden='true'></i>
                  <a class='a_navi_bottom a_navi_bottom_cus1' href=''>partner</a>
                </li>
                <li class='li_bottom li_bottom_cus1'>
                  <i class='' aria-hidden='true'></i>
                  <a class='a_navi_bottom a_navi_bottom_cus1' href=''>other</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6 col-min-12 specials footer-h2">
              <h3>Terms</h3>
              <ul class='nav-bottom navi_bottom  navi_bottom_cus1'>
                <li class='li_bottom li_bottom_cus1'>
                  <i class='' aria-hidden='true'></i>
                  <a class='a_navi_bottom a_navi_bottom_cus1' href=''>warranty</a>
                </li>
                <li class='li_bottom li_bottom_cus1'>
                  <i class='' aria-hidden='true'></i>
                  <a class='a_navi_bottom a_navi_bottom_cus1' href=''>privacy policy</a>
                </li>
                <li class='li_bottom li_bottom_cus1'>
                  <i class='' aria-hidden='true'></i>
                  <a class='a_navi_bottom a_navi_bottom_cus1' href=''>term of use</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6 col-min-12 specials footer-h3">
              <h3>HVN moto</h3>
              <div class="text-white">
                <p>18 Hoang Quoc Viet, Q.Ba Dinh TP. Ha Noi</p>
                <p>Tel: 00 00 00 00 00</p>
                <p>Fax: 00 00 00 00 00</p>
                <p>Email: something@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script type="text/javascript">
    $(window).bind("load", function () {
      var h_1 = $(".footer-h1").height();
      var h_2 = $(".footer-h2").height();
      var h_3 = $(".footer-h3").height();
      var h_4 = $(".footer-h4").height();
      var max_1 = h_1;
      var max_2 = h_3;
      if (h_1 < h_2) max_1 = h_2;
      if (h_3 < h_4) max_2 = h_4;

      var w_document = $(window).width();
      if (w_document > 479 && w_document < 992) {
        if (max_1 != 0) {
          $(".footer-h1").height(max_1);
          $(".footer-h2").height(max_1);
        }
        if (max_2 != 0) {
          $(".footer-h3").height(max_2);
          $(".footer-h4").height(max_2);
        }
      }
    });
  </script>

  <p id="back-top" style="display: block;"><a href="#top"><span>TOP</span></a></p>
  <script type="text/javascript">
    $(document).ready(function () {
      $("#back-top").hide();
      $(function () {
        $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
          } else {
            $('#back-top').fadeOut();
          }
        });
        $('#back-top a').click(function () {
          $('body,html').animate({
            scrollTop: 0
          }, 800);
          return false;
        });
      });
    });
  </script>

  </script>

</body>

</html>