import * as React from 'react';
import { IconProps } from '../index';
export default class SvgStarOutline extends React.PureComponent<IconProps> {
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
          d="M8.463 17.297L12 15.437l.93.49 2.607 1.37-.675-3.938.753-.734 2.108-2.055-3.954-.575-.465-.943L12 6.412l-1.77 3.583-1.04.151-2.912.424 2.861 2.789-.178 1.036-.498 2.902zm-.79 2.675c-1.03.542-1.706.051-1.51-1.096l.827-4.819-3.501-3.413c-.834-.813-.575-1.607.577-1.774l4.837-.703 2.165-4.384c.515-1.044 1.35-1.044 1.865 0l2.164 4.384 4.838.703c1.152.167 1.41.961.577 1.774l-3.501 3.413.826 4.819c.196 1.147-.478 1.638-1.509 1.096L12 17.697l-4.327 2.275z"
          fill={this.props.fillColor}
        />
      </svg>
    );
  }
}
