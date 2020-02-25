import * as React from 'react';
import { IconProps } from '../index';
export default class SvgAlertCircleOutline extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#3E4042',
    accentColor: '#DDE0E2',
    size: 24,
  };

  public render() {
    return (
      <svg
        width={this.props.size}
        height={this.props.size}
        fill="none"
        style={this.props.style}
        className={this.props.className}
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
          fill={this.props.fillColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 13.5v-6h-2v6h2zm0 3v-2h-2v2h2z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}