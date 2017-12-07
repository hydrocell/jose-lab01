import * as React from 'react';
import styles from './Lab1.module.scss';
import { ILab1Props } from './ILab1Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Lab1 extends React.Component<ILab1Props, {}> {
  public render(): React.ReactElement<ILab1Props> {
    return (
      <div className={ styles.lab1 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
