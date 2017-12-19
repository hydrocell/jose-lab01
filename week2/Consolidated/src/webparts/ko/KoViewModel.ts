import * as ko from 'knockout';
import styles from './Ko.module.scss';
import { IKoWebPartProps } from './KoWebPart';

export interface IKoBindingContext extends IKoWebPartProps {
  shouter: KnockoutSubscribable<{}>;
}

export default class KoViewModel {
  public description: KnockoutObservable<string> = ko.observable('');

  public koClass: string = styles.ko;
  public containerClass: string = styles.container;
  public rowClass: string = styles.row;
  public columnClass: string = styles.column;
  public titleClass: string = styles.title;
  public subTitleClass: string = styles.subTitle;
  public descriptionClass: string = styles.description;
  public buttonClass: string = styles.button;
  public labelClass: string = styles.label;

  constructor(bindings: IKoBindingContext) {
    this.description(bindings.description);

    // When web part description is updated, change this view model's description.
    bindings.shouter.subscribe((value: string) => {
      this.description(value);
    }, this, 'description');
  }
}
