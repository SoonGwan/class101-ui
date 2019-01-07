import React from "react";
import { IconProps } from '../index';
export default class SvgEditOutline extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    size: 24
  };

  public render() {
    return <svg width={this.props.size} height={this.props.size} viewBox="0 0 24 24"><path fill={this.props.fillColor} fillRule="evenodd" d="M13.5 7.914l-8.5 8.5V19h2.586l8.5-8.5L13.5 7.914zM14.914 6.5L17.5 9.086l.793-.793a1.828 1.828 0 0 0-2.586-2.586l-.793.793zM4 21a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707l11-11a3.828 3.828 0 0 1 5.414 5.414l-11 11A1 1 0 0 1 8 21H4z" /></svg>;
  }

}