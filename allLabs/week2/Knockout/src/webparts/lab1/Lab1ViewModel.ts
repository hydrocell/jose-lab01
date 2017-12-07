import * as ko from 'knockout';
import styles from './Lab1.module.scss';
import { ILab1WebPartProps } from './Lab1WebPart';

export interface ILab1BindingContext extends ILab1WebPartProps {
  shouter: KnockoutSubscribable<{}>;
}

export default class Lab1ViewModel {
  public description: KnockoutObservable<string> = ko.observable('');

  public lab1Class: string = styles.lab1;
  public containerClass: string = styles.container;
  public rowClass: string = styles.row;
  public columnClass: string = styles.column;
  public titleClass: string = styles.title;
  public subTitleClass: string = styles.subTitle;
  public descriptionClass: string = styles.description;
  public buttonClass: string = styles.button;
  public labelClass: string = styles.label;

  constructor(bindings: ILab1BindingContext) {
    this.description(bindings.description);

    // When web part description is updated, change this view model's description.
    bindings.shouter.subscribe((value: string) => {
      this.description(value);
    }, this, 'description');
  }
}
