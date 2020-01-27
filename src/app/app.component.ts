import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {Materiau} from './materiau';
import {Imprimante} from './imprimante';
import {Scanner} from './scanner';
import {Logiciel} from './logiciel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private appService: AppService) {}
  title = 'untitled1';
  imprimantes = [];
  materiaux = [];
  selectedMate: Materiau = null;
  selectedImp: Imprimante = null;
  selectedScan: Scanner = null;
  selectedLogi: Logiciel = null;
  filterMat: Materiau = new Materiau();
  scanners = [];
  logiciels = [];

  ngOnInit() {
     this.appService.getMateriaux().subscribe(response => {
      // @ts-ignore
       this.materiaux = response.materiaux;
       console.log(this.materiaux);
    });
     this.appService.getImrpimantes().subscribe(response => {
      // @ts-ignore
       this.imprimantes = response.imprimante;
       console.log(this.imprimantes);
    });
     this.appService.getScanner().subscribe(response => {
      // @ts-ignore
       this.scanners = response.scanner;
       console.log(this.scanners);
    });
     this.appService.getLogiciel().subscribe(response => {
      // @ts-ignore
       this.logiciels = response.logiciel;
       console.log(this.logiciels);
    });
  }

  selectMat(materiau: Materiau) {
    this.selectedMate = materiau;
  }
  selectImp(imprimante: Imprimante) {
    this.selectedImp = imprimante;
  }
  selectScan(scan: Scanner) {
    this.selectedScan = scan;
  }
  selectLogiciel(logi: Logiciel) {
    this.selectedLogi = logi;
  }

  getTotalPrice() {
    let total = 0;
    if (this.selectedImp.prix.toString() !== '-') {
      total = parseFloat(String(total)) + parseFloat(String(this.selectedImp.prix));
    }
    if (this.selectedScan.prix.toString() !== '-') {
      total += parseFloat(String(this.selectedScan.prix));
    }
    if (this.selectedLogi.prix.toString() !== '-') {
      total += parseFloat(String(this.selectedLogi.prix));
    }
    return total;
  }

  getNote() {
    let noteTotale = (parseFloat(String(this.selectedImp.Intvitesse))
    + parseFloat(String(this.selectedImp.Intsurface))
    + parseFloat(String(this.selectedImp.Intprecision))
    + parseFloat(String(this.selectedScan.note))
    + parseFloat(String(this.selectedScan.Intprecision))
    + parseFloat(String(this.selectedLogi.facilite))
    + parseFloat(String(this.selectedLogi.Rapidite))) ;
    noteTotale /= 26;
    console.log(noteTotale);
    return parseFloat(String(noteTotale ) ) * 10;
  }
}
