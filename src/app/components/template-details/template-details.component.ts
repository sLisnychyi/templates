import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {Template} from "../../models/template.model";
import {TemplateMetadataProvider} from "../../providers/template-metadata-provider";

@Component({
  selector: 'template-details',
  templateUrl: './template-details.component.html',
  styleUrls: ['./template-details.component.css']
})
export class TemplateDetailsComponent  implements OnChanges {

  @Input() template : Template;

  selectedSize: string;
  sizes: Array<String>;

  selectedType: string;
  types: Array<String>;

  selectedPlacement: string;
  placements: Array<String>;

  selectedOs: string;
  operationSystems: Array<String>;

  showClose = false;
  testMode = false;
  isMobileWeb = false;
  isPrivate = false;
  isMraid = false;
  isOverlay = false;
  isBlind = false;
  isEngagement = false;

  partner : string;
  expression : string;
  creativeExpression : string;


  constructor(public templateMetadata: TemplateMetadataProvider) {
    this.template = new Template();
    this.sizes = templateMetadata.sizes;
    this.types = templateMetadata.types;
    this.placements = templateMetadata.placements;
    this.operationSystems = templateMetadata.os;
  }

  ngOnInit() {
  }

  ngOnChanges() : void{
    console.log("CHANGE AQUIRIED1")
    if(this.template){

      console.log(this.template)

      let size = this.template.size;
      this.selectedSize = size.width + "x" + size.height;
      this.selectedPlacement = this.template.placement;
      this.selectedType = this.template.format.formatType;
      if(this.template.targetRules) {
        this.selectedOs = this.template.targetRules.os;
      }
      this.partner = this.template.partner;
      this.expression = this.template.expression;
      this.creativeExpression = this.template.creativeExpression;
    }
  }

  sayAlarm(){
    console.log("ALARM!");
  }




}

