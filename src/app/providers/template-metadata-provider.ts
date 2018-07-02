import {Injectable} from "@angular/core";

@Injectable()
export class TemplateMetadataProvider{

  sizes = ['300x50','320x50','300x250'];

  placements = ['placement1','placement2', 'placement3', 'placement4'];

  types = ['IMAGE', 'VIDEO'];

  os = ['ANDROID', 'IOS'];

}
