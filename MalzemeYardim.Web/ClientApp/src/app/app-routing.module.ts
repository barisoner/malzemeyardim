import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TalepComponent } from './Components/talep/talep.component';
import { BirimComponent } from './Components/birim/birim.component';
import { DepoComponent } from './Components/depo/depo.component';
import { FirmaComponent } from './Components/firma/firma.component';
import { KurumTanimComponent } from './Components/kurum-tanim/kurum-tanim.component';
import { MalzemeGrubuComponent } from './Components/malzeme-grubu/malzeme-grubu.component';
import { MalzemeTanimComponent } from './Components/malzeme-tanim/malzeme-tanim.component';
import { SatinAlmaComponent } from './Components/satin-alma/satin-alma.component';
import { StokDurumComponent } from './Components/stok-durum/stok-durum.component';
import { StokYonetimiComponent } from './Components/stok-yonetimi/stok-yonetimi.component';
import { TanimlarComponent } from './Components/tanimlar/tanimlar.component';

const routes: Routes = [
  {path: '',component: HomeComponent, data: { title:'Kurumlara Yardım'}},
  {path: 'talep', component: TalepComponent, data: { title:'Talep Gridi'}},
  {path: 'stokYonetimi', component: StokYonetimiComponent, data: { title:'Stok Yonetimi'}},
  {path: 'satinAlma', component: SatinAlmaComponent, data: { title:'Satın Alma'}},
  {path: 'stokDurum', component: StokDurumComponent, data: { title:'Stok Durum'}},
  {path: 'tanımlar', component: TanimlarComponent, data: { title:'Tanımlar'}},
  {path: 'depo', component: DepoComponent, data: { title:'Depo'}},
  {path: 'kurumTanim', component: KurumTanimComponent, data: { title:'Kurum Tanim'}},
  {path: 'birim', component: FirmaComponent, data: { title:'Birim'}},
  {path: 'malzemeGrubu', component: MalzemeGrubuComponent, data: { title:'Malzeme Grubu'}},
  {path: 'malzemeTanim', component: MalzemeTanimComponent, data: { title:'Malzeme Tanim'}},
  {path: 'firma', component: BirimComponent, data: { title:'Firma'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}