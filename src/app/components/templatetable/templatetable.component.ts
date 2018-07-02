import {Component, OnInit, ViewChild} from '@angular/core';
import {TemplateService} from "../../services/template.service";
import {TemplateRequest} from "../../models/templateRequest";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/index";
import {TemplateResponseDto} from "../../models/templatesResponse";
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {map, startWith} from 'rxjs/operators';
import {Router} from "@angular/router";


@Component({
  selector: 'templatetable',
  templateUrl: './templatetable.component.html',
  styleUrls: ['./templatetable.component.css']
})
export class TemplatetableComponent implements OnInit {

  dataSource;
  displayedColumns = ['name', 'actionsColumn'];

  partners: Array<String>;
  partnerControl = new FormControl();
  filteredPartners: Observable<Array<String>>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  placements = new FormControl();
  placementsList = ['template1', 'template2', 'template3'];

  testMode = false;
  mRaid = false;
  mobileWeb = false;
  priv = false;
  blind = false;

  constructor(private templateService: TemplateService, private router: Router) {

  }

  ngOnInit() {
    const templateReq = new TemplateRequest();
    templateReq.placements = this.placements.value;
    templateReq.partner = this.partnerControl.value;
    templateReq.testMode = this.testMode;
    templateReq.mraid = this.mRaid;
    templateReq.mobileWeb = this.mobileWeb;
    templateReq.privateTemplate = this.priv;
    templateReq.blind = this.blind;

    console.log(JSON.stringify(templateReq));

    this.templateService.getTemplates(templateReq)
      .subscribe(resp=>{
        console.log(resp);
        // this.nam = resp.names;
        this.dataSource = new MatTableDataSource(resp);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });

    this.templateService.getPartners()
      .subscribe(resp => {
        console.log(resp);
        this.partners = resp;
        this.filteredPartners = this.partnerControl.valueChanges
          .pipe(
            startWith(''),
            map(val => this.filter(val))
          );
      });
  }

  filter(val: string): Array<String> {
      return this.partners.filter(partner =>
        partner.toLowerCase().includes(val.toLowerCase()));
  }

  // setName() {
  //   this.names = this.templateService.getTemplates();
  // }

  startEdit(row: TemplateResponseDto){
    console.log(row)
  }

  onChange(event:Event){
    console.log(event);
    console.log(this.placements);
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // addNewClick(){
  //   this.router.navigateByUrl('/template');
  // }



}

// export class TemplateDataSource extends DataSource<any>{
//   constructor(private templateService: TemplateService) {
//     super();
//   }
//
//   connect(): Observable<any> {
//     const templateReq = new TemplateRequest();
//     templateReq.placements = ["template1","template2","template3"];
//     templateReq.partner = "partner";
//     templateReq.testMode = false;
//     templateReq.mraid = false;
//     templateReq.mobileWeb = false;
//     templateReq.privateTemplate = false;
//     templateReq.blind = false;
//     return this.templateService.getTemplates(templateReq);
//   }
//
//   disconnect(){
//
//   }
//
// }

