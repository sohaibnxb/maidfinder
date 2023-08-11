window.scrollTo(0, 0)
// Custom Navbar Component
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // var active_page = this.attributes.page.value;
    this.innerHTML = `
        <nav class="navbar d-flex " id="navbar">
        <article class="navbar-logo">
          <a href="index.html" class="top-logo"><img src="images/maidfinder-logo.svg" alt="Maid Finder" /></a>
          <a href="register-maidfinder.html" class="navbar-reg-res" type="button" data-bs-toggle="modal"
          data-bs-target="#registration-modal">Register</a>
        </article>
    
        <div id="nav-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class="navbar-links d-flex " id="navbar-links">
        <li> <img class="" src = "images/nav-about.svg" />     <a href="about-maidfinder.html" class="nav-item">About</a>
        <ul class="nav-dropdowns"> 
        <li><a href="">About Maid Finder</a></li>
        <li><a href="">FAQs</a></li>
        <li><a href="">Customer Reviews</a></li>
        <li><a>Blog</a></li>
        </ul>
        </li>
        <li><img class="" src = "images/nav-maids.svg" /><a href="maids-maidfinder.html" class="nav-item">Maids</a></li>
        <li><img class="" src = "images/nav-packages.svg" /><a href="packages-maidfinder.html" class="nav-item">Packages</a>
        <ul class="nav-dropdowns"> 
        <li><a href="">Access Packages</a></li>
        <li><a href="">Terms & Conditions</a></li>
        </ul>
        </li>
        <li><img class="" src = "images/nav-resources.svg" /><a href="resources-maidfinder.html" class="nav-item">Resources</a>
        <ul class="nav-dropdowns"> 
        <li><a href="">About Hiring a Maid</a></li>
        <li><a href="">Interview Questions</a></li>
        <li><a href="">Sample Questions</a></li>
        <li><a href="">Maid Visa Cost</a></li>
        </ul>
        </li>
        <li><img class="" src = "images/nav-contact.svg" /><a href="contact-maidfinder.html" class="nav-item">Contact</a></li>
        <li><img class="" src = "images/nav-register.svg" /><a href="register-maidfinder.html" class="navbar-reg"   type="button" data-bs-toggle="modal"
          data-bs-target="#registration-modal">Register</a></li>
        <li class="navbar-extras"><img class="" src = "images/nav-login.svg" /><a href="login-maidfinder.html" class="nav-item">Login</a></li>
        <li class="navbar-extras"><img class="" src = "images/nav-logout.svg" /><a href="logout-maidfinder.html" class="nav-item">Logout</a></li>
          
      </ul>
       
      </nav>
        `;

    pageDetection();
  }
}

function pageDetection() {
  // Get the current page URL
  var currentUrl = window.location.href;

  // Get all the anchor tags in the navbar
  var navLinks = document.querySelectorAll(".nav-item");

  // Loop through each anchor tag and compare its href with the current URL
  navLinks.forEach(function (link) {
    if (link.href === currentUrl) {
      // If the href matches the current URL, add the 'active' class to the parent li element
      link.classList.add("active-nav-item");
    }
  });
}

customElements.define("header-component", Header);

// Navbar
window.addEventListener("DOMContentLoaded", function () {
  var navIcon = document.getElementById("nav-icon");
  var navbarLinks = document.getElementById("navbar-links");
  var body = document.body;

  navIcon.addEventListener("click", function () {
    if (navIcon.classList.contains("open")) {
      navIcon.classList.remove("open");

      // navbarLinks.style.visibility = "hidden";
      navbarLinks.style.cssText = "transform:translateY(-100vh);scale:0;visibility:hidden;";
      body.style.overflowY = "auto";
    } else {
      navIcon.classList.add("open");
      //   navbarLinks.style.visibility = "visible";
      //   navbarLinks.style.transform = "translateX(0vw)";
      navbarLinks.style.cssText =
        " padding-top: 4.62rem; transform: translateY(0vh);scale:1;visibility:visible;";

      body.style.overflowY = "hidden";
    }
  });
});

// Sticky Navbar

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  stickIt();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickIt() {
  if (window.pageYOffset >= 200) {
    navbar.classList.add("sticky");
  }
  // if (window.pageYOffset >= sticky)
  else {
    navbar.classList.remove("sticky");
  }
}

// Navbar Code ends here

// Modal

