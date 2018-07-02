import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {TemplateService} from "../../services/template.service";
import {Template} from "../../models/template.model";
import {DeleteConfirmDialogComponent} from "../../shared/delete-confirm-dialog/delete-confirm-dialog.component";
import {TemplateDetailsComponent} from "../template-details/template-details.component";

@Component({
  selector: 'newtemplate',
  templateUrl: './newtemplate.component.html',
  styleUrls: ['./newtemplate.component.css']
})
export class NewtemplateComponent implements OnInit {

  templateName;

  dataSource;
  displayedColumns = ['id', 'name', 'placement', 'partner', 'actionsColumn'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(TemplateDetailsComponent) templateDetails: TemplateDetailsComponent;

  selectedTemplate : Template;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private templateService: TemplateService,
              public dialog: MatDialog) { }

  ngOnInit() {
    let templatename = this.activatedRoute.snapshot.params['name'];
    console.log('templatename =' + templatename);
    if(templatename){
      this.templateName = templatename;
      console.log(this.templateName);
      this.templateService.getTemplateByName(templatename)
        .subscribe(resp => {
          this.dataSource = new MatTableDataSource(resp);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });

    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editTemplate(template:Template){
    this.selectedTemplate = template;
    // this.templateDetails.sayAlarm();
  }

  removeTemplate(template:Template){
    const templateToRemove = this.dataSource.data.find(e=>e.id === template.id);
    console.log(templateToRemove);

    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      height: '400px',
      width: '600px',
      data: { id: template.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.templateService.removeTemplate(templateToRemove.id)
          .subscribe(resp=>{
            if(resp){
              this.templateService.getTemplateByName(this.templateName)
                .subscribe(resp => {
                  this.dataSource = new MatTableDataSource(resp);
                  this.dataSource.sort = this.sort;
                  this.dataSource.paginator = this.paginator;
                  this.selectedTemplate = new Template();
                });
            }
          })
      }
    });
  }

}
