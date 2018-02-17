import { NestedCSSProperties } from 'typestyle/lib/types';

export interface ICustomCSSProperties extends NestedCSSProperties {
  ':-moz-placeholder'?: any;
  ':-webkit-input-placeholder'?: any;
  '-moz-placeholder'?: any;
  '-ms-input-placeholder'?: any;
}
