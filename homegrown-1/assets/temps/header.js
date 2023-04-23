class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .navbar {
          -ms-overflow-style: none;
          align-items: center;
          background: #fff;
          border-bottom: solid #bcccdc;
          border-width: 100%;
          display: flex;
          flex-direction: row;
          gap: 25px;
          height: 86px;
          overflow-x: scroll;
          overflow-y: hidden;
          padding: 12px 40px 8px;
          position: fixed;
          scrollbar-width: none;
          top: 0;
          width: 100%;
          z-index: 999;
        }
        
        
        
        .nav-button {
          background: #bef9ea;
          border-radius: 20px;
          color: #000000;
          width:100%;
          height: 50px;
          font-family: PP Pangram Sans Rounded SemiBold;
          font-size: 20px;
        }
        
        .nav-button:hover{
          background: #c0c0c0;
          cursor: pointer;
        }
        #logo{
          height:7rem;
        }
        
        #logo:hover {
          transition: transform .7s;
          transform: rotate(360deg);
        }
      </style>
      <div class="navbar">
        
        <a style="text-decoration: none;" href="/">
          <div>
            <img id="logo" src="/assets/logo_w.jpg">
          </div>
        </a>
        
        <a style="text-decoration: none;" href="/">
          <button class="nav-button">Home
          </button>
        </a>
        
        <a style="text-decoration: none;" href="/plants">
          <button class="nav-button">Plants
          </button>
        </a>
        <a style="text-decoration: none;" href="/mission">
          <button class="nav-button">Mission
          </button>
        </a>
        <a style="text-decoration: none;" href="/plant_by_area">
          <button class="nav-button">Discover places
          </button>
        </a>
        
       
        <a style="text-decoration: none;" href="/meet_our_experts">
          <button class="nav-button">Planty
          </button>
        </a>
  
        <a style="text-decoration: none;" href="/faq">
          <button class="nav-button">FAQ
          </button>
        </a>
        
      
      </div>
    `;
  }
}

customElements.define('header-component', Header);

