import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Template} from "../models/template.model";
import {TemplateResponseDto} from "../models/templatesResponse";
import {TemplateRequest} from "../models/templateRequest";

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  private templateUrl = "http://localhost:8080/templates";
  private partnerUrl = "http://localhost:8080/partners";
  private templateProcessUrl = "http://localhost:8080/template";

  constructor(private http: HttpClient) { }

  getTemplates(templateReq: TemplateRequest) : Observable<TemplateResponseDto[]> {
    // let body = {placements : ['a','b', 'c']};
    return this.http.post<TemplateResponseDto[]>(this.templateUrl, templateReq,
      {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      });
  }

  getPartners() : Observable<Array<String>> {
    return this.http.get<Array<String>>(this.partnerUrl);
  }

  getTemplateByName(name: string) : Observable<Array<Template>> {
    return this.http.get<Array<Template>>(this.templateProcessUrl, {params : {name : name}});
  }

  removeTemplate(templateId:string) : Observable<String> {
    return this.http.delete<String>(this.templateProcessUrl, {params : {id : templateId}})
  }



}
