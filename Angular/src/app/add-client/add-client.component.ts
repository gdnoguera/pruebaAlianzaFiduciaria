import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Client } from '../client';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  constructor(private clientservice:ClientService) { }

  client : Client=new Client();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  clientsaveform=new FormGroup({
    name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    email:new FormControl('',[Validators.required,Validators.email]),
    branch:new FormControl()
  });

  saveClient(saveClient){
    this.client=new Client();   
    this.client.name=this.ClientName.value;
    this.client.email=this.ClientEmail.value;
    this.client.branch=this.ClientBranch.value;
    this.submitted = true;
    this.save();
  }

  

  save() {
    this.clientservice.createClient(this.client)
      .subscribe(data => console.log(data), error => console.log(error));
    this.client = new Client();
  }

  get ClientName(){
    return this.clientsaveform.get('name');
  }

  get ClientEmail(){
    return this.clientsaveform.get('email');
  }

  get ClientBranch(){
    return this.clientsaveform.get('branch');
  }

  addClientForm(){
    this.submitted=false;
    this.clientsaveform.reset();
  }
}
