export class Template{
  "id" : string;
  "name" : string;
  "expression" : string;
  "creativeExpression" : string;
  "partner" : string;
  "placement" : string;
  "format" : {
  "formatType" : string,
    "size" : {
    "width" : number,
      "height" : number
  }
};
  "androidImageSize" : string; // androidImageWidth
  "iOSImageSize" : string; // iOSImageWidth
  // these are duplication of width/height from format, but leave them at this stage
  "size" : {
  "width" : number,
  "height" : number
};

  "pAdsNum" : number;
  "bnrt" : number;
  "closeOption" : string;
  "closeLocation" : string;
  "ctaColor" : string;
  "isMobileWeb" : boolean;
  "isPrivate" : boolean;
  "isOverlay" : boolean;
  "showClose" : boolean;
  "isNetwork" : boolean;
  "isNativeVideo" : boolean;
  "isEngagement" : boolean;
  "isBigIcon" : boolean;
  "isBlind" : boolean;
  "isTimer" : boolean;
  "isFloating" : boolean;
  "isnumbereractive" : boolean;
  "isMobileWebOnly" : boolean;
  "isAllClickable" : boolean;
  "styleClass" : string;
  "isHtmlVideo" : boolean;
  "bgEffect" : string;
  "targetRules" : {
  "isTest" : boolean,
    "isMraid" : boolean,
    "isVideo" : boolean,
    "isCoppa" : boolean, // name not in 2D_top_apps_banner_infra,3D_banner_infra
    "isPortrait" : boolean, // utils.diffnumber
    "os" : string,
    "minOs" : number,
    "maxOs" : number,
    "minSdkVersion" : string,
    "maxSdkVersion" : string,
    "deviceType" : string,
    "categoryInclude" : string[],
    "categoryExclude" : string[],
    "appIdInclude" : string[], // publisherId in templates
    "appIdExclude" : string[], // publisherId in templates
    "developerIdInclude" : string[],
    "developerIdExclude" : string[],
    "channelIdInclude" : string[],
    "channelIdExclude" : string[],
    "geoInclude" : string[],
    "geoExclude" : string[],
    "serverInclude" : string[],
    "serverExclude" : string[],
}
}
