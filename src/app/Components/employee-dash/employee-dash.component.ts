import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services';

@Component({
  selector: 'app-employee-dash',
  templateUrl: './employee-dash.component.html',
  styleUrls: ['./employee-dash.component.css']
})
export class EmployeeDashComponent implements OnInit {

  constructor(
    public EmployeeService: EmployeeService
  ) { }

  ngOnInit(): void {
  }

}
