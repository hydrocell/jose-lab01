declare interface IKoWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'KoWebPartStrings' {
  const strings: IKoWebPartStrings;
  export = strings;
}
