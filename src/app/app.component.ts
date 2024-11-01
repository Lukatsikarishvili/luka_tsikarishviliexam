import { Component, input } from '@angular/core';
import { ParentUser } from './parent-user';
import { ChildUser } from './child-user' ;
import { EventEmitter } from './stream'; 
import { format } from 'path';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'luka tsikarishvili';


  arrayUsers: any[] = [

    {firstname: "Luka", lastname: "Tsikarishvili", age: "19"},
    {firstname: "john", lastname: "doe", age: "75"},
    {firstname: "safet", lastname: "bairaktutar", age: "60"},
    {firstname: "tornike", lastname: "gelashvili", age: "28"},
    {firstname: "gela", lastname: "maladoy", age: "45"},
  ];

  newArray: ParentUser[] =[

      {id:1, firstname: "lela", lastname:"wurwumia", dateofbirth:"1970-01-05", phone:599-69-69-69, email:"lelaThebest@lela.com"  },
      {id:2, firstname: "mamulicha", lastname:"wurwumia", dateofbirth:"1969-03-05", phone:599-70-69-70, email:"mamulichamgheris@gmail.com"  },
      {id:3, firstname: "bidzina", lastname:"saakashvili", dateofbirth:"1801-02-09", phone:577-67-69-65, email:"avtoriteti@mail.ru"  },
      {id:4, firstname: "gela", lastname:"gagnidze", dateofbirth:"1985-15-07", phone:568-12-25-19, email:"gela12gela@gmail.com"  },

  ];


  childUserArray: ChildUser[] =[

    {id:1, firstname: "lilly", lastname:"qochorashvili", dateofbirth:"2010-01-05", phone:599-12-23-67, email:"llillyfexburteli@lela.com"  },
    {id:2, firstname: "nanu", lastname:"mamardashili", dateofbirth:"2012-03-05", phone:765-75-61-70, email:"nanumagaria@gmail.com"  },
    {id:3, firstname: "gio", lastname:"wade", dateofbirth:"2018-02-09", phone:577-67-55-65, email:"gio@mail.ru"  },
    {id:4, firstname: "ruben", lastname:"pataraia", dateofbirth:"2020-15-07", phone:568-32-25-19, email:"ruben@gmail.com"  },
  
  ];
  

   profileforms = this.fb.group({
 
      id: new formControl('', [Validators.required]),  
      name: new formControl('', [Validators.required]),  
      lastName: new formControl('', [Validators.required]),  
      dateOBirth: new formControl('', [Validators.required]),  
      phone: new formControl('', [Validators.required]),
      email: new formControl('', [Validators.required]) 

   })





}




