import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

employeeArray: Employee[] = [
  {id: 1, name: 'Javier', country: 'Colombia'},
  {id: 2, name: 'Ana', country: 'Colombia'},
  {id: 3, name: 'Pedro', country: 'Colombia'}
];

selectEmployee: Employee = new Employee();

AddOrEdit(){
  if (this.selectEmployee.name == null) {
    alert('Debes rellenar los campos!!!')
    } else if (this.selectEmployee.id == 0)
   {
     
     this.selectEmployee.id = this.employeeArray.length + 1;
     this.employeeArray.push(this.selectEmployee)  
     console.log('ddd');
   } 
  this.selectEmployee = new Employee();
 }  

 openForEdit(employ: Employee){
   this.selectEmployee = employ;
 }

 delete(){
   if (confirm('Are you sure you want to delete it?')) {
     this.employeeArray = this.employeeArray.filter( x => x != this.selectEmployee);

     this.selectEmployee = new Employee();
   }
 }

}// fin class