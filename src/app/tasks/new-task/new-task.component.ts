import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-new-task',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './new-task.component.html',
    styleUrls: ['./new-task.component.css']
})

export class NewTaskComponent {
    @Output() cancle = new EventEmitter();
    @Output() add = new EventEmitter<{title : string; summary: string;date :string}>();
    enteredTitle = '';
    enteredSummary = '';
    enteredDueDate = '';
    onCancel() {
        this.cancle.emit();
    }
    onSubmit(){
        this.add.emit({title: this.enteredTitle, summary: this.enteredSummary, date: this.enteredDueDate});
    }
}   