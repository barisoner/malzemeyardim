import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string ='Kurumlara Yardım';
  activeButtonId:string | null = null;
  isSidenavVisible: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void{
    this.router.events.pipe(filter(event => event instanceof NavigationEnd),
    map(()=> {
      let route = this.activatedRoute;
      while(route.firstChild){
        route = route.firstChild;
      }
      return route.snapshot.data['title'] || 'Kurumlara Yardım';
    })).subscribe((title:string)=> {
      if(title){
        this.title = title;
      }
    })

    //--------------------------------------------

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.urlAfterRedirects.includes('talep')) {
        this.isSidenavVisible = false;  
      } else {
        this.isSidenavVisible = true; 
      }
    });
  }

  toggleSidenav():void{
    this.isSidenavVisible = !
    this.isSidenavVisible;
  }

  setActiveButton(id: string):void {
    this.activeButtonId = id
  }

  logout(): void{
    this.activeButtonId = null;
    this.router.navigate(['/']);
  }
}
