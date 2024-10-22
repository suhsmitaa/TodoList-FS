import { Signup, SignupModel } from "mftsccs-browser";
import { StatefulWidget } from "../../default/StatefulWidget";

export class register extends StatefulWidget{


    addEvents(): void {
        let email = this.getElementById("email") as HTMLInputElement;
        let password = this.getElementById("password") as HTMLInputElement;
        let submitButton = this.getElementById("submit");
        console.log("this is the submit button eventeer", submitButton);
        if(submitButton){
            submitButton.onclick = (ev: Event) => {
                ev.preventDefault();
                let signupData: SignupModel = {
                    email: email.value,
                    password: password.value
                }
                console.log("this is the login clicked");
                Signup(signupData).then((output: any)=>{
                    console.log("This is signup complete", output);
                })
                
            }
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
                    <input type = password id="verify-password" placeholder="password">
                    <button id="submit">Submit</button>
                </div>
            </form>
    
            </div>`
            return html;
        }
}