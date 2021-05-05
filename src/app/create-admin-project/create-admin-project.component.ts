import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';



@Component({
  selector: 'app-create-admin-project',
  templateUrl: './create-admin-project.component.html',
  styleUrls: ['./create-admin-project.component.scss']
})
export class CreateAdminProjectComponent implements OnInit {

  allProject:any;
  isEdit=false;
  userObj={
    id:"",
    tile:"",
    startdate:"",
    enddate:"",
    description:""

  }
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.getLatestProject();
  }
  
  addProject(formObj){
    console.log(formObj)
    this.commonService.createProject(formObj).subscribe(
      (response)=>
      {
       this.getLatestProject();
       
      }
    )
    
    
  }
  getLatestProject(){
    this.commonService.getAllProject().subscribe(
      (response)=>
      {
        this.allProject=response;
      }
    )
  }
  deleteProject(createproject){
    this.commonService.deleteProject(createproject).subscribe(()=>{
       this.getLatestProject();
    })
    
  }
  editProject(createproject){
    this.userObj=createproject;
    this.isEdit=true
  }
  updateProject(){
    this.isEdit=!this.isEdit;
    this.commonService.UpdateProject(this.userObj).subscribe(()=>{
      // this.deleteUser(this.userObj);
      this.getLatestProject();
    })
  }

}