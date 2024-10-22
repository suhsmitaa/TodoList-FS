import mainViewClass from "../../default/mainView.class";
import { getHeadingText, showAlert } from "./home.service";
import "./home.style.css";

export default class extends mainViewClass {
  constructor(params: any) {
    super(params);
    this.setTitle("Home");
  }

  async getHtml() {
    (window as any).showAlert = showAlert;
    const headingText = await getHeadingText();
    return `
      <div class="home-container">
        <div class="header">
          <div class="header-logo">
            <img src="./images/freeschema-logo.png" alt="freeschema logo">
            <h1>Freeschema Frontend</h1>
          </div>
          <div class="header-link">
            <p>View <a href="https://github.com/Mentor-Friends/FreeschemaFrontendDocs" target="_blank">documentation</a></p>
          </div>
        </div>

        <main class="main">
          <h1>Freeschema</h1>
          <p class="heading-text">${headingText}</p>
          <!-- <button onclick="showAlert()">Show alert</button> -->
          <div class="btn-group">
            <router-link href="/signup">Get Started</router-link>
            <router-link href="/login">Login</router-link>
          </div>
        </main>

        <div class="footer">
          <div>
            <h3><a href="https://github.com/Mentor-Friends/FreeschemaFrontendDocs" target="_blank">Freeschema Frontend
                Focumentation</a></h3>
            <p>Topics, references, and how-to's</p>
          </div>
          <div>
            <h3><router-link href="/phonebook">Example: Phonebook App</router-link></h3>
            <p>Get Started with Freeschema Frontend</p>
          </div>
          <div>
            <h3><a href="https://github.com/Mentor-Friends" target="_blank">Freeschema Frontend Community</a></h3>
            <p>Connect get help, or contribute</p>
          </div>
        </div>
      </div>
    `;
  }
}
