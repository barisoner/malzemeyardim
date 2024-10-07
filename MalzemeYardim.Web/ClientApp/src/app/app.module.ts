import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Parts/header/header.component';
import { SidenavComponent } from './Parts/sidenav/sidenav.component';
import { TalepComponent } from './Components/talep/talep.component';
import { StokYonetimiComponent } from './Components/stok-yonetimi/stok-yonetimi.component';
import { SatinAlmaComponent } from './Components/satin-alma/satin-alma.component';
import { StokDurumComponent } from './Components/stok-durum/stok-durum.component';
import { TanimlarComponent } from './Components/tanimlar/tanimlar.component';
import { DepoComponent } from './Components/depo/depo.component';
import { KurumTanimComponent } from './Components/kurum-tanim/kurum-tanim.component';
import { BirimComponent } from './Components/birim/birim.component';
import { MalzemeGrubuComponent } from './Components/malzeme-grubu/malzeme-grubu.component';
import { MalzemeTanimComponent } from './Components/malzeme-tanim/malzeme-tanim.component';
import { FirmaComponent } from './Components/firma/firma.component'

//KendoUI
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    TalepComponent,
    StokYonetimiComponent,
    SatinAlmaComponent,
    StokDurumComponent,
    TanimlarComponent,
    DepoComponent,
    KurumTanimComponent,
    BirimComponent,
    MalzemeGrubuComponent,
    MalzemeTanimComponent,
    FirmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    LabelModule,
    LayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
