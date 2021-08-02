import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user = {
      name: '',
      id: 0
    }

    edit = true;
    add = false;
    users!: User[];

    constructor(private userService: UserService) { }

    ngOnInit(): void {
      this.getUsers()
    }

    private getUsers(){
      this.userService.getUsers().subscribe(users => this.users = users)
    }

    // addUser(){
    //   const data = {
    //     name: this.user.name,
    //     id: this.user.id
    //   };
    //   this.userService.createUser(data).subscribe(response => {
    //     console.log(response)
    //     this.getUsers();
    //   })
    // }

    addUser(name: string): void {
      name = name.trim();
      if(!name) {return;}
      this.userService.createUser({name} as User)
        .subscribe(user => {
          this.users.push(user)
        })
    }

    setUserEdit(user: User) {
      this.user.name = user.name;
      this.user.id = user.id;
      this.edit = false;
      this.add = true;
    }

    resetValues() {
      this.user.name = "";
      this.user.id = 0;
      this.edit = true;
      this.add = false;
    }

    removeUser(user: User) {
      const id = user.id;
      console.log(user)
      this.userService.deleteUser(id).subscribe(user => console.log(user));
      this.getUsers()
    }

    updateUser(){
      this.userService.editUser(this.user).subscribe(response => console.log(response));
      this.getUsers()
      this.resetValues()
    }
}
