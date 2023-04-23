class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .footer{
            color: #486581;
            flex: none;
            font-family: PP Pangram Sans Rounded SemiBold;
            font-size: 16px;
            font-style: normal;
            height: 18px;
            line-height: 18px;
            order: 1;
            text-align: center;
          }
        
        .footer-container {
          width:100%;
          background-color: #bef9ea;
          mar
        }
      </style>
      <div class="footer-container">
        <div class="footer">
                <a class="no-color" target="_blank" rel="noopener noreferrer" href="#"><img id="icon" src="/assets/social/instagram.svg"></a>
                <a class="no-color" target="_blank" rel="noopener noreferrer" href="#"><img id="icon" src="/assets/social/twitter.svg"></a>
                <a class="no-style" target="_blank" rel="noopener noreferrer" href="#"><img id="icon" src="/assets/social/facebook.svg"></a>
        </div>
        <p class="footer">Made in LA Hacks 2023 <3</p>
      </div>
    `;
  }
}

customElements.define('footer-component', Footer);

