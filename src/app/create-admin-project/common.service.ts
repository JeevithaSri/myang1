import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient){

  }
  createProject(createproject){
    return this._http.post("http://localhost:3000/CreateProjects",createproject)
  }
  getAllProject(){
      return this._http.get("http://localhost:3000/CreateProjects/")
  }
  UpdateProject(createproject){
       return this._http.put("http://localhost:3000/CreateProjects/"+createproject.id,createproject)
  }
  deleteProject(createproject){
    return this._http.delete("http://localhost:3000/CreateProjects/"+createproject.id)
  }
}
