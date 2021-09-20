import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { Observable,Subject } from "rxjs";

import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

 constructor(private clientservice:ClientService) { }

  clientsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  clients: Observable<Client[]>;
  client : Client=new Client();
  deleteMessage=false;
  clientlist:any;
  isupdated = false;    
 

  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
    this.clientservice.getClientList().subscribe(data =>{
    this.clients =data;
    this.dtTrigger.next();
    })
  }
  
  deleteClient(id: number) {
    this.clientservice.deleteClient(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.clientservice.getClientList().subscribe(data =>{
            this.clients =data
            })
        },
        error => console.log(error));
  }


  updateClient(id: number){
    this.clientservice.getClient(id)
      .subscribe(
        data => {
          this.clientlist=data           
        },
        error => console.log(error));
  }

  clientupdateform=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    email:new FormControl(),
    branch:new FormControl()
  });

  updateStu(updstu){
    this.client=new Client(); 
   this.client.id=this.ClientId.value;
   this.client.name=this.ClientName.value;
   this.client.email=this.ClientEmail.value;
   this.client.branch=this.ClientBranch.value;
   console.log(this.ClientBranch.value);
   

   this.clientservice.updateClient(this.client.id,this.client).subscribe(
    data => {     
      this.isupdated=true;
      this.clientservice.getClientList().subscribe(data =>{
        this.clients =data
        })
    },
    error => console.log(error));
  }

  get ClientName(){
    return this.clientupdateform.get('name');
  }

  get ClientEmail(){
    return this.clientupdateform.get('email');
  }

  get ClientBranch(){
    return this.clientupdateform.get('branch');
  }

  get ClientId(){
    return this.clientupdateform.get('id');
  }

  changeisUpdate(){
    this.isupdated=false;
  }
}
