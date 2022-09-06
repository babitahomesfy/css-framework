
// card element
// class UserCard extends HTMLElement {
//     constructor() {
//         super();
//         this.innerHTML = `
//         <div class="price-plan-content">
//         <div class="price-card-type1" style="width: 16rem;">
//             <div class="card-img">
//                 <img src="img/flower.jpg" alt="">
//             </div>
//             <div class="price-card-body text-center">
//                 <div class="card-list-item mb-2 mt-1">
//                     <div class="card-item-heading">
//                         <span><span class="price-card-title icon-home font-xl"></span></span>
//                         <span>Area Size</span>
//                         <span>Price</span>
//                     </div>
//                     <div class="card-item-content">
//                         <span class="price-card-title">1 BHK</span>
//                         <span class="font-bold text-primary">1075 <span class="font-sm">sqft</span></span>
//                         <span class="font-bold text-primary">1.52 <span class="font-sm">Ctr*</span></span>
//                     </div>
//                 </div>
//                 <button class="btn-outlined-primary text-primary" data-open-modal>Enquire Now <i
//                         class="icon-arrow-right2"></i></button>
//             </div>
//         </div>
//     </div>
//         `
//     }
// }


// popup element

class Popup extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div id="popup-modal" class="modal popup-modal">
        <!--Popup - Modal content -->
        <div class="modal-content">
            <span class="close" close-popup="close-popup">&times;</span>
            <div class="popup-container">
                <div class="pop-img">
                    <img src="img/gallery/g5.webp" alt="">
                </div>
                <div class="modal-content-form">
                    <form action="" class="form-border-bottom">
                        <h3 class="form-title" form-title>form type 3</h3>
                        <input type="text" class="form-input" placeholder="name"> <br> <br>
                        <div class="form-phone-group mt-2">
                            <select dropdown-options="dropdown-options" class="form-input">
                            </select>
                            <input type="text" class="form-input mt-2" placeholder="Mobile Number"> <br> <br>
                        </div>
                        <br>
                        <button class="btn-orange mt-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    
    </div>

        `
    }
}

// header custom element

class Header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <div class="responsive-navbar sticky bg-white">
        <div class="container">
            <div class="navbar-content">
                <div class="nav-logo">
                    <img src="img/logo/logo.svg" alt="">
                </div>
                <div class="nav-links deskBlock">
                    <a href="#highlights" class="text-gray">Highlights</a>
                    <a href="#price-plan" class="text-gray">Price Plan</a>
                    <a href="#floor-plan" class="text-gray">Floor Plan</a>
                    <a href="#location" class="text-gray">Location</a>
                    <a href=""><button class="btn-orange">9087654321</button></a>
                </div>
                <div class="sidebar-container mobBlock">
                    <div id="overlay"></div>
                    <div class="sidebar">
                        <span class="toggle-right-black icon-paragraph-left" onclick="openSideNav()"></span>
                        <div id="sidenav" class="sidenav sidenav-right-light">
                            <a href="javascript:void(0)" class="closebtn text-white"
                                onclick="closeSideNav()">&times;</a>
                            <a href="#highlights" class="text-white">Highlights</a>
                            <a href="#price-plan" class="text-white">Price Plan</a>
                            <a href="#floor-plan" class="text-white">Floor Plan</a>
                            <a href="#location" class="text-white">Location</a>
                            <a href=""><button class="btn-orange">9087654321</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }
}

class Banner extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <div class="banner-section">
        <div class="banner-img">
        <img src="img/banner/deskBanner.webp" class="deskBlock clip-bottom-wave" alt="">
        <img src="img/banner/mobBanner.webp" class="mobBlock" alt="">
    </div>
    </div>
        `
    }
}


const template = document.createElement('template');
template.innerHTML = `
<style>
.price-card-type1 {
    padding: 0;
    background: #ffffff;
    box-shadow: 0.1rem 0.3rem 0.5rem rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 0.01rem solid rgb(221, 221, 221);
    position: relative;
  }
  .price-card-type1 img{
      width:100%
  }
  .card-img img {
    border-radius: 0;
  }
  .price-card-body {
    padding: 1rem;
  }
  .price-card-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .price-card-body button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1rem;
  }
  .card-list-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .card-item-heading {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: baseline;
  }
  .card-item-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .price-card-list {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;
  }
  .price-item-card {
    width: 100%;
  }
</style>
<div class="price-plan-content">
        <div class="price-card-type1" style="width: 16rem;">
            <div class="card-img">
                <img src="img/flower.jpg" alt="">
            </div>
            <div class="price-card-body text-center">
                <div class="card-list-item mb-2 mt-1">
                    <div class="card-item-heading">
                        <span><span class="price-card-title icon-home font-xl"></span></span>
                        <span>Area Size</span>
                        <span>Price</span>
                    </div>
                    <div class="card-item-content">
                        <span class="price-card-title price"></span>
                        <span class="font-bold text-primary">1075 <span class="font-sm">sqft</span></span>
                        <span class="font-bold text-primary">1.52 <span class="font-sm">Ctr*</span></span>
                    </div>
                </div>
                <button class="btn-outlined-primary text-primary" data-open-modal>Enquire Now <i
                        class="icon-arrow-right2"></i></button>
            </div>
        </div>
    </div>
`


class UserCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.querySelector('.price-card-title.price').innerText=this.getAttribute('price')
    }
}



customElements.define('user-card', UserCard)
// customElements.define('popup-modal', Popup)
// customElements.define('top-header', Header)
// customElements.define('top-banner',Banner )