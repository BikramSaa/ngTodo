import { Component,Input,Output,input,EventEmitter, } from '@angular/core';




@Component({
    selector: 'app-user',
    standalone : true,  
    templateUrl: './user.component.html',
    styleUrl:'./user.component.css',

})
export class UserComponent{
    @Input({required :true}) user!: {
        id: string,
        avatar: string,
        name: string
    }
    @Input() selected! :boolean;
    // @Input() id!:String;
    // @Input() avatar!:string;
    // @Input() name!:string;
//    avatar  =input.required()
//    name = input.required()
   @Output() select = new EventEmitter();
    get imagePath(){
        return 'assets/users/' +this.user.avatar;
    }

    onSelectUser(){
         this.select.emit(this.user.id);
      
    }
}