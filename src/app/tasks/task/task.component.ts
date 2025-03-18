import { Component,EventEmitter,Input, Output } from "@angular/core";
interface Task {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
  }

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent{
   @Input() task!: Task;
    @Output() complete = new EventEmitter<string> ();

    onCompletetask(){
        this.complete.emit(this.task.id);
    }
}