import * as React from 'react';
import styles from './Helloworldwebpart.module.scss';
import { IHelloworldwebpartProps } from './IHelloworldwebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';


export default class Helloworldwebpart extends React.Component<IHelloworldwebpartProps, {}> {
  public render(): React.ReactElement<IHelloworldwebpartProps> {
    return (
      <div className="${ styles.helloworldwebpart }">
        <div className="${ styles.container }">
          <div className="${ styles.row }">
            <div className="${ styles.column }">
              <span className="${ styles.title }">Welcome to SharePoint!</span>
              <p className="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
              <p className="${ styles.description }">${escape(this.props.description)}</p>
              <p className="${ styles.description }">${escape(this.props.test)}</p>
              <p className="${ styles.description }">Loading from ${escape(this.context.pageContext.web.title)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className="${ styles.label }">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
