import { LoginToBackend } from "mftsccs-browser";
import { StatefulWidget } from "../../default/StatefulWidget";
import { saveTolocalStorage } from "./login.service";

export class login extends StatefulWidget{




    /**
     * These are the events that user adds. These could be any thing like populating the data to creating the data
     * 
     */
        addEvents(): void {
            let email = this.getElementById("email") as HTMLInputElement;
            let password = this.getElementById("password") as HTMLInputElement;
            let submitButton = this.getElementById("submit");
            console.log("this is the submit button eventeer", submitButton);
            submitButton.onclick = (ev: Event) => {
                ev.preventDefault();
    
                console.log("this is the login clicked");
                LoginToBackend(email.value, password.value).then((output: any)=>{
                    console.log("This is the value", output);
                    saveTolocalStorage(output);
                })
                
            }
        }

    /**
     * This is the main html component of our creating widget.
     * @returns returns a form that takes in name and number for the phone book.
     */
        getHtml(): string {
            let html = "";
            html = `<div>
            <form>
                <div>
                    <input type = text id="email" placeholder="email">
                    <input type = password id="password" placeholder="password">
                    <button id="submit">Submit</button>
                </div>
            </form>
    
            </div>`
            return html;
        }
}