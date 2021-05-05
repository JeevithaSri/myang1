import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-assignproject',
  templateUrl: './assignproject.component.html',
  styleUrls: ['./assignproject.component.scss']
})
export class AssignprojectComponent implements OnInit {
  allUser:any;
  isEdit=false;
  userObj={
    id:"",
    manager:""
  }
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.getLatestUser();
  }
  
  addUser(formObj){
    console.log(formObj)
    this.commonService.createUser(formObj).subscribe(
      (response)=>
      {
       this.getLatestUser();
       
      }
    )
    
    
  }
  getLatestUser(){
    this.commonService.getAllUser().subscribe(
      (response)=>
      {
        this.allUser=response;
      }
    )
  }
  deleteUser(user){
    this.commonService.deleteUser(user).subscribe(()=>{
       this.getLatestUser();
    })
    
  }
  editUser(user){
    this.userObj=user;
    this.isEdit=true
  }
  updateUser(){
    this.isEdit=!this.isEdit;
    this.commonService.UpdateUser(this.userObj).subscribe(()=>{
      // this.deleteUser(this.userObj);
      this.getLatestUser();
    })
  }

}
