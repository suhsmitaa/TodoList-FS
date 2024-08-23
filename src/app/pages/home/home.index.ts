import mainViewClass from "../../default/mainView.class";
import { getHeadingText, showAlert } from "./home.service";
import './home.style.css'

export default class extends mainViewClass {
  constructor(params: any) {
    super(params);
    this.setTitle("Home");
  }

  async getHtml() {
    (window as any).showAlert = showAlert;
    const headingText = await getHeadingText();
    return `
      <h1>Home page</h1>
      <p class="heading-text">${headingText}</p>
      <button onclick="showAlert()">Show alert</button>
    `;
  }
}
