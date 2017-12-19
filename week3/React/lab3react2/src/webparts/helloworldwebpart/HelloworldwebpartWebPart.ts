import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneToggle,
  PropertyPaneSlider,
  PropertyPaneLabel,
  PropertyPaneLink
} from '@microsoft/sp-webpart-base';

import * as strings from 'HelloworldwebpartWebPartStrings';
import Helloworldwebpart from './components/Helloworldwebpart';
import { IHelloworldwebpartProps } from './components/IHelloworldwebpartProps';
import { PropertyPaneChoiceGroup } from '@microsoft/sp-webpart-base/lib/propertyPane/propertyPaneFields/propertyPaneChoiceGroup/PropertyPaneChoiceGroup';


export interface IHelloworldwebpartWebPartProps {
  description: string;
  test: string;
  test1: boolean;
  test2: string;
  test3: boolean;
  test4: number;
  test5:string;
  test6:boolean;
}

export default class HelloworldwebpartWebPart extends BaseClientSideWebPart<IHelloworldwebpartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHelloworldwebpartProps > = React.createElement(
      Helloworldwebpart,
      {
        description: this.properties.description,
        test: this.properties.test,
        test1: this.properties.test1,
        test2:this.properties.test2,
        test3:this.properties.test3,
        test4: this.properties.test4,
        test5:this.properties.test5,
        test6:this.properties.test6
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
              PropertyPaneTextField('description', {
                label: 'Description'
              }),
              PropertyPaneTextField('test', {
                label: 'Multi-line Text Field',
                multiline: true
              }),
              PropertyPaneCheckbox('test1', {
                text: 'Checkbox'
              }),
              PropertyPaneDropdown('test2', {
                label: 'Dropdown',
                options: [
                  { key: '1', text: 'One' },
                  { key: '2', text: 'Two' },
                  { key: '3', text: 'Three' },
                  { key: '4', text: 'Four' }
                ]}),
              PropertyPaneToggle('test3', {
                label: 'Toggle',
                onText: 'On',
                offText: 'Off'
              }),
              PropertyPaneSlider('test4', {
                label:'Max Items',  
                min:5,  
                max:20,  
                value:5,  
                showValue:true,  
                step:1   
              }),
              PropertyPaneChoiceGroup('test5', {
                label: 'Choice',
                options: [
                  { key: '1', text: 'One' },
                  { key: '2', text: 'Two' },
                  { key: '3', text: 'Three' },
                  { key: '4', text: 'Four' }
                ]}),
              PropertyPaneLink('test6', {
               disabled: false,
               href: 'http://www.google.com',
               text:'My link'
              })
            ]
            }
          ]
        }
      ]
    };
  }
}
