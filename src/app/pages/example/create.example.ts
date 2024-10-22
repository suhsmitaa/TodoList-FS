import { CreateTheConnectionLocal, LocalSyncData, MakeTheInstanceConceptLocal, PatcherStructure, UpdateComposition } from "mftsccs-browser";
import { StatefulWidget } from "../../default/StatefulWidget";
import  './phonebook.style.css';
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
        if(submitButton){
            submitButton.onclick = (ev: Event) => {
                ev.preventDefault();
    
                if(id.value){
                    let patcherStructure: PatcherStructure = new PatcherStructure();
                    patcherStructure.compositionId = Number(id.value);
                    patcherStructure.patchObject = {
                        "name": name.value,
                        "phone": phone.value
                    }
                    UpdateComposition(patcherStructure);
                }
                else{
                    MakeTheInstanceConceptLocal("the_phonebook", "", true,999,4).then((mainconcept)=> {
                        MakeTheInstanceConceptLocal("name", name.value,false, 10267, 4).then((concept)=>{
                            MakeTheInstanceConceptLocal("phone", phone.value, false, 999,4).then((concept2) => {
                                CreateTheConnectionLocal(mainconcept.id, concept.id, mainconcept.id, 1, "", 999).then(()=>{
                                    CreateTheConnectionLocal(mainconcept.id, concept2.id, mainconcept.id, 1, "", 999).then(()=>{
                                        LocalSyncData.SyncDataOnline();
                                    })
                                })
                            });
                        });
                    });
                }
    
    
                console.log("submit button clicked");
            }
        }

    }






    /**
     * This is the main html component of our creating widget.
     * @returns returns a form that takes in name and number for the phone book.
     */
     getHtml(): string {
        let html = "";
        html = `<div class="container">
        <form>
            <div>
                <input type= number id=id hidden>
                <div class="formbody">
                    <label> name </label>
                    <input  type = text id="name" placeholder="name">
                </div>
                <div class="formbody">
                    <label> number </label>
                    <input   type = number id="phone" placeholder="phone">
                </div>
                <button class=" btn btn-primary" id="submit" type=submit>Submit</button>
            </div>
        </form>

        </div>`
        return html;
    }
}