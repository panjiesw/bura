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

import { hsl, px, rem, ColorHelper } from 'csx';
import { FontFace } from 'typestyle/lib/types';


const black: ColorHelper = hsl(0, '0%', '4%');

const blackBis: ColorHelper = hsl(0, '0%', '7%');

const blackTer: ColorHelper = hsl(0, '0%', '14%');


const greyDarker: ColorHelper = hsl(0, '0%', '21%');

const greyDark: ColorHelper = hsl(0, '0%', '29%');

const grey: ColorHelper = hsl(0, '0%', '48%');

const greyLight: ColorHelper = hsl(0, '0%', '71%');

const greyLighter: ColorHelper = hsl(0, '0%', '86%');


const whiteTer: ColorHelper = hsl(0, '0%', '96%');

const whiteBis: ColorHelper = hsl(0, '0%', '98%');

const white: ColorHelper = hsl(0, '0%', '100%');


const orange: ColorHelper = hsl(14, '100%', '53%');

const yellow: ColorHelper = hsl(48, '100%', '67%');

const green: ColorHelper = hsl(141, '71%', '48%');

const turquoise: ColorHelper = hsl(171, '100%', '41%');

const cyan: ColorHelper = hsl(204, '86%', '53%');

const blue: ColorHelper = hsl(217, '71%', '53%');

const purple: ColorHelper = hsl(271, '100%', '71%');

const red: ColorHelper = hsl(348, '100%', '61%');

export const colors = {
  black,
  blackBis,
  blackTer,
  greyDarker,
  greyDark,
  grey,
  greyLight,
  greyLighter,
  whiteTer,
  whiteBis,
  white,
  orange,
  yellow,
  green,
  turquoise,
  cyan,
  blue,
  purple,
  red,
};

// tslint:disable-next-line:max-line-length
// $family-sans-serif: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !default
const familySansSerif: FontFace = {
  fontFamily:
    // tslint:disable-next-line:max-line-length
    'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
};
// $family-monospace: monospace !default
const familyMonospace: FontFace = {
  fontFamily: 'monospace',
};
// $render-mode: optimizeLegibility !default
const renderMode: string = 'optimizeLegibility';

const size1 = rem(3);
const size2 = rem(2);
const size3 = rem(2);
const size4 = rem(1);
const size5 = rem(1);
const size6 = rem(1);
const size7 = rem(0);

const weightLight: number = 300;
const weightNormal: number = 400;
const weightMedium: number = 500;
const weightSemibold: number = 600;
const weightBold: number = 700;

export const typography = {
  familySansSerif,
  familyMonospace,
  renderMode,
  size1,
  size2,
  size3,
  size4,
  size5,
  size6,
  size7,
  weightLight,
  weightNormal,
  weightMedium,
  weightSemibold,
  weightBold,
};

const gap = px(32);
const tablet = px(769);
const desktop = px(960 + 2 * 32);
const widescreen = px(1152 + 2 * 32);
const fullhd = px(1344 + 2 * 32);

export const responsive = {
  gap,
  tablet,
  desktop,
  widescreen,
  fullhd,
};

// Miscellaneous

const easing: string = 'ease-out';
const radiusSmall = px(2);
const radius = px(3);
const radiusLarge = px(5);
const radiusRounded = px(290486);
const speed: string = '86ms';

export const misc = {
  easing,
  radiusSmall,
  radius,
  radiusLarge,
  radiusRounded,
  speed,
};

// Flags

// $variable-columns: true !default
const variableColumns: boolean = true;

export const flags = {
  variableColumns,
};
