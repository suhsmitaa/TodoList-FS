import mainViewClass from "../../default/mainView.class";
import { getHeadingText } from "./home.service";

export default class extends mainViewClass {
  constructor(params: any) {
    super(params);
    this.setTitle("Home");
  }

  async getHtml(): Promise<string> {
    const headingText = await getHeadingText();
    return `
      <h1>Home page</h1>
      <p>${headingText}</p>
    `;
  }
}
