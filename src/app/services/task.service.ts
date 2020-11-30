import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiUrl="http://localhost:3000/Tasks";

  constructor(private client: HttpClient) { }

findAll(){
  return this.client.get<Task[]>(this.apiUrl);
}
delete(id){
  return this.client.delete(`${this.apiUrl}/${id}`)
}
create(task){
  return this.client.post<Task>(this.apiUrl,task)
}
completed(id,completed){
  //to change just an attrinute of the hole object
  return this.client.patch(`${this.apiUrl}/${id}`,{completed:!completed})

}
update(task){
  return this.client.put<Task>(`${this.apiUrl}/${task.id}`,task )
}
}
