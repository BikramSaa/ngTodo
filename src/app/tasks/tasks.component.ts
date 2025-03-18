import { Component, Input } from "@angular/core";
import {TaskComponent} from './task/task.component'
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent, NewTaskComponent],
    templateUrl: './tasks.component.html',
   styleUrl:'./tasks.component.css'
})
export class TasksComponent {
    @Input() userid!: string;
    @Input() name!: string;
    isAddingtask = false;
    Tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
      ]
      get Selectedusertasks(){
          return this.Tasks.filter(task => task.userId === this.userid);
      }
      onCompletetask(id:string){
         this.Tasks = this.Tasks.filter(task => task.id !== id);

      }
      onAddTask(){
          this.isAddingtask = true;
      }
      onCancletask(){
            this.isAddingtask = false;
      }
      onAddNewTask(taskData: {title: string; summary: string; date: string}){

        this.Tasks.push({
            id:new Date().getTime().toString(),
            userId: this.userid,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        });
        this.isAddingtask = false;
      }
}