import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  activeButonId:string | null = null;
  @Input() activeButtonId:string | null = null;
  @Output() buttonClicked = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        const currentRoute = event.urlAfterRedirects;
        if(currentRoute.includes('talep')){
          this.activeButonId = 'talep';
        }
        else if(currentRoute.includes('stokYonetimi')){
          this.activeButonId = 'stokYonetimi'
        }
        else if(currentRoute.includes('satinAlma')){
          this.activeButonId = 'satinAlma'
        }
        else if(currentRoute.includes('stokDurum')){
          this.activeButonId = 'stokDurum'
        }
        else if(currentRoute.includes('tanımlar')){
          this.activeButonId = 'tanımlar'
        }
        else if(currentRoute.includes('depo')){
          this.activeButonId = 'depo'
        }
        else if(currentRoute.includes('kurumTanim')){
          this.activeButonId = 'kurumTanim'
        }
        else if(currentRoute.includes('birim')){
          this.activeButonId = 'birim'
        }
        else if(currentRoute.includes('malzemeGrubu')){
          this.activeButonId = 'malzemeGrubu'
        }
        else if(currentRoute.includes('malzemeTanim')){
          this.activeButonId = 'malzemeTanim'
        }
        else if(currentRoute.includes('firma')){
          this.activeButonId = 'firma'
        }
      }
    });
  }


  onButtonClick(id: string, route: string):void{
    this.buttonClicked.emit(id);
    this.router.navigate([route]);
  }

  navigateTo(route: string):void{
    this.router.navigate([route]);
  }

}
