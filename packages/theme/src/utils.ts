/**
 *    Copyright 2018 Panjie Setiawan Wicaksono
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import { supportedProperty, supportedValue } from 'css-vendor';
import { ColorHelper, rgba, white } from 'csx';
import { CSSProperties } from 'typestyle/lib/types';

export function powerNumber(num: number, exp: number): number {
  let value = 1;
  if (exp > 0) {
    for (let i = 1; i <= exp; i++) {
      value = value * num;
    }
  } else if (exp < 0) {
    for (let i = 1; i <= -exp; i++) {
      value = value / num;
    }
  }
  return value;
}

export function colorLuminance(color: ColorHelper): number {
  let colorRgb = {
    red: color.red(),
    // tslint:disable-next-line:object-literal-sort-keys
    green: color.green(),
    blue: color.blue(),
  };
  for (const name in colorRgb) {
    if (colorRgb.hasOwnProperty(name)) {
      let value = colorRgb[name] / 255;
      if (value < 0.03928) {
        value = value / 12.92;
      } else {
        value = (value + 0.055) / 1.055;
        value = powerNumber(value, 2);
      }
      colorRgb = {
        ...colorRgb,
        [name]: value,
      };
    }
  }
  return (
    colorRgb.red * 0.2126 + colorRgb.green * 0.7152 + colorRgb.blue * 0.0722
  );
}

export function findColorInvert(color: ColorHelper): ColorHelper {
  if (colorLuminance(color) > 0.55) {
    return rgba(0, 0, 0, 0.7);
  }
  return white;
}

export function camelToDash(str: string): string {
  return str.replace(/([a-zA-Z0-9])(?=[A-Z0-9])/g, '$1-').toLowerCase();
}

export function dashToCamel(str: string): string {
  return str.replace(/(\-[a-z0-9])/ig, s => s.toUpperCase());
}

export function lowerFirst(str: string): string {
  return `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
}

export function upperFirst(str: string): string {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export function merge(object: any, ...src: any[]): any {
  for (let i = 0, l = src.length, s; i < l; i++) {
    s = src[i];
    for (const idx in s) {
      if (s.hasOwnProperty(idx) && s[idx]) {
        object[idx as any] = s[idx];
      }
    }
  }
  return object as any;
}

export const prefix = (props: CSSProperties): CSSProperties =>
  Object.keys(props)
    .reduce<CSSProperties>((acc, prop) => {
      const dash = camelToDash(prop);
      const p = supportedProperty(dash);
      if (p !== false && dashToCamel(p) !== prop) {
        acc[p] = props[prop];
        return acc;
      }

      const v = supportedValue(dash, props[prop]);
      if (v !== false) {
        acc[prop] = v;
      }
      return acc;
    }, props);
