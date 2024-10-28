// src/app/pages/todo/create.todo.ts

import { CreateTheConnectionLocal, LocalSyncData, MakeTheInstanceConceptLocal, PatcherStructure, PRIVATE, UpdateComposition } from "mftsccs-browser";
import { StatefulWidget } from "../../default/StatefulWidget";
import './todo.style.css';
import { getLocalUserId } from "../user/login.service";

export class CreateTodo extends StatefulWidget {
    
    addEvents(): void {
        let userId: number = getLocalUserId();
        let order: 1;
        let title = this.getElementById("title") as HTMLInputElement;
        let id = this.getElementById("id") as HTMLInputElement;

        if (this.data) {
            title.value = this.data.title;
            id.value = this.data.id;
        }

        let submitButton = this.getElementById("submit");
        if (submitButton) {
            submitButton.onclick = (ev: Event) => {
                ev.preventDefault();
                
                if (id.value) {
                    let patcherStructure: PatcherStructure = new PatcherStructure();
                    patcherStructure.compositionId = Number(id.value);
                    patcherStructure.patchObject = {
                        "title": title.value
                    }
                    UpdateComposition(patcherStructure);
                } else {
                    MakeTheInstanceConceptLocal("the_todo", "", true, userId, PRIVATE).then((mainConcept) => {
                        MakeTheInstanceConceptLocal("title", title.value, false, userId, PRIVATE).then((concept) => {
                            CreateTheConnectionLocal(mainConcept.id, concept.id, mainConcept.id, order, "", userId).then(() => {
                                LocalSyncData.SyncDataOnline();
                            });
                        });
                    });
                }
                
                console.log("submit button clicked");
            }
        }
    }

    getHtml(): string {
        return `
            <div class="container">
                <form>
                    <div>
                        <input type="number" id="id" hidden>
                        <div class="formbody">
                            <label>Task Title</label>
                            <input type="text" id="title" placeholder="Enter task title">
                        </div>
                        <button class="btn btn-primary" id="submit" type="submit">Submit</button>
                    </div>
                </form>
            </div>`;
    }
}