class RegModal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="modal fade " id="registration-modal" tabindex="-1" aria-labelledby="registration-modal"
    aria-hidden="true">
    <div class="modal-dialog ">
      <div class="modal-content ">

        <div class="modal-body" class="reg-modal-body">
          <div class="reg-modal-body__lft">
            <figure class="text-center">
              <img src="images/reg-form-welcome.png" alt="Welome | Get registered at Maid Finder">
              <figcaption class="text-white">Welcome</figcaption>
            </figure>
            <p class="text-center text-white">Registered Users Can Save Maids Profiles And Print Maid Cvs.</p>
            <p class="text-center text-white"> Once Registration Is Complete You Can Purchase An Access Any Time!</p>
          </div>
          <div class="reg-modal-body__rit">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="#" class="registration-form">
              <h2 class=" text-center">Register For Free</h2>
              <div class="field-grps d-flex gap-3">
                <input type="text" class="form-control" placeholder="First Name * (Type Letters Only)">
                <input type="text" class="form-control" placeholder="Last Name * (Type Letters Only)">
              </div>
              <div class="field-grps d-flex gap-3">
                <input type="email" class="form-control" placeholder="Enter You Email *">
                <input type="password" class="form-control" placeholder="Enter New Password">
              </div>
              <div class="field-grps d-flex gap-3">
                <input type="number" class="form-control" placeholder="Telephone *">
                <input type="text" class="form-control" placeholder="City *">
              </div>
              <div class="field-grps">
                <input type="text" class="form-control" placeholder="Address *">

              </div>

              <div class="text-center">
                <button type="submit" class="reg-form-submit">Submit</button>
              </div>

              <p class="login-here text-center">If You Already Have An Account <a href="#login-modal" type="button" data-bs-toggle="modal"
              data-bs-target="#login-modal">Login Here</a>
              </p>


            </form>


          </div>
        </div>
      </div>
    </div>
  </div>
    `;
  }
}

customElements.define("registration-modal", RegModal);


// Footer Components begins here

class Footer extends HTMLElement{
  constructor(){
    super()
  }

  connectedCallback(){
    this.innerHTML = `
    <footer>
    <section class="footer-links-section">
      <div>
        <article class="footer-links__contact__social">
          <header class="footer-headings">
            <h3>Contact Us</h3>
            <section class="contact-us">
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33">
                <g id="Group_208" data-name="Group 208" transform="translate(-111 -5576.8)">
                  <rect id="Rectangle_222" data-name="Rectangle 222" width="33" height="33" rx="10"
                    transform="translate(111 5576.8)" fill="#a07fb5" />
                  <path id="Icon_awesome-phone" data-name="Icon awesome-phone"
                    d="M.635.84,4.188.02A.825.825,0,0,1,5.128.5l1.64,3.827a.818.818,0,0,1-.236.957L4.461,6.973a12.662,12.662,0,0,0,6.054,6.054l1.695-2.07a.819.819,0,0,1,.957-.236l3.827,1.64a.83.83,0,0,1,.478.943l-.82,3.553a.82.82,0,0,1-.8.635A15.851,15.851,0,0,1,0,1.64.819.819,0,0,1,.635.84Z"
                    transform="translate(118.654 5584.654)" fill="#fff" />
                </g>
              </svg>
              <a href="tel:04 4427 686" class="click-to-call">04 4427 686</a>
            </section>
            <section class="contact-us">
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33">
                <g id="Group_275" data-name="Group 275" transform="translate(-12179 -7941)">
                  <rect id="Rectangle_222" data-name="Rectangle 222" width="33" height="33" rx="10"
                    transform="translate(12179 7941)" fill="#a07fb5" />
                  <path id="Icon_awesome-mobile-alt" data-name="Icon awesome-mobile-alt"
                    d="M10.625,0H1.875A1.875,1.875,0,0,0,0,1.875v16.25A1.875,1.875,0,0,0,1.875,20h8.75A1.875,1.875,0,0,0,12.5,18.125V1.875A1.875,1.875,0,0,0,10.625,0ZM6.25,18.75A1.25,1.25,0,1,1,7.5,17.5,1.249,1.249,0,0,1,6.25,18.75Zm4.375-4.219a.47.47,0,0,1-.469.469H2.344a.47.47,0,0,1-.469-.469V2.344a.47.47,0,0,1,.469-.469h7.813a.47.47,0,0,1,.469.469Z"
                    transform="translate(12189.25 7947.5)" fill="#fff" />
                </g>
              </svg>
              <a href="tel:04 4427 686" class="click-to-call">04 4427 686</a>
            </section>
          </header>

          <article class="footer-links-ul">



            <header class="footer-headings stay-connect">
              <h3>Stay Connected</h3>
            </header>
            <section class="social-icons">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33">
                  <g id="Group_210" data-name="Group 210" transform="translate(-121 -5870)">
                    <rect id="Rectangle_222" data-name="Rectangle 222" width="33" height="33" rx="10"
                      transform="translate(121 5870)" fill="#a07fb5" />
                    <path id="Icon_zocial-facebook" data-name="Icon zocial-facebook"
                      d="M13.257,9.981V6.432H16.12V4.647a4.671,4.671,0,0,1,1.254-3.29A3.99,3.99,0,0,1,20.413,0h2.844V3.55H20.413a.626.626,0,0,0-.5.307,1.245,1.245,0,0,0-.223.753V6.431h3.568v3.55H19.688v8.607H16.119V9.981Z"
                      transform="translate(119.743 5877)" fill="#fff" />
                  </g>
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33">
                  <g id="Group_209" data-name="Group 209" transform="translate(-174 -5870)">
                    <rect id="Rectangle_228" data-name="Rectangle 228" width="33" height="33" rx="10"
                      transform="translate(174 5870)" fill="#a07fb5" />
                    <path id="Icon_simple-instagram" data-name="Icon simple-instagram"
                      d="M16.676,8.4A7.919,7.919,0,1,0,24.6,16.315,7.919,7.919,0,0,0,16.676,8.4Zm0,13.06a5.141,5.141,0,1,1,5.141-5.141A5.139,5.139,0,0,1,16.676,21.455ZM26.76,8.083a1.851,1.851,0,1,1-1.851-1.849A1.852,1.852,0,0,1,26.76,8.083Z"
                      transform="translate(172.243 5871.766)" fill="#fff" />
                  </g>
                </svg>
              </a>
            </section>
          </article>
        </article>
      </div>

      <div class="link-groups">
        <article>
          <header class="footer-headings">
            <h3>About Us</h3>
          </header>
          <ul class="footer-links-ul">
            <li><a href="about-maidfinder.html">About Maid finder</a></li>
            <li><a href="customer-reviews-maidfinder.html">Customer Reviews</a></li>
            <li><a href="faqs-maidfinder.html">FAQs</a></li>
            <li><a href="contact-maidfinder.html">Contact Us</a></li>
            <li><a href="blog-maidfinder.html">Blog</a></li>
          </ul>
        </article>
        <article>
          <header class="footer-headings">
            <h3>Packages</h3>
          </header>
          <ul class="footer-links-ul">
            <li><a href="#">Register Now</a></li>
            <li><a href="#">About Access Packages</a></li>
            <li><a href="#">Term & Conditions</a></li>
          </ul>
        </article>

        <article>
          <header class="footer-headings">
            <h3>Search Maids</h3>
          </header>
          <ul class="footer-links-ul">
            <li><a href="#">Search all maids/ nannies</a></li>
            <li><a href="#">Live in maids/ nannies</a></li>
            <li><a href="#">Own visa Maids</a></li>

            <li><a href="#">full time live out maids/ nannies</a></li>
            <li><a href="#">Part time maids</a></li>
            <li><a href="#">Monthly maids – Temporary maids</a></li>

            <li><a href="#">Nannies for new Born</a></li>
            <li><a href="#">Maids accepting salary from 1,300 aed</a></li>
            <li><a href="#">Full time house maids</a></li>
          </ul>
        </article>

        <article>
          <header class="footer-headings">
            <h3>Search Maids</h3>
          </header>
          <ul class="footer-links-ul">
            <li><a href="#">Guidelines for Hiring a Maid</a></li>
            <li><a href="#">Maid Interview Tips</a></li>
            <li><a href="#">Hiring nanny and maid – What to look for?</a></li>

            <li><a href="#">Maid visa cost</a></li>
          </ul>
        </article>
      </div>

    </section>
    <hr>
    <section class="footer-banking">

      <article><img src="images/footer-dubai-best-badge.png" alt="Dubai Best Maid Finder"></article>
      <article><span class="footer-copyright-txt"><span class="footer-right-reserved">2023 © MaidFinder.ae All rights
            reserved.</span> DED licensed company,
          Affiliated with TAD-BEER, License TL NO. 761784</span></article>
      <article>
        <span class="pay-securely">Pay securely via</span>
        <span>
          <img src="images/footer-visa.png" alt="Visa Payments are accepted here">
          <img src="images/footer-master-card.png" alt="Master Card Payments are accepted here">
          <img src="images/footer-paypal.png" alt="Paypal Payments are accepted here">
          <img src="images/footer-bank-transfer.png" alt="Bank Transfers are accepted here">
        </span>



      </article>

    </section>
  </footer>
    `
  }
}

customElements.define("footer-component", Footer);