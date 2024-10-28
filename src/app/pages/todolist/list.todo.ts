// src/app/pages/todo/list.todo.ts

import { DeleteConceptById, GetCompositionListListener, NORMAL } from "mftsccs-browser";
import { StatefulWidget } from "../../default/StatefulWidget";
import { getLocalUserId } from "../user/login.service";
import './todo.style.css';

export class ListTodo extends StatefulWidget {
    todos: any[] = [];
    inpage: number = 10;
    page: number = 1;

    widgetDidMount(): void {
        let userId: number = getLocalUserId();
        GetCompositionListListener("the_todo", userId, this.inpage, this.page, NORMAL).subscribe((output: any) => {
            this.todos = output;
            this.render();
        });
    }

    addEvents(): void {
        let tableElement = this.getElementById("mainbody");
        if (tableElement) {
            console.log("this is the element", tableElement);
            if (this.todos.length > 0) {
                this.todos.forEach(todo => {
                    let id = todo.the_todo.id;

                    if (id) {
                        let row = document.createElement("tr");
                        let col1 = document.createElement("td");
                        let col2 = document.createElement("td");
                        let col3 = document.createElement("td");
                        let col4 = document.createElement("td");

                        let title = document.createElement("span");
                        title.innerHTML = todo.the_todo.title;

                        let editButton = this.createEditButton(todo);
                        let deleteButton = this.createDeleteButton(id);

                        col1.append(title);
                        col2.append(deleteButton);
                        col3.append(editButton);

                        row.appendChild(col1);
                        row.appendChild(col2);
                        row.appendChild(col3);
                        tableElement.appendChild(row);
                    }
                });
            }
        }
    }

    createEditButton(todo: any): HTMLButtonElement {
        let edit = document.createElement("button");
        edit.setAttribute('class', 'btn btn-primary');
        edit.innerHTML = "Edit";
        edit.onclick = () => {
            this.data = {
                "id": todo.the_todo.id,
                "title": todo.the_todo.title
            };
            this.notify();
        };
        return edit;
    }

    createDeleteButton(id: number): HTMLButtonElement {
        let del = document.createElement("button");
        del.setAttribute('class', 'btn btn-danger');
        del.innerHTML = "Delete";
        del.onclick = () => {
            DeleteConceptById(id).then(() => {
                console.log("Deleted todo with id:", id);
            });
        };
        return del;
    }

    getHtml(): string {
        return `
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody id="mainbody"></tbody>
                </table>
            </div>`;
    }
}
