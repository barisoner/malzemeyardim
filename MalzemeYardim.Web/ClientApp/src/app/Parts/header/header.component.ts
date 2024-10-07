import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  @Input() title:string = 'Kurumlara Yardım';
  showLogoutButton:boolean = true;
  
  constructor(private router: Router, activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.router.events.subscribe(()=>{
      this.showLogoutButton = this.router.url !== '/';
    })
  }
  
  @Output() logoutEvent = new EventEmitter<void>();

  onLogout():void{
    const confirmation = window.confirm(`${this.title} sayfasından çıkmak istediğinize emin misiniz ? Ana sayfaya yönlendirileceksiniz.`)
    if(confirmation){
      this.logoutEvent.emit();
      this.router.navigate(['/']);
    }
  }
}
