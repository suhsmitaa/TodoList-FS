import { CreateTheCompositionLocal, CreateTheConnectionLocal, LocalSyncData, MakeTheInstanceConceptLocal } from "mftsccs-browser";
import { StatefulWidget } from "../../default/StatefulWidget";

export class create extends StatefulWidget{


    /**
     * These are the events that user adds. These could be any thing like populating the data to creating the data
     * 
     */
    addEvents(): void {
        let name = this.getElementById("name") as HTMLInputElement;
        let phone = this.getElementById("phone") as HTMLInputElement;
        let id = this.getElementById("id") as HTMLInputElement;
        if(this.data){
            name.value = this.data.name;
            phone.value = this.data.phone;
            id.value = this.data.id;
        }
        let submitButton = this.getElementById("submit");
        console.log("this is the submit button eventeer", submitButton);
        submitButton.onclick = (ev: Event) => {
            ev.preventDefault();
            console.log("This is the data clicked", ev, name.value, phone.value);


           MakeTheInstanceConceptLocal("the_phonebook", "", true,999,4).then((mainconcept)=> {
                console.log("this is for the sync", mainconcept);
                MakeTheInstanceConceptLocal("name", name.value,false, 10267, 4).then((concept)=>{
                    MakeTheInstanceConceptLocal("phone", phone.value, false, 999,4).then((concept2) => {
                        CreateTheConnectionLocal(mainconcept.id, concept.id, mainconcept.id, 1, "", 999).then(()=>{
                            CreateTheConnectionLocal(mainconcept.id, concept2.id, mainconcept.id, 1, "", 999).then(()=>{
                                LocalSyncData.SyncDataOnline();
                            })
                        })
                    });
                });
            }).catch((err)=>{
                console.error("this is the error", err);
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
                <input type= number id=id hidden>
                <input type = text id="name" placeholder="name">
                <input type = number id="phone" placeholder="phone">
                <button id="submit" type=submit>Submit</button>
            </div>
        </form>

        </div>`
        return html;
    }
}