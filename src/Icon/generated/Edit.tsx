import * as React from 'react';
import { IconProps } from '../index';
export default class SvgEdit extends React.PureComponent<IconProps> {
  public static defaultProps: Partial<IconProps> = {
    fillColor: '#1B1C1D',
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
          d="M4 21a1 1 0 01-1-1v-4a1 1 0 01.293-.707l11-11a3.828 3.828 0 115.414 5.414l-11 11A1 1 0 018 21H4zm1-2h2.586l.707-.707-2.586-2.586-.707.707V19z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
