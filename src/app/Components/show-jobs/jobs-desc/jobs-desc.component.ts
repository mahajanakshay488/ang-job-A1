import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Subscription } from 'rxjs';
import { EmployeeService, VacanciesService } from 'src/app/services';

@Component({
  selector: 'app-jobs-desc',
  templateUrl: './jobs-desc.component.html',
  styleUrls: ['./jobs-desc.component.css']
})
export class JobsDescComponent implements OnInit, OnDestroy {
  vacancy;
  subs: Subscription;
  constructor(
    private vacancyService: VacanciesService,
    private router: Router
  ) { }

  ngOnInit(){
    this.subs = this.vacancyService.activeVacancy.subscribe(value => {
      this.vacancy = value;
      console.log(`value ${value}`);
    });
    console.log('show init working');
  }

  onApplyNow(){
    this.router.navigate(['/submit-resume']);
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}
